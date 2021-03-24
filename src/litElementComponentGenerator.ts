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
    var renderString = `
    render(){
        return html\`
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
        if (element.type === 'TEXT') {
            var propertyName = createInputProperty(element, 'text', properties);
            outString += `<p class="${element.name.replace(
                /\s/g,
                ''
            )}">\n   \${this.${propertyName}  ? this.${propertyName}:  '${
                element.characters
            }'
            }\n`;
        } else if (element.type === 'INSTANCE') {
            outString += `<slot>\n`;
        } else {
            outString += `<div class="${element.name.replace(/\s/g, '')}">\n`;
        }
    }
    if (element.children) {
        if (element.type !== 'INSTANCE') {
            element.children.forEach((child) => {
                outString += createHTMLElements(child, '');
            });
        }
    }

    if (element.hasParent) {
        if (element.type === 'TEXT') {
            outString += `</p>\n`;
        } else if (element.type === 'INSTANCE') {
            outString += `</slot>\n`;
        } else {
            outString += `</div>\n`;
        }
    }
    return outString;
};

const createCSSRules = (
    element: LitElementFromFigmaComponent,
    outString: string,
    properties: string[]
): string => {
    var flexUsed = false;
    if (element.type !== 'INSTANCE') {
        if (!element.hasParent) {
            outString += `:host {\n`;
        } else {
            outString += `.${element.name.replace(/\s/g, '')} {\n`;
        }
        if (element.cssAttributes.flexDirection) outString += `display: flex;\n`;
        if (element.hasParent) {
            if (element.parentCssAttributes.flexDirection) {
                // console.log(
                //     element.name +
                //         'Flex: ' +
                //         parseInt(element.cssAttributes.width) /
                //             parseInt(element.parentCssAttributes.width)
                // );
                // element.parentCssAttributes.flexDirection === 'row'
                //     ? console.log(
                //           `flex: ${
                //               parseInt(element.cssAttributes.width) /
                //               parseInt(element.parentCssAttributes.width)
                //           }`
                //       )
                //     : console.log(
                //           `flex: ${
                //               parseInt(element.cssAttributes.height) /
                //               parseInt(element.parentCssAttributes.height)
                //           }`
                //       );
            }
        }
        for (var prop in element.cssAttributes) {
            var propertyName = createInputProperty(element, prop, properties);
            if (Object.prototype.hasOwnProperty.call(element.cssAttributes, prop)) {
                if (element.cssAttributes[prop] && element.cssAttributes[prop] !== '0') {
                    // if (prop == 'backgroundColor') {
                    if (element.type === 'TEXT' && prop == 'backgroundColor') {
                        outString += `color: \${this.${propertyName} ? this.${propertyName} : '${element.cssAttributes[prop]}'};\n`;
                        break;
                    }
                    // else {
                    //     var propertyNameVar = createInputProperty(
                    //         element,
                    //         `${prop}Var`,
                    //         properties
                    //     );
                    //     outString += `background-color: \${this.${propertyNameVar} ? this.${propertyNameVar} : this.${propertyName} ? this.${propertyName} : '${element.cssAttributes[prop]}'};\n`;
                    //     break;
                    // }
                    // }
                    if (
                        !(
                            element.type === 'TEXT' &&
                            (prop == 'height' || prop == 'width')
                        )
                    ) {
                        // if (
                        //     !(
                        //         element.layoutAlign === 'STRETCH' &&
                        //         (prop === 'height' || prop === 'width')
                        //     )
                        // ) {
                        // var propertyName = createInputProperty(element, prop, properties);
                        if (element.hasParent && (prop == 'width' || prop == 'height')) {
                            if (element.parentCssAttributes.flexDirection) {
                                outString += `${element.camelCaseToDash(prop)}: 100%;\n`;
                                if (
                                    element.parentCssAttributes.flexDirection == 'row' &&
                                    !flexUsed
                                ) {
                                    outString += `flex-basis:${
                                        (parseInt(element.cssAttributes.width) /
                                            parseInt(element.parentCssAttributes.width)) *
                                        100
                                    }%;\n`;
                                    flexUsed = true;
                                } else if (
                                    element.parentCssAttributes.flexDirection ==
                                        'column' &&
                                    !flexUsed
                                ) {
                                    outString += `flex-basis:${
                                        (parseInt(element.cssAttributes.height) /
                                            parseInt(
                                                element.parentCssAttributes.height
                                            )) *
                                        100
                                    }%;\n`;

                                    flexUsed = true;
                                }
                            } else {
                                outString += `${element.camelCaseToDash(
                                    prop
                                )}: \${this.${propertyName}  ? this.${propertyName}:  '${Math.round(
                                    (parseInt(element.cssAttributes[prop]) /
                                        parseInt(element.parentCssAttributes[prop])) *
                                        100
                                )}%' };\n`;
                            }
                        } else if (
                            !element.hasParent &&
                            (prop == 'width' || prop == 'height')
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
                        // }
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
                if (prop !== 'setName') {
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

// const createInputProperties = (element: LitElementFromFigmaComponent): string => {
//     let outString = '';
//     for (var attribute in element.cssAttributes) {
//         //Can it be anything else than string??
//         outString += `@property({type: String})\n${attribute} = '';\n\n`;
//     }

//     return outString;
// };

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
