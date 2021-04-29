interface rgba {
    r: number;
    g: number;
    b: number;
    a?: number;
}
export default class Color {
    styleId: string;
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

    constructor(color: rgba, styleId?: string) {
        this.r = this.rgbToInt(color.r);
        this.g = this.rgbToInt(color.g);
        this.b = this.rgbToInt(color.b);
        this.a = color.a;
        this.hex = this.rgbToHex(this.r, this.g, this.b);
        this.rgba = this.torgbString(this.r, this.g, this.b, this.a);
        this.styleId = styleId;
    }
    setName = (name: string) => {
        this.name = name;

        this.scssColor = `$color-${name}: ${this.a < 1 ? this.rgba : this.hex};`;

        this.cssVariable = `--color-${name}: ${this.a < 1 ? this.rgba : this.hex};`;

        this.cssVariableName = `var(--color-${name})`;
    };

    // SCSSString = () => {
    //     this.scssColor = `$color-${this.name}: ${this.a < 1 ? this.rgba : this.hex};`;
    // };

    // CSSVariable = () => {
    //     this.cssVariable = `--color-${name}: ${this.a < 1 ? this.rgba : this.hex};`;
    // };

    rgbToHex = (r: number, g: number, b: number) => {
        return (
            '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b)
        );
    };

    torgbString = (r: number, g: number, b: number, a: number) => {
        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    };

    rgbaOrHex = () => {
        return this.a === 1 ? this.hex : this.rgba;
    };

    componentToHex = (c: number) => {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    };

    rgbToInt = (value: number) => Math.ceil(value * 255);
}
