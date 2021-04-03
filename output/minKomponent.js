var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let minKomponent = class minKomponent extends LitElement {
    constructor() {
        super(...arguments);
        this.width = '';
        this.height = '';
        this.borderRadius = '';
        this.gap = '';
        this.flexDirection = '';
        this.backgroundColor = '';
        this.backgroundImage = '';
        this.backgroundSize = '';
        this.backgroundRepeat = '';
        this.paddingTop = '';
        this.paddingLeft = '';
        this.paddingBottom = '';
        this.paddingRight = '';
        this.justifyContent = '';
        this.alignItems = '';
        this.textFlexBasis = '';
        this.textWidth = '';
        this.textHeight = '';
        this.textBorderRadius = '';
        this.textGap = '';
        this.textFlexDirection = '';
        this.textBackgroundColor = '';
        this.textFontSize = '';
        this.textFontFamily = '';
        this.textFontWeight = '';
        this.textLetterSpacing = '';
        this.textTextAlign = '';
        this.textLineHeight = '';
        this.containerFlexBasis = '';
        this.containerWidth = '';
        this.containerHeight = '';
        this.containerBorderRadius = '';
        this.containerGap = '';
        this.containerFlexDirection = '';
        this.containerBackgroundColor = '';
        this.containerBackgroundImage = '';
        this.containerBackgroundSize = '';
        this.containerBackgroundRepeat = '';
        this.containerPaddingTop = '';
        this.containerPaddingLeft = '';
        this.containerPaddingBottom = '';
        this.containerPaddingRight = '';
        this.containerJustifyContent = '';
        this.containerAlignItems = '';
        this.leftRectangleFlexBasis = '';
        this.leftRectangleWidth = '';
        this.leftRectangleHeight = '';
        this.leftRectangleBorderRadius = '';
        this.leftRectangleGap = '';
        this.leftRectangleFlexDirection = '';
        this.leftRectangleBackgroundColor = '';
        this.leftRectangleBackgroundImage = '';
        this.leftRectangleBackgroundSize = '';
        this.leftRectangleBackgroundRepeat = '';
        this.leftRectanglePaddingTop = '';
        this.leftRectanglePaddingLeft = '';
        this.leftRectanglePaddingBottom = '';
        this.leftRectanglePaddingRight = '';
        this.leftRectangleJustifyContent = '';
        this.leftRectangleAlignItems = '';
        this.rightRectangleFlexBasis = '';
        this.rightRectangleWidth = '';
        this.rightRectangleHeight = '';
        this.rightRectangleBorderRadius = '';
        this.rightRectangleGap = '';
        this.rightRectangleFlexDirection = '';
        this.rightRectangleBackgroundColor = '';
        this.rightRectangleBackgroundImage = '';
        this.rightRectangleBackgroundSize = '';
        this.rightRectangleBackgroundRepeat = '';
        this.rightRectanglePaddingTop = '';
        this.rightRectanglePaddingLeft = '';
        this.rightRectanglePaddingBottom = '';
        this.rightRectanglePaddingRight = '';
        this.rightRectangleJustifyContent = '';
        this.rightRectangleAlignItems = '';
        this.textText = '';
    }
    render() {
        return html `
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width ? `calc(${this.width} - 40px)` : '438px'};
height: ${this.height ? `calc(${this.height} - 40px)` : '219px'};
border-radius: ${this.borderRadius ? this.borderRadius : '37px'};
gap: ${this.gap ? this.gap : '36.5px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#49ad9b'};
padding-top: ${this.paddingTop ? this.paddingTop : '20px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '20px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '20px'};
padding-right: ${this.paddingRight ? this.paddingRight : '20px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'center'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.text {
flex-basis:  ${this.textFlexBasis ? this.textFlexBasis : '25.570776255707763%'};
color: ${this.textBackgroundColor ? this.textBackgroundColor : '#0b1021'};
font-size: ${this.textFontSize ? this.textFontSize : '1rem'};
font-family: ${this.textFontFamily ? this.textFontFamily : 'Montserrat'};
font-weight: ${this.textFontWeight ? this.textFontWeight : '400'};
letter-spacing: ${this.textLetterSpacing ? this.textLetterSpacing : '0'};
text-align: ${this.textTextAlign ? this.textTextAlign : 'center'};
line-height: ${this.textLineHeight ? this.textLineHeight : '1.171875rem'};
}

.container {
display: flex;
flex-basis:  ${this.containerFlexBasis ? this.containerFlexBasis : '54.5662100456621%'};
width: 100%;
height: 100%;
border-radius: ${this.containerBorderRadius ? this.containerBorderRadius : '15px'};
gap: ${this.containerGap ? this.containerGap : '25px'};
flex-direction: ${this.containerFlexDirection ? this.containerFlexDirection : 'row'};
background-color: ${this.containerBackgroundColor ? this.containerBackgroundColor : 'var(--color-accent)'};
padding-top: ${this.containerPaddingTop ? this.containerPaddingTop : '25px'};
padding-left: ${this.containerPaddingLeft ? this.containerPaddingLeft : '25px'};
padding-bottom: ${this.containerPaddingBottom ? this.containerPaddingBottom : '25px'};
padding-right: ${this.containerPaddingRight ? this.containerPaddingRight : '25px'};
align-items: ${this.containerAlignItems ? this.containerAlignItems : 'center'};
}

.leftRectangle {
flex-basis:  ${this.leftRectangleFlexBasis ? this.leftRectangleFlexBasis : '44.76987447698745%'};
width: 100%;
height: 100%;
background-color: ${this.leftRectangleBackgroundColor ? this.leftRectangleBackgroundColor : '#bcbcbc'};
}

.rightRectangle {
flex-basis:  ${this.rightRectangleFlexBasis ? this.rightRectangleFlexBasis : '44.76987447698745%'};
width: 100%;
height: 100%;
background-color: ${this.rightRectangleBackgroundColor ? this.rightRectangleBackgroundColor : '#bcbcbc'};
}


            </style> 
            <p class="text">
   ${this.textText ? this.textText : 'Lorum Ipsum'}
</p>
<div class="container">
<div class="leftRectangle">
</div>
<div class="rightRectangle">
</div>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], minKomponent.prototype, "width", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "height", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textFlexBasis", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textWidth", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textHeight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textBorderRadius", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textGap", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textFlexDirection", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textBackgroundColor", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textFontSize", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textFontFamily", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textFontWeight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textLetterSpacing", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textTextAlign", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textLineHeight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerFlexBasis", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerWidth", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerHeight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerBorderRadius", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerGap", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerFlexDirection", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerBackgroundColor", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerBackgroundImage", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerBackgroundSize", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerPaddingTop", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerPaddingLeft", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerPaddingBottom", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerPaddingRight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerJustifyContent", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "containerAlignItems", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleFlexBasis", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleWidth", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleHeight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleBorderRadius", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleGap", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleFlexDirection", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleBackgroundImage", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleBackgroundSize", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectanglePaddingTop", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectanglePaddingLeft", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectanglePaddingBottom", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectanglePaddingRight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleJustifyContent", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "leftRectangleAlignItems", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleFlexBasis", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleWidth", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleHeight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleBorderRadius", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleGap", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleFlexDirection", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleBackgroundImage", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleBackgroundSize", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectanglePaddingTop", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectanglePaddingLeft", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectanglePaddingBottom", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectanglePaddingRight", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleJustifyContent", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "rightRectangleAlignItems", void 0);
__decorate([
    property({ type: String })
], minKomponent.prototype, "textText", void 0);
minKomponent = __decorate([
    customElement('min-komponent')
], minKomponent);
export { minKomponent };
// NOT GENERATED CODE
