import { LitElementFromFigmaComponent } from './litElementComponentClass';

var properties = [];

export const litElementComponent = (
    name: string,
    component: LitElementFromFigmaComponent
): string => {
    const camelCasedName = component.name.includes('-')
        ? component.stringToCamelCase(component.name, '-')
        : component.stringToCamelCase(component.name, '=');

    var elementString = `import { LitElement, html, customElement, property } from 'lit-element';
@customElement('${
        component.name.includes('=') ? component.name.replace('=', '-') : component.name
    }')
export class ${camelCasedName} extends LitElement { \n`;

    // ${createInputProperties(component)}

    properties.push(`@property({type: String})\nexternalStyleSheet = '';\n\n`);

    var renderString = `
        render(){
            return html\`
                <link rel="stylesheet" href="\${this.externalStyleSheet}" />
                <style> 
                * {
                    margin: 0;
                    padding: 0;
                }
                ${createCSSRules(component, '', properties)}
                </style> 
                ${createHTMLElements(component, '')}
            \`;
        }    
    }`;

    elementString += properties.join('') + renderString;

    properties = [];
    return elementString;
};

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
            )}">\n   \${this.${propertyName}  ? this.${propertyName}:  '${
                element.characters
            }'
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

const setFlexBasis = (
    element: LitElementFromFigmaComponent,
    flexUsed: boolean,
    outString: string
): string => {
    var propertyName = createInputProperty(element, 'flexBasis', properties);
    if (element.parentCssAttributes.flexDirection == 'row' && !flexUsed) {
        flexUsed = true;
        outString += `flex-basis:  \${this.${propertyName} ? this.${propertyName} : '${
            (parseInt(element.cssAttributes.width) /
                parseInt(element.parentCssAttributes.width)) *
            100
        }%'};\n`;
    } else if (element.parentCssAttributes.flexDirection == 'column' && !flexUsed) {
        flexUsed = true;
        outString += `flex-basis:  \${this.${propertyName} ? this.${propertyName} : '${
            (parseInt(element.cssAttributes.height) /
                parseInt(element.parentCssAttributes.height)) *
            100
        }%'};\n`;
    }
    return outString;
};

// For keeping the same aspect ration for with and height if only width is changed
// height: ${this.height
//     ? this.height
//     : this.width
//     ? `calc((116/452) * ${this.width})`
//     : '116px'};

/**
 * Creates CSS rules for all elements in the Figma component.
 * * Is recursive to handle CSS rules for the components children *
 * TODO: Refractor to smaller functions for better readability.
 *
 * @param {LitElementFromFigmaComponent} element
 * @param {string} outString
 * @param {string[]} properties
 * @return {*}  {string}
 */
const createCSSRules = (
    element: LitElementFromFigmaComponent,
    outString: string,
    properties: string[]
): string => {
    var flexUsed = false;
    if (element.name.split(' ')[0] === 'SLOT') {
        return outString;
    }
    if (element.type !== 'INSTANCE') {
        if (!element.hasParent) {
            outString += `:host {\n`;
        } else {
            outString += `.${element.name.replace(/\s/g, '')} {\n`;
        }
        if (element.cssAttributes.flexDirection) outString += `display: flex;\n`;

        if (element.hasParent) {
            if (element.parentCssAttributes.flexDirection) {
                outString = setFlexBasis(element, flexUsed, outString);
            }
        }
        for (var prop in element.cssAttributes) {
            var propertyName = createInputProperty(element, prop, properties);
            if (Object.prototype.hasOwnProperty.call(element.cssAttributes, prop)) {
                if (element.cssAttributes[prop] && element.cssAttributes[prop] !== '0') {
                    if (element.type === 'TEXT' && prop == 'backgroundColor') {
                        outString += `color: \${this.${propertyName} ? this.${propertyName} : '${element.cssAttributes[prop]}'};\n`;
                        break;
                    }
                    if (
                        !(
                            element.type === 'TEXT' &&
                            (prop == 'height' || prop == 'width')
                        )
                    ) {
                        if (element.hasParent && (prop == 'width' || prop == 'height')) {
                            // if (element.parentCssAttributes.flexDirection) {
                            //     outString += `${element.camelCaseToDash(prop)}: 100%;\n`;
                            // } else {
                            outString += `${element.camelCaseToDash(
                                prop
                            )}: \${this.${propertyName}  ? this.${propertyName}:  '${Math.round(
                                (parseInt(element.cssAttributes[prop]) /
                                    parseInt(element.parentCssAttributes[prop])) *
                                    100
                            )}%' };\n`;
                            // }
                        } else if (
                            !element.hasParent &&
                            (prop == 'width' || prop == 'height') &&
                            (element.topBottomOffset || element.leftRightOffset)
                        ) {
                            var offset = '';
                            if (prop == 'width') offset = element.leftRightOffset + 'px';

                            if (prop == 'height') offset = element.topBottomOffset + 'px';

                            outString += `${element.camelCaseToDash(
                                prop
                            )}: \${this.${propertyName}  ? \`calc(\${this.${propertyName}} - ${offset})\`:  '${
                                element.cssAttributes[prop]
                            }' };\n`;
                        } else {
                            outString += `${element.camelCaseToDash(
                                prop
                            )}: \${this.${propertyName}  ? this.${propertyName}:  '${
                                element.cssAttributes[prop]
                            }' };\n`;
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
                    var propertyName = createInputProperty(element, prop, properties);
                    outString += `${element.camelCaseToDash(
                        prop
                    )}: \${this.${propertyName}  ? this.${propertyName}:  '${
                        element.typography[prop]
                    }' };\n`;
                }
            }
        }
        outString += `}\n\n`;

        if (element.children) {
            element.children.forEach((child) => {
                outString += createCSSRules(child, '', properties);
            });
        }
    }
    return outString;
};

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
