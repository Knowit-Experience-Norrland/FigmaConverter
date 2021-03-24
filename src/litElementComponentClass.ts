import { PurpleChild, StrokeAlign } from './apiTypes';
import { rgbToHex, torgbString } from './colors';
import Color from './newColors';
import Typography from './texts';
interface cssAttributes {
    width: string;
    height: string;
    borderRadius: string | string[];
    // flex: string;
    gap: string;
    flexDirection: string;
    backgroundColor: string;
    paddingTop: string;
    paddingLeft: string;
    paddingBottom: string;
    paddingRight: string;
    justifyContent: string;
    alignItems: string;
}
export class LitElementFromFigmaComponent {
    private componentFromAPI;
    private colorObjects;
    private colorStyleObject;
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
    parentCssAttributes: cssAttributes;
    typography: Typography;
    leftRightOffset: number;
    topBottomOffset: number;

    // fix for placing smaller than container
    //  "primaryAxisSizingMode": "FIXED",
    //                         "counterAxisAlignItems": "CENTER",
    //                         "primaryAxisAlignItems": "CENTER",
    // primaryAxisAlignItems == justify-content?
    // counterAxisAlignItems == align-items?

    constructor(component, colorObjects, parentCssAttributes?: cssAttributes) {
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
            width: this.setWidth(),
            height: this.setHeight(),
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
                        this.cssAttributes
                    )
                );
            });
        }
    }

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

    private setWidth(): string {
        var toRemove = 0;
        if (this.componentFromAPI.paddingLeft)
            toRemove += this.componentFromAPI.paddingLeft;
        if (this.componentFromAPI.paddingRight)
            toRemove += this.componentFromAPI.paddingRight;
        return `${this.componentFromAPI.absoluteBoundingBox.width - toRemove}px`;
    }

    private setHeight(): string {
        var toRemove = 0;
        if (this.componentFromAPI.paddingTop)
            toRemove += this.componentFromAPI.paddingTop;
        if (this.componentFromAPI.paddingBottom)
            toRemove += this.componentFromAPI.paddingBottom;
        return `${this.componentFromAPI.absoluteBoundingBox.height - toRemove}px`;
    }
    private setBackgroundColor(): string {
        if (this.color) {
            if (this.color.styleId) {
                return this.color.cssVariableName;
            } else {
                return this.color.rgbaOrHex();
            }
        }
    }

    private setComponentColorFromAPI() {
        // console.log(this.componentFromAPI.fills);
        if (this.componentFromAPI.styles) {
            this.color = this.colorObjects.filter(
                (color: Color) => color.styleId === this.componentFromAPI.styles.fills
            )[0];
        } else {
            if (this.componentFromAPI.fills.length > 0)
                if (!(this.componentFromAPI.fills[0].visible === false))
                    this.color = new Color(this.componentFromAPI.fills[0].color);
        }

        // if (this.componentFromAPI.fills.length > 0) {
        //     console.log(this.componentFromAPI);
        //     if (this.componentFromAPI.fills[0].type === 'SOLID') {
        //         if (this.componentFromAPI.fills[0].visible === false) return 'none';
        //         if (this.componentFromAPI.styles) {
        //             this.colorStyleObject = this.colorObjects.filter(
        //                 (color) => color.styleID === this.componentFromAPI.styles.fills
        //             )[0];
        //             this.color =
        //                 this.colorStyleObject.a < 1
        //                     ? this.colorStyleObject.rgba
        //                     : this.colorStyleObject.hex;
        //             return this.colorStyleObject.cssVariableName;
        //         } else if (this.componentFromAPI.fills[0].opacity) {
        //             const { r, g, b } = this.componentFromAPI.fills[0].color;
        //             const a = this.componentFromAPI.fills[0].opacity;
        //             this.color = torgbString(r, g, b, a);
        //             return this.color;
        //         } else {
        //             const { r, g, b } = this.componentFromAPI.fills[0].color;
        //             this.color = rgbToHex(r, g, b);
        //             return this.color;
        //         }
        //     }
        // }
    }

    private setBorderRadius(): string {
        var tempString: string | string[];
        // checks is all values in the cornerRadii array is the same and determines if the border-radius should be one or four values.
        if (this.componentFromAPI.cornerRadius) {
            if (this.componentFromAPI.cornerRadii) {
                tempString = this.componentFromAPI.rectangleCornerRadii.every(
                    (val: string, i, arr: string[]) => val === arr[0]
                )
                    ? this.componentFromAPI.cornerRadius + 'px'
                    : this.componentFromAPI.rectangleCornerRadii;
            } else {
                tempString = this.componentFromAPI.cornerRadius + 'px';
            }
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

    stringToCamelCase = (string: string, splitString: string): string => {
        var temp = string.split(splitString);
        temp[1] = temp[1].charAt(0).toUpperCase() + temp[1].slice(1);
        return temp.join('');
    };

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
