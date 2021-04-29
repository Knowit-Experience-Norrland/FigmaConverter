import Color from './colors';
import Typography from './texts';

/**
 * Interface of for all cssAttributes for a component
 * TODO: add more attributes
 *
 * @interface cssAttributes
 */
interface cssAttributes {
    width: string;
    height: string;
    borderRadius: string | string[];
    // flex: string;
    gap: string;
    flexDirection: string;
    backgroundColor: string;
    backgroundImage: string;
    backgroundSize: string;
    backgroundRepeat: string;
    paddingTop: string;
    paddingLeft: string;
    paddingBottom: string;
    paddingRight: string;
    justifyContent: string;
    alignItems: string;
}

/**
 * Class that creates a LitElement from Figmas API.
 *
 * @export
 * @class LitElementFromFigmaComponent
 */
export class LitElementFromFigmaComponent {
    private componentFromAPI;
    private colorObjects;
    // private colorStyleObject;
    hasColorVariable = false;
    type: string;
    cssAttributes: cssAttributes;
    name: string;
    children: LitElementFromFigmaComponent[] = [];
    color: Color;
    id: string;
    characters: string;
    layoutAlign: string;
    hasParent: boolean;
    hasImage: boolean;
    parentCssAttributes: cssAttributes;
    typography: Typography;
    leftRightOffset: number;
    topBottomOffset: number;

    /**
     * TODO:
     * Typing for images
     */
    images: any;

    /**
     * Creates an instance of LitElementFromFigmaComponent.
     * @param {*} component
     * @param {*} colorObjects
     * @param {*} images
     * @param {cssAttributes} [parentCssAttributes]
     * @memberof LitElementFromFigmaComponent
     */
    constructor(component, colorObjects, images, parentCssAttributes?: cssAttributes) {
        this.images = images;
        this.componentFromAPI = component;
        this.colorObjects = colorObjects;
        this.name = component.name;
        this.characters = component.characters;
        this.layoutAlign = component.layoutAlign;
        this.parentCssAttributes = parentCssAttributes;
        this.typography = new Typography(component);
        parentCssAttributes ? (this.hasParent = true) : (this.hasParent = false);
        this.leftRightOffset = component.paddingLeft + component.paddingRight;
        this.topBottomOffset = component.paddingTop + component.paddingBottom;
        this.setComponentColorFromAPI();

        this.cssAttributes = {
            width: `${this.componentFromAPI.absoluteBoundingBox.width}px`,
            height: `${this.componentFromAPI.absoluteBoundingBox.height}px`,
            borderRadius: this.setBorderRadius(),
            // flex: component.layoutGrow,
            gap: component.itemSpacing
                ? `${component.itemSpacing}px`
                : component.itemSpacing,
            flexDirection:
                component.layoutMode === 'HORIZONTAL'
                    ? 'row'
                    : component.layoutMode === 'VERTICAL'
                    ? 'column'
                    : component.layoutMode,
            backgroundColor: this.setBackgroundColor(),
            backgroundImage: this.setBackgroundImage(),
            backgroundSize: this.hasImage ? 'cover' : '',
            backgroundRepeat: this.hasImage ? 'no-repeat' : '',
            paddingTop: component.paddingTop ? `${component.paddingTop}px` : '',
            paddingLeft: component.paddingLeft ? `${component.paddingLeft}px` : '',
            paddingBottom: component.paddingBottom ? `${component.paddingBottom}px` : '',
            paddingRight: component.paddingRight ? `${component.paddingRight}px` : '',
            justifyContent:
                component.primaryAxisAlignItems === 'SPACE-BETWEEN'
                    ? component.primaryAxisAlignItems.toLowerCase().replace('_', '-')
                    : this.setAlignment(component.primaryAxisAlignItems),
            alignItems: this.setAlignment(component.counterAxisAlignItems),
        };

        this.type = component.type;
        this.id = component.id;
        this.name = component.name;
        if (component.children) {
            component.children.forEach((child) => {
                this.children.push(
                    new LitElementFromFigmaComponent(
                        child,
                        colorObjects,
                        this.images,
                        this.cssAttributes
                    )
                );
            });
        }
    }

    /**
     *
     * Translates Figmas axis response to flex values.
     * @private
     * @param {string} axisInput
     * @return {*}  {(string | undefined)}
     * @memberof LitElementFromFigmaComponent
     */
    private setAlignment(axisInput: string): string | undefined {
        if (axisInput) {
            if (axisInput === 'MIN') return 'flex-start';
            else if (axisInput === 'MAX') return 'flex-end';
            else {
                return 'center';
            }
        }
        return axisInput;
    }

    /**
     * Returns the image URL from Figma.
     * These urls are fetched before hand.
     * @private
     * @return {*}  {string}
     * @memberof LitElementFromFigmaComponent
     */
    private setBackgroundImage(): string {
        if (this.componentFromAPI.fills.length > 0) {
            if (this.componentFromAPI.fills[0].type === 'IMAGE') {
                const imageURL = this.images[this.componentFromAPI.fills[0].imageRef];
                this.hasImage = true;
                return `url(${imageURL})`;
            }
        }
        return '';
    }

    /**
     *
     * If the color of the element belongs to a style, that variable is set as background.
     * Otherwise the color from the element is set.
     *
     * (the elements colors a value is always 1 for some reason.
     *  That's why the a value is set to the elements opacity.)
     * @private
     * @memberof LitElementFromFigmaComponent
     */
    private setComponentColorFromAPI() {
        if (this.componentFromAPI.styles) {
            this.color = this.colorObjects.filter(
                (color: Color) => color.styleId === this.componentFromAPI.styles.fills
            )[0];
        } else {
            if (this.componentFromAPI.fills.length > 0) {
                if (this.componentFromAPI.fills[0].visible !== false) {
                    if (this.componentFromAPI.fills[0].type !== 'IMAGE') {
                        if (this.componentFromAPI.fills[0].type !== 'GRADIENT_LINEAR') {
                            // The application does not yet support gradients. The above if-statement can be removed when gradient support is added

                            if (this.componentFromAPI.fills[0].opacity) {
                                this.componentFromAPI.fills[0].color.a = this.componentFromAPI.fills[0].opacity;
                                this.color = new Color(
                                    this.componentFromAPI.fills[0].color
                                );
                            } else {
                                this.color = new Color(
                                    this.componentFromAPI.fills[0].color
                                );
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     *
     * Determines if a variable or color code should be set as background.
     * @private
     * @return {*}  {string}
     * @memberof LitElementFromFigmaComponent
     */
    private setBackgroundColor(): string {
        if (this.componentFromAPI.fills.type !== 'IMAGE') {
            if (this.color) {
                return this.color.styleId
                    ? this.color.cssVariableName
                    : this.color.rgbaOrHex();
            }
        }
    }

    /**
     *
     * returns a single value string if all corner radii are the same.
     * returns a string with values for all four corners if not.
     * @private
     * @return {*}  {string}
     * @memberof LitElementFromFigmaComponent
     */
    private setBorderRadius(): string {
        if (this.componentFromAPI.type === 'ELLIPSE') return '50%';
        var tempString: string | string[];
        // checks is all values in the cornerRadii array is the same and determines
        // if the border-radius should be one or four values.
        if (this.componentFromAPI.rectangleCornerRadii) {
            tempString = this.componentFromAPI.rectangleCornerRadii.every(
                (val: string, i, arr: string[]) => val === arr[0]
            )
                ? this.componentFromAPI.cornerRadius + 'px'
                : this.componentFromAPI.rectangleCornerRadii;
        } else if (this.componentFromAPI.cornerRadius) {
            tempString = this.componentFromAPI.cornerRadius + 'px';
        } else {
            tempString = '0';
        }

        if (Array.isArray(tempString)) {
            var tmp = '';
            tempString.forEach((part) => {
                tmp += ' ' + part + 'px';
            });
            return tmp;
        } else {
            return tempString;
        }
    }

    /**
     *
     * Convert string to camel case.
     * @param {string} string
     * @param {string} splitString
     * @memberof LitElementFromFigmaComponent
     */
    stringToCamelCase = (string: string, splitString: string): string => {
        var temp = string.split(splitString);
        temp[1] = temp[1].charAt(0).toUpperCase() + temp[1].slice(1);
        return temp.join('');
    };

    /**
     *
     * Converts camel cased string to dashed string.
     * helloWorld -> hello-world
     * @param {string} string
     * @memberof LitElementFromFigmaComponent
     */
    camelCaseToDash = (string: string): string => {
        var dashedString = '';
        var temp = [...string];
        temp.forEach((char) => {
            if (char.match(/[A-Z]/)) {
                dashedString += '-' + char.toLowerCase();
            } else {
                dashedString += char;
            }
        });
        return dashedString;
    };
}
