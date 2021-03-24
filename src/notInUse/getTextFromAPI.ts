import { rgbToHex, torgbString } from '../colors';

const spliceAllNoneText = (array) => {
    let i = 0;
    while (i < array.length) {
        Object.keys(array[i].styles)[0] !== 'text' ? array.splice(i, 1) : i++;
    }
    return array;
};

export const createStyleTextStringArray = (canvas: any) => {
    var colorStyles: any = new Object();
    var color: string;

    var elementsWithTextStyleArray = canvas.children.filter((c) => c.styles);

    elementsWithTextStyleArray = spliceAllNoneText(elementsWithTextStyleArray);

    // const elementsWithStyleArray = canvas.children.filter((c:any) => c.styles)
    elementsWithTextStyleArray.forEach((element) => {
        const styleKey = element.styles.fill ? element.styles.fill : element.styles.fills;
        if (!Object.keys(colorStyles).includes(styleKey)) {
            const { r, g, b } = element.fills[0].color;
            if (element.fills[0].opacity) {
                var a = element.fills[0].opacity;
                color = torgbString(r, g, b, a);
            } else {
                color = rgbToHex(r, g, b);
            }
            colorStyles[styleKey] = color;
        }
    });
    return colorStyles;
};
