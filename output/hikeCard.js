var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let hikeCard = class hikeCard extends LitElement {
    constructor() {
        super(...arguments);
        this.externalStyleSheet = '';
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
        this.textBoxFlexBasis = '';
        this.textBoxWidth = '';
        this.textBoxHeight = '';
        this.textBoxBorderRadius = '';
        this.textBoxGap = '';
        this.textBoxFlexDirection = '';
        this.textBoxBackgroundColor = '';
        this.textBoxBackgroundImage = '';
        this.textBoxBackgroundSize = '';
        this.textBoxBackgroundRepeat = '';
        this.textBoxPaddingTop = '';
        this.textBoxPaddingLeft = '';
        this.textBoxPaddingBottom = '';
        this.textBoxPaddingRight = '';
        this.textBoxJustifyContent = '';
        this.textBoxAlignItems = '';
        this.titleFlexBasis = '';
        this.titleWidth = '';
        this.titleHeight = '';
        this.titleBorderRadius = '';
        this.titleGap = '';
        this.titleFlexDirection = '';
        this.titleBackgroundColor = '';
        this.titleFontSize = '';
        this.titleFontFamily = '';
        this.titleFontWeight = '';
        this.titleLetterSpacing = '';
        this.titleTextAlign = '';
        this.titleLineHeight = '';
        this.descriptionFlexBasis = '';
        this.descriptionWidth = '';
        this.descriptionHeight = '';
        this.descriptionBorderRadius = '';
        this.descriptionGap = '';
        this.descriptionFlexDirection = '';
        this.descriptionBackgroundColor = '';
        this.descriptionFontSize = '';
        this.descriptionFontFamily = '';
        this.descriptionFontWeight = '';
        this.descriptionLetterSpacing = '';
        this.descriptionTextAlign = '';
        this.descriptionLineHeight = '';
        this.imgBoxFlexBasis = '';
        this.imgBoxWidth = '';
        this.imgBoxHeight = '';
        this.imgBoxBorderRadius = '';
        this.imgBoxGap = '';
        this.imgBoxFlexDirection = '';
        this.imgBoxBackgroundColor = '';
        this.imgBoxBackgroundImage = '';
        this.imgBoxBackgroundSize = '';
        this.imgBoxBackgroundRepeat = '';
        this.imgBoxPaddingTop = '';
        this.imgBoxPaddingLeft = '';
        this.imgBoxPaddingBottom = '';
        this.imgBoxPaddingRight = '';
        this.imgBoxJustifyContent = '';
        this.imgBoxAlignItems = '';
        this.imgFlexBasis = '';
        this.imgWidth = '';
        this.imgHeight = '';
        this.imgBorderRadius = '';
        this.imgGap = '';
        this.imgFlexDirection = '';
        this.imgBackgroundColor = '';
        this.imgBackgroundImage = '';
        this.imgBackgroundSize = '';
        this.imgBackgroundRepeat = '';
        this.imgPaddingTop = '';
        this.imgPaddingLeft = '';
        this.imgPaddingBottom = '';
        this.imgPaddingRight = '';
        this.imgJustifyContent = '';
        this.imgAlignItems = '';
        this.titleText = '';
        this.descriptionText = '';
    }
    render() {
        return html `
            <link rel="stylesheet" href="${this.externalStyleSheet}" />
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width ? this.width : '303px'};
height: ${this.height ? this.height : '124px'};
border-radius: ${this.borderRadius ? this.borderRadius : ' 0px 10px 10px 0px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#ffffff'};
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '52.8052805280528%'};
width: ${this.textBoxWidth ? this.textBoxWidth : '53%'};
height: ${this.textBoxHeight ? this.textBoxHeight : '88%'};
border-radius: ${this.textBoxBorderRadius ? this.textBoxBorderRadius : ' 0px 10px 10px 0px'};
gap: ${this.textBoxGap ? this.textBoxGap : '10px'};
flex-direction: ${this.textBoxFlexDirection ? this.textBoxFlexDirection : 'column'};
background-color: ${this.textBoxBackgroundColor ? this.textBoxBackgroundColor : '#b1b1b1'};
padding-top: ${this.textBoxPaddingTop ? this.textBoxPaddingTop : '7.5px'};
padding-left: ${this.textBoxPaddingLeft ? this.textBoxPaddingLeft : '7.5px'};
padding-bottom: ${this.textBoxPaddingBottom ? this.textBoxPaddingBottom : '7.5px'};
padding-right: ${this.textBoxPaddingRight ? this.textBoxPaddingRight : '7.5px'};
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '26.605504587155966%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#ffffff'};
font-size: ${this.titleFontSize ? this.titleFontSize : '1.497180461883545rem'};
font-family: ${this.titleFontFamily ? this.titleFontFamily : 'Montserrat'};
font-weight: ${this.titleFontWeight ? this.titleFontWeight : '500'};
letter-spacing: ${this.titleLetterSpacing ? this.titleLetterSpacing : '0rem'};
text-align: ${this.titleTextAlign ? this.titleTextAlign : 'left'};
line-height: ${this.titleLineHeight ? this.titleLineHeight : '1.754508376121521rem'};
}

.description {
flex-basis:  ${this.descriptionFlexBasis ? this.descriptionFlexBasis : '11.926605504587156%'};
color: ${this.descriptionBackgroundColor ? this.descriptionBackgroundColor : '#ffffff'};
font-size: ${this.descriptionFontSize ? this.descriptionFontSize : '0.671875rem'};
font-family: ${this.descriptionFontFamily ? this.descriptionFontFamily : 'Montserrat'};
font-weight: ${this.descriptionFontWeight ? this.descriptionFontWeight : '400'};
letter-spacing: ${this.descriptionLetterSpacing ? this.descriptionLetterSpacing : '0rem'};
text-align: ${this.descriptionTextAlign ? this.descriptionTextAlign : 'left'};
line-height: ${this.descriptionLineHeight ? this.descriptionLineHeight : '0.787353515625rem'};
}

.imgBox {
display: flex;
flex-basis:  ${this.imgBoxFlexBasis ? this.imgBoxFlexBasis : '35.64356435643564%'};
width: ${this.imgBoxWidth ? this.imgBoxWidth : '36%'};
height: ${this.imgBoxHeight ? this.imgBoxHeight : '84%'};
gap: ${this.imgBoxGap ? this.imgBoxGap : '10px'};
flex-direction: ${this.imgBoxFlexDirection ? this.imgBoxFlexDirection : 'column'};
padding-top: ${this.imgBoxPaddingTop ? this.imgBoxPaddingTop : '10px'};
padding-left: ${this.imgBoxPaddingLeft ? this.imgBoxPaddingLeft : '10px'};
padding-bottom: ${this.imgBoxPaddingBottom ? this.imgBoxPaddingBottom : '10px'};
padding-right: ${this.imgBoxPaddingRight ? this.imgBoxPaddingRight : '10px'};
}

.img {
flex-basis:  ${this.imgFlexBasis ? this.imgFlexBasis : '100%'};
width: ${this.imgWidth ? this.imgWidth : '100%'};
height: ${this.imgHeight ? this.imgHeight : '100%'};
background-image: ${this.imgBackgroundImage ? this.imgBackgroundImage : 'url(https://s3-alpha-sig.figma.com/img/3aa8/f2ea/d29dd308201f67d7ee0d13780262c402?Expires=1618185600&Signature=XLDPv7voma6EUOcf9gBBcnY-wsu3FSRJta9et7-2pWF23f1JwVJEy0tP65g~xtJcFgxYpPRiZLL40cEDKx6L7W15TVZ~OFgf-brT5N4XZfch6jOcIj-rMT5E9OhSEiPURL0Cw~uB-T~zR8~vZjEc1ORrlYWlfunzxx9EerKEjdS9h1nr17BAlaXIooWoVqm0fPaIvhARyhI7y8UC~oBK6UmT1b5witZz2suCubZyuWPhGynxVlqiJN9l-8NTDnElsiFOys9y97Oa913vC1~6g70Az99KHxVglzIF-gsw38Rhy~4YjsfHk4fJ~WOgw9yS6lXNCtdlTtQ~AVw4RZ5fGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'};
background-size: ${this.imgBackgroundSize ? this.imgBackgroundSize : 'cover'};
background-repeat: ${this.imgBackgroundRepeat ? this.imgBackgroundRepeat : 'no-repeat'};
}


            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText ? this.titleText : 'Hiking'}
</p>
<p class="description">
   ${this.descriptionText ? this.descriptionText : 'For the one’s that like natue'}
</p>
</div>
<div class="imgBox">
<div class="img">
</div>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], hikeCard.prototype, "externalStyleSheet", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "width", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "height", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxWidth", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxHeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxGap", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleFlexBasis", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleWidth", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleHeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleBorderRadius", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleGap", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleFlexDirection", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleFontSize", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleFontFamily", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleFontWeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleLetterSpacing", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleTextAlign", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleLineHeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionFlexBasis", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionWidth", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionHeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionBorderRadius", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionGap", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionFlexDirection", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionBackgroundColor", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionFontSize", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionFontFamily", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionFontWeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionLetterSpacing", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionTextAlign", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionLineHeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxWidth", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxHeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxGap", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgFlexBasis", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgWidth", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgHeight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBorderRadius", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgGap", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgFlexDirection", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBackgroundColor", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBackgroundImage", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBackgroundSize", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgPaddingTop", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgPaddingLeft", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgPaddingBottom", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgPaddingRight", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgJustifyContent", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgAlignItems", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionText", void 0);
hikeCard = __decorate([
    customElement('hike-card')
], hikeCard);
export { hikeCard };
// NOT GENERATED CODE
