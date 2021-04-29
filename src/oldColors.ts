import { DocumentChild, PurpleChild } from './apiTypes';

const rgbToInt = (value: number) => Math.ceil(value * 255);

const componentToHex = (c: number) => {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
};
export const rgbToHex = (r: number, g: number, b: number) => {
    r = rgbToInt(r);
    g = rgbToInt(g);
    b = rgbToInt(b);

    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const torgbString = (r: number, g: number, b: number, a: number) => {
    r = rgbToInt(r);
    g = rgbToInt(g);
    b = rgbToInt(b);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};

export class Color {
    styleID: any;
    rgba: string;
    hex: string;
    r: number;
    g: number;
    b: number;
    a: number;
    scssColor: string;
    cssVariable: string;
    cssVariableName: string;
    name: string;

    constructor(styleElement: PurpleChild) {
        this.styleID = styleElement.styles.fill;
        this.r = styleElement.fills[0].color.r;
        this.g = styleElement.fills[0].color.g;
        this.b = styleElement.fills[0].color.b;
        this.a = this.round(
            styleElement.fills[0].opacity ? styleElement.fills[0].opacity : 1
        );
        this.rgbToHex(this.r, this.g, this.b);
        this.rgbToString(this.r, this.g, this.b, this.a);
    }

    private round(num: number) {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    }

    private rgbToInt = (value: number) => Math.ceil(value * 255);

    private componentToHex = (c: number) => {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    };

    rgbToHex = (r: number, g: number, b: number) => {
        r = this.rgbToInt(r);
        g = this.rgbToInt(g);
        b = this.rgbToInt(b);

        this.hex =
            '#' +
            this.componentToHex(r) +
            this.componentToHex(g) +
            this.componentToHex(b);
    };

    rgbToString = (r: number, g: number, b: number, a: number) => {
        r = this.rgbToInt(r);
        g = this.rgbToInt(g);
        b = this.rgbToInt(b);

        this.rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    };

    SCSSString = (name: string) => {
        this.scssColor = `$color-${name}: ${this.a < 1 ? this.rgba : this.hex};`;
        this.name = name;
        return this.scssColor;
    };

    /**
     * TODO:
     * fix variableNameSetter
     */
    CSSVariable = (name: string) => {
        this.cssVariable = `--color-${name}: ${this.a < 1 ? this.rgba : this.hex};`;
        this.name = name;
        this.setCSSVariableName();
        return this.cssVariable;
    };

    setCSSVariableName = (name?: string) => {
        this.cssVariableName = `var(--color-${name ? name : this.name})`;
    };
}

// Remove all elements with styles different than fill or fills
// export const spliceAllNoneFills = (array) => {
//     let i = 0;
//     while (i < array.length) {
//         Object.keys(array[i].styles)[0] !== 'fill'
//             ? Object.keys(array[i].styles)[0] !== 'fills'
//                 ? array.splice(i, 1)
//                 : i++
//             : i++;
//     }
//     return array;
// };

// // Creates a object with style keys as keys and rgba string as value.
// export const createStyleColorStringArray = (canvas: DocumentChild) => {
//     var colorStyles: any = new Object();
//     var color: string;

//     var elementsWithFillStyleArray = canvas.children.filter((c: PurpleChild) => c.styles);

//     elementsWithFillStyleArray = spliceAllNoneFills(elementsWithFillStyleArray);

//     // const elementsWithStyleArray = canvas.children.filter((c:any) => c.styles)
//     elementsWithFillStyleArray.forEach((element) => {
//         //  ? element.styles.fill : element.styles.fills;
//         const styleKey = element.styles.fill;
//         if (!Object.keys(colorStyles).includes(styleKey)) {
//             const { r, g, b } = element.fills[0].color;
//             if (element.fills[0].opacity) {
//                 var a = element.fills[0].opacity;
//                 color = torgbString(r, g, b, a);
//             } else {
//                 color = rgbToHex(r, g, b);
//             }
//             colorStyles[styleKey] = color;
//         }
//     });
//     return colorStyles;
// };
