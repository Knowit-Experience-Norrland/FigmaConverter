var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let infoCard = class infoCard extends LitElement {
    constructor() {
        super(...arguments);
        this.width = '';
        this.height = '';
        this.borderRadius = '';
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
height: ${this.height ? `calc(${this.height} - 82px)` : '352px'};
border-radius: ${this.borderRadius ? this.borderRadius : '20px'};
gap: ${this.gap ? this.gap : '56px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
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
flex-basis:32.82051282051282%;
height: 100%;
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
flex-basis:61.43589743589744%;
height: 100%;
border-radius: ${this.imgBorderRadius ? this.imgBorderRadius : '20px'};
gap: ${this.imgGap ? this.imgGap : '10px'};
flex-direction: ${this.imgFlexDirection ? this.imgFlexDirection : 'column'};
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
], infoCard.prototype, "width", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "height", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxWidth", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxHeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxGap", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "textBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleWidth", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleHeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleGap", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleFontSize", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleFontFamily", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleFontWeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleLetterSpacing", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextWidth", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextHeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextGap", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextFontSize", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextFontFamily", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextFontWeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextLetterSpacing", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgWidth", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgHeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgGap", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgPaddingTop", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgPaddingLeft", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgPaddingBottom", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgPaddingRight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgJustifyContent", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgAlignItems", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextWidth", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextHeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextBorderRadius", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextGap", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextFlexDirection", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextBackgroundColor", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextFontSize", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextFontFamily", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextFontWeight", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextLetterSpacing", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextFontStyle", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "cardtitleText", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "bodytextText", void 0);
__decorate([
    property({ type: String })
], infoCard.prototype, "imgTextText", void 0);
infoCard = __decorate([
    customElement('info-card')
], infoCard);
export { infoCard };
// NOT GENERATED CODE
