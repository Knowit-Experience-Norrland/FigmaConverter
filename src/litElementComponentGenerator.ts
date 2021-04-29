import { LitElementFromFigmaComponent } from './litElementComponentClass';

var properties = [];
var propertyMaps = [];
var cssRules = [];


/**
 * Create property and map with the param.
 * TODO: change the name of this function to include maps.
 * @param {string} name
 */
const createInputProperties = (name: string) => {
    properties.push(`@property({type: String})\n${name} = '';\n\n`);
    propertyMaps.push(`var ${name}Map = new Map(); \n`);
};


/**
 * Sets the name for the element.
 * @param {LitElementFromFigmaComponent} element
 * @return {*}  {string}
 */
const setNameForElement = (element: LitElementFromFigmaComponent): string => {
    var name = element.name.replace(/\s/g, '');
    if (element.name.includes('-'))
        name = element.stringToCamelCase(element.name.replace(/\s/g, ''), '-');
    return name;
};


/**
 * Creates css selectors for every element recursively.
 *
 * @param {LitElementFromFigmaComponent} element
 * @param {string} outString
 * @return {*}  {string}
 */
const createCssSelectors = (
    element: LitElementFromFigmaComponent,
    outString: string
): string => {
    var name = setNameForElement(element);

    if (element.type !== 'INSTANCE') {
        if (!element.hasParent) {
            outString += `:host {\n`;
            createInputProperties(name);
        } else {
            outString += `.${element.name.replace(/\s/g, '')} {\n`;
            createInputProperties(name);
        }
        createCssRules(element);
        outString += `\${this.renderCssString(${name}Map, this.${name})};\n}\n`;
        if (element.children) {
            element.children.forEach((child) => {
                outString += createCssSelectors(child, '');
            });
        }
    }
    return outString;
};

/**
 * Finds the parent padding offset for the element.
 * This is used to create the right size for the child element.
 *
 * @param {LitElementFromFigmaComponent} element
 * @param {('height' | 'width')} prop
 * @return {*}  {number}
 */
const findParentOffset = (
    element: LitElementFromFigmaComponent,
    prop: 'height' | 'width'
): number => {
    var parent = element.parentCssAttributes;
    var offset = 0;
    if (
        parent.paddingTop ||
        parent.paddingRight ||
        parent.paddingBottom ||
        parent.paddingLeft
    ) {
        if (prop === 'width')
            offset = parseInt(parent.paddingRight) + parseInt(parent.paddingLeft);
        else {
            offset = parseInt(parent.paddingTop) + parseInt(parent.paddingBottom);
        }
        return offset;
    }
    return 1;
};

/**
 * Create css rules for all elements in the component.
 * These rules are put in to maps for easy modifications.
 *
 * @param {LitElementFromFigmaComponent} element
 * @param {string} outString
 */
const createCssRules = (element: LitElementFromFigmaComponent) => {
    var name = setNameForElement(element);
    cssRules.push(`${name}Map.set('box-sizing', 'border-box');\n`);
    if (element.cssAttributes.flexDirection)
        cssRules.push(`${name}Map.set('display', 'flex');\n`);
    for (var prop in element.cssAttributes) {
        if (Object.prototype.hasOwnProperty.call(element.cssAttributes, prop)) {
            if (element.cssAttributes[prop] && element.cssAttributes[prop] !== '0') {
                if (element.type === 'TEXT' && prop == 'backgroundColor') {
                    cssRules.push(
                        `${name}Map.set('color', '${element.cssAttributes[prop]}');\n`
                    );
                    break;
                }
                if (!(element.type === 'TEXT' && (prop == 'height' || prop == 'width'))) {
                    if (element.hasParent && (prop == 'width' || prop == 'height')) {
                        var denominator = findParentOffset(element, prop);
                        cssRules.push(
                            `${name}Map.set('${element.camelCaseToDash(
                                prop
                            )}','${Math.round(
                                (parseInt(element.cssAttributes[prop]) /
                                    (parseInt(element.parentCssAttributes[prop]) -
                                        denominator)) *
                                    100
                            )}%');\n`
                        );
                    } else {
                        cssRules.push(
                            `${name}Map.set('${element.camelCaseToDash(prop)}', '${
                                element.cssAttributes[prop]
                            }');\n`
                        );
                    }
                }
            }
        }
    }
    if (
        !(
            Object.keys(element.typography).length === 0 &&
            element.typography.constructor === Object
        )
    ) {
        for (var prop in element.typography) {
            if (prop !== 'setName' && prop !== 'styleId') {
                cssRules.push(
                    `${name}Map.set('${element.camelCaseToDash(prop)}','${
                        element.typography[prop]
                    }') ;\n`
                );
            }
        }
    }
};

/**
 *
 * Create HMTL-tags recursively for the whole component
 * @param {LitElementFromFigmaComponent} element
 * @param {string} outString
 * @return {*}  {string}
 */
const createHTMLElements = (
    element: LitElementFromFigmaComponent,
    outString: string
): string => {
    if (element.hasParent) {
        if (element.type === 'INSTANCE') {
            outString += `<slot>\n`;
        } else if (element.name.split(' ')[0] === 'SLOT') {
            outString += `<slot name="${element.name.split(' ')[1]}">\n`;
        } else if (element.type === 'TEXT') {
            var propertyName = createInputProperty(element, 'text', properties);
            outString += `<p class="${element.name.replace(
                /\s/g,
                ''
            )}">\n   \${this.${propertyName}  ? this.${propertyName}:  \`${
                element.characters
            }\`
            }\n`;
        } else {
            outString += `<div class="${element.name.replace(/\s/g, '')}">\n`;
        }
    }
    if (element.children) {
        if (element.type !== 'INSTANCE' || element.name.split(' ')[0] !== 'SLOT') {
            element.children.forEach((child) => {
                outString += createHTMLElements(child, '');
            });
        }
    }

    if (element.hasParent) {
        if (element.type === 'INSTANCE' || element.name.split(' ')[0] === 'SLOT') {
            outString += `</slot>\n`;
            return outString;
        } else if (element.type === 'TEXT') {
            outString += `</p>\n`;
            return outString;
        } else {
            outString += `</div>\n`;
            return outString;
        }
    }
    return outString;
};

/**
 * Creates a LitElement as a string.
 * @param component
 * @returns string
 */
export const litElementComponent = (component: LitElementFromFigmaComponent): string => {
    const camelCasedName = component.name.includes('-')
        ? component.stringToCamelCase(component.name, '-')
        : component.stringToCamelCase(component.name, '=');

    var elementString = `import { LitElement, html, customElement, property } from 'lit-element';\n`;

    var classStartString = `@customElement('${
        component.name.includes('=') ? component.name.replace('=', '-') : component.name
    }')
export class ${camelCasedName} extends LitElement { \n`;

    // createInputProperties(component);

    // properties.push(`@property({type: String})\nexternalStyleSheet = '';\n\n`);

    var renderString = `

    propertyToMap = (cssRules: Map<string, string>, property: string) => {
        var rules = property.split(';');
        rules.forEach((rule) => {
            // removes all whitespaces that is more than one whitespace
            rule = rule.replace(/\s\s+/g, ' ');
            var key = rule.split(': ')[0];
            var value = rule.split(': ')[1];
            key = key.trim();
            if (cssRules.has(key)) {
                cssRules.delete(key);
            }
            cssRules.set(key, value);
        });
    };

    renderCssString = (cssRules: Map<string, string>, property: string): string => {
        if (property) {
            var mapCopy = new Map();
            for (let [key, value] of cssRules) {
                mapCopy.set(key, value);
            }

            this.propertyToMap(mapCopy, property);

            var cssString = '';
            for (let [key, value] of mapCopy.entries()) {
                cssString += \`\${key}: \${value};\\n\`;
            }
            return cssString;
        }

        var cssString = '';
        for (let [key, value] of cssRules.entries()) {
            cssString += \`\${key}: \${value};\\n\`;
        }
        return cssString;
    };

    render(){
        return html\`
            <style> 
            * {
                margin: 0;
                padding: 0;
                box-sizing: inherit;
            }
            html{
                box-sizing: border-box;
            }
            
            ${createCssSelectors(component, '')}
            </style> 
            ${createHTMLElements(component, '')}
        \`;
    }    
    }`;

    elementString +=
        propertyMaps.join('') +
        cssRules.join('') +
        classStartString +
        properties.join('') +
        renderString;
    properties = [];
    propertyMaps = [];
    cssRules = [];
    return elementString;
};

/**
 *
 * Creates input property for the LitElement.
 * @param {LitElementFromFigmaComponent} element
 * @param {string} prop
 * @param {string[]} properties
 * @return {*}  {string}
 */
const createInputProperty = (
    element: LitElementFromFigmaComponent,
    prop: string,
    properties: string[]
): string => {
    var name = element.name;
    if (element.hasParent) {
        name = name.replace(/\s/g, '');
        prop = prop.charAt(0).toUpperCase() + prop.slice(1);
        properties.push(`@property({type: String})\n${name + prop} = '';\n\n`);
        return name + prop;
    }
    properties.push(`@property({type: String})\n${prop} = '';\n\n`);
    return prop;
};
