import { PurpleChild } from './apiTypes';

export default class Typography {
    styleId: string;
    name: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    letterSpacing: string;
    fontStyle: string;

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
            this.letterSpacing = `${style.letterSpacing}`;
            if (style.italic) this.fontStyle = 'italic';
        }
    }

    setName = (name: string) => {
        this.name = name;
    };

    pxToRem(pixelSize: number): string {
        return `${pixelSize / 16}rem`;
    }

    toCSS(): string {
        return;
    }

    getTextMixin(): string {
        return `@mixin font-${this.name}{
            font-family: ${this.fontFamily};
            font-size: ${this.fontSize};
            font-weight: ${this.fontWeight};
        }\n`;
    }
}
