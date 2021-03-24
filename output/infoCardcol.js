var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let infoCardcol = class infoCardcol extends LitElement {
    constructor() {
        super(...arguments);
        this.width = '';
        this.height = '';
        this.borderRadius = '';
        this.flex = '';
        this.gap = '';
        this.flexDirection = '';
        this.backgroundColor = '';
        this.paddingTop = '';
        this.paddingLeft = '';
        this.paddingBottom = '';
        this.paddingRight = '';
        this.justifyContent = '';
        this.alignItems = '';
        this.textBoxWidth = '';
        this.textBoxHeight = '';
        this.textBoxBorderRadius = '';
        this.textBoxFlex = '';
        this.textBoxGap = '';
        this.textBoxFlexDirection = '';
        this.textBoxBackgroundColor = '';
        this.textBoxPaddingTop = '';
        this.textBoxPaddingLeft = '';
        this.textBoxPaddingBottom = '';
        this.textBoxPaddingRight = '';
        this.textBoxJustifyContent = '';
        this.textBoxAlignItems = '';
        this.cardtitleWidth = '';
        this.cardtitleHeight = '';
        this.cardtitleBorderRadius = '';
        this.cardtitleFlex = '';
        this.cardtitleGap = '';
        this.cardtitleFlexDirection = '';
        this.cardtitleBackgroundColor = '';
        this.cardtitleFontSize = '';
        this.cardtitleFontFamily = '';
        this.cardtitleFontWeight = '';
        this.cardtitleLetterSpacing = '';
        this.bodytextWidth = '';
        this.bodytextHeight = '';
        this.bodytextBorderRadius = '';
        this.bodytextFlex = '';
        this.bodytextGap = '';
        this.bodytextFlexDirection = '';
        this.bodytextBackgroundColor = '';
        this.bodytextFontSize = '';
        this.bodytextFontFamily = '';
        this.bodytextFontWeight = '';
        this.bodytextLetterSpacing = '';
        this.imgWidth = '';
        this.imgHeight = '';
        this.imgBorderRadius = '';
        this.imgFlex = '';
        this.imgGap = '';
        this.imgFlexDirection = '';
        this.imgBackgroundColor = '';
        this.imgPaddingTop = '';
        this.imgPaddingLeft = '';
        this.imgPaddingBottom = '';
        this.imgPaddingRight = '';
        this.imgJustifyContent = '';
        this.imgAlignItems = '';
        this.imgTextWidth = '';
        this.imgTextHeight = '';
        this.imgTextBorderRadius = '';
        this.imgTextFlex = '';
        this.imgTextGap = '';
        this.imgTextFlexDirection = '';
        this.imgTextBackgroundColor = '';
        this.imgTextFontSize = '';
        this.imgTextFontFamily = '';
        this.imgTextFontWeight = '';
        this.imgTextLetterSpacing = '';
        this.imgTextFontStyle = '';
        this.cardtitleText = '';
        this.bodytextText = '';
        this.imgTextText = '';
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
width: ${this.width ? `calc(${this.width} - 90px)` : '975px'};
height: ${this.height ? `calc(${this.height} - 82px)` : '337px'};
border-radius: ${this.borderRadius ? this.borderRadius : '20px'};
gap: ${this.gap ? this.gap : '60px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'column'};
background-color: ${this.backgroundColor ? this.backgroundColor : 'var(--color-background-default)'};
padding-top: ${this.paddingTop ? this.paddingTop : '41px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '45px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '41px'};
padding-right: ${this.paddingRight ? this.paddingRight : '45px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'center'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.textBox {
display: flex;
width: 100%;
height: 100%;
flex: ${this.textBoxFlex ? this.textBoxFlex : '1'};
gap: ${this.textBoxGap ? this.textBoxGap : '25px'};
flex-direction: ${this.textBoxFlexDirection ? this.textBoxFlexDirection : 'column'};
}

.cardtitle {
color: ${this.cardtitleBackgroundColor ? this.cardtitleBackgroundColor : '#000000'};
font-size: ${this.cardtitleFontSize ? this.cardtitleFontSize : '1.997816562652588rem'};
font-family: ${this.cardtitleFontFamily ? this.cardtitleFontFamily : 'Montserrat'};
font-weight: ${this.cardtitleFontWeight ? this.cardtitleFontWeight : '500'};
letter-spacing: ${this.cardtitleLetterSpacing ? this.cardtitleLetterSpacing : '0'};
}

.bodytext {
color: ${this.bodytextBackgroundColor ? this.bodytextBackgroundColor : '#000000'};
font-size: ${this.bodytextFontSize ? this.bodytextFontSize : '1.3318777084350586rem'};
font-family: ${this.bodytextFontFamily ? this.bodytextFontFamily : 'Montserrat'};
font-weight: ${this.bodytextFontWeight ? this.bodytextFontWeight : '400'};
letter-spacing: ${this.bodytextLetterSpacing ? this.bodytextLetterSpacing : '0'};
}

.img {
display: flex;
width: 100%;
height: 100%;
border-radius: ${this.imgBorderRadius ? this.imgBorderRadius : '20px'};
flex: ${this.imgFlex ? this.imgFlex : '1'};
gap: ${this.imgGap ? this.imgGap : '10px'};
flex-direction: ${this.imgFlexDirection ? this.imgFlexDirection : 'row'};
background-color: ${this.imgBackgroundColor ? this.imgBackgroundColor : 'var(--color-primary)'};
justify-content: ${this.imgJustifyContent ? this.imgJustifyContent : 'center'};
align-items: ${this.imgAlignItems ? this.imgAlignItems : 'center'};
}

.imgText {
color: ${this.imgTextBackgroundColor ? this.imgTextBackgroundColor : '#ffffff'};
font-size: ${this.imgTextFontSize ? this.imgTextFontSize : '1.7290455102920532rem'};
font-family: ${this.imgTextFontFamily ? this.imgTextFontFamily : 'Times'};
font-weight: ${this.imgTextFontWeight ? this.imgTextFontWeight : '700'};
letter-spacing: ${this.imgTextLetterSpacing ? this.imgTextLetterSpacing : '0'};
font-style: ${this.imgTextFontStyle ? this.imgTextFontStyle : 'italic'};
}


            </style> 
            <div class="textBox">
<p class="cardtitle">
   ${this.cardtitleText ? this.cardtitleText : 'What your project needs'}
</p>
<p class="bodytext">
   ${this.bodytextText ? this.bodytextText : 'Figma Converter is the perfect tool for all projects working with separate designers and developers.'}
</p>
</div>
<div class="img">
<p class="imgText">
   ${this.imgTextText ? this.imgTextText : 'This is an image'}
</p>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], infoCardcol.prototype, "width", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "height", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "flex", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxWidth", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxHeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxFlex", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxGap", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "textBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleWidth", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleHeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleFlex", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleGap", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleFontSize", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleFontFamily", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleFontWeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleLetterSpacing", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextWidth", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextHeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextFlex", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextGap", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextFontSize", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextFontFamily", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextFontWeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextLetterSpacing", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgWidth", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgHeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgFlex", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgGap", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgPaddingTop", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgPaddingLeft", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgPaddingBottom", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgPaddingRight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgJustifyContent", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgAlignItems", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextWidth", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextHeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextFlex", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextGap", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextFontSize", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextFontFamily", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextFontWeight", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextLetterSpacing", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextFontStyle", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "cardtitleText", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "bodytextText", void 0);
__decorate([
    property({ type: String })
], infoCardcol.prototype, "imgTextText", void 0);
infoCardcol = __decorate([
    customElement('info-cardcol')
], infoCardcol);
export { infoCardcol };
// NOT GENERATED CODE
