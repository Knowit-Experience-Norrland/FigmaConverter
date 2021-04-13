import { PurpleChild } from './apiTypes';

/**
 * This class stores information for the typography for an element.
 *
 * @export
 * @class Typography
 */
export default class Typography {
    styleId: string;
    name: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    letterSpacing: string;
    fontStyle: string;
    textAlign: string;
    // lineHeight: string;

    /**
     * Creates an instance of Typography.
     * Sets each value from the element itself.
     * @param {PurpleChild} styleElement
     * @memberof Typography
     */
    constructor(styleElement: PurpleChild) {
        if (styleElement.style) {
            const style = styleElement.style;
            if (styleElement.styles)
                if (styleElement.styles.text) {
                    this.styleId = styleElement.styles.text;
                }
            this.fontSize = this.pxToRem(style.fontSize);
            this.fontFamily = style.fontFamily;
            this.fontWeight = `${style.fontWeight}`;
            if (style.letterSpacing)
                this.letterSpacing = this.pxToRem(style.letterSpacing);
            this.textAlign = style.textAlignHorizontal.toLocaleLowerCase();
            // if (style.lineHeightPx) {
            //     console.log(style.lineHeightPx);
            //     this.lineHeight = this.pxToRem(style.lineHeightPx);
            // }
            if (style.italic) this.fontStyle = 'italic';
        }
    }

    setName = (name: string) => {
        this.name = name;
    };

    pxToRem(pixelSize: number): string {
        return `${pixelSize / 16}rem`;
    }

    /**
     * Creates a string containing a SCSS mixin for the element's typography.
     * @return {*}  {string}
     * @memberof Typography
     */
    getTextMixin(): string {
        return `@mixin font-${this.name}{
            ${this.fontFamily ? `font-family: ${this.fontFamily}` : ''};
            ${this.fontSize ? `font-size: ${this.fontSize}` : ''};
            ${this.fontWeight ? `font-weight: ${this.fontWeight}` : ''};
            ${this.letterSpacing ? `letter-spacing: ${this.letterSpacing}` : ''};
        }\n`;
    }
}
