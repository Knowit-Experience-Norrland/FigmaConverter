var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let nameTag = class nameTag extends LitElement {
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
        this.titleBoxFlexBasis = '';
        this.titleBoxWidth = '';
        this.titleBoxHeight = '';
        this.titleBoxBorderRadius = '';
        this.titleBoxGap = '';
        this.titleBoxFlexDirection = '';
        this.titleBoxBackgroundColor = '';
        this.titleBoxBackgroundImage = '';
        this.titleBoxBackgroundSize = '';
        this.titleBoxBackgroundRepeat = '';
        this.titleBoxPaddingTop = '';
        this.titleBoxPaddingLeft = '';
        this.titleBoxPaddingBottom = '';
        this.titleBoxPaddingRight = '';
        this.titleBoxJustifyContent = '';
        this.titleBoxAlignItems = '';
        this.nameFlexBasis = '';
        this.nameWidth = '';
        this.nameHeight = '';
        this.nameBorderRadius = '';
        this.nameGap = '';
        this.nameFlexDirection = '';
        this.nameBackgroundColor = '';
        this.nameFontSize = '';
        this.nameFontFamily = '';
        this.nameFontWeight = '';
        this.nameLetterSpacing = '';
        this.nameTextAlign = '';
        this.nameLineHeight = '';
        this.subBoxFlexBasis = '';
        this.subBoxWidth = '';
        this.subBoxHeight = '';
        this.subBoxBorderRadius = '';
        this.subBoxGap = '';
        this.subBoxFlexDirection = '';
        this.subBoxBackgroundColor = '';
        this.subBoxBackgroundImage = '';
        this.subBoxBackgroundSize = '';
        this.subBoxBackgroundRepeat = '';
        this.subBoxPaddingTop = '';
        this.subBoxPaddingLeft = '';
        this.subBoxPaddingBottom = '';
        this.subBoxPaddingRight = '';
        this.subBoxJustifyContent = '';
        this.subBoxAlignItems = '';
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
        this.nameText = '';
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
width: ${this.width ? this.width : '480px'};
height: ${this.height ? this.height : '116px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
}

.img {
flex-basis:  ${this.imgFlexBasis ? this.imgFlexBasis : '24.166666666666668%'};
width: ${this.imgWidth ? this.imgWidth : '24%'};
height: ${this.imgHeight ? this.imgHeight : '100%'};
border-radius: ${this.imgBorderRadius ? this.imgBorderRadius : '50%'};
background-image: ${this.imgBackgroundImage ? this.imgBackgroundImage : 'url(https://s3-alpha-sig.figma.com/img/eef5/7561/45407980a3de4d17ad939880d89ad77b?Expires=1618185600&Signature=Oz7k1a~yixlsidvMPs9nSKA0YnWGE9bUErdTZsBv~ORk7h4~Akd8Flr7tSplpk2hhOxcNgTyWeVNz7poU0nrrnByatFDjrP7shwqbJTv98L6cktFSyi~tpWZCzwvYndF7h66XdgBZPJuKleLJDaoluZ6irX~xWRMuYm1hdT4zgL9Zd~zeD5BtqNwiiLTJX3dLXKiIRBQqQV8V4ZHWJu4fruXUUwDqAPjq3ro6Lrtgt4a1NMRH2EAOroXGHcxTMt2fS~joL3izSjB8PXJaG2hn0jJxpUTkm3BHJA73KP8osCwj0ME19wzwUCqGMSBdIw9lD4jYGodpLs40QD6BN0QFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'};
background-size: ${this.imgBackgroundSize ? this.imgBackgroundSize : 'cover'};
background-repeat: ${this.imgBackgroundRepeat ? this.imgBackgroundRepeat : 'no-repeat'};
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '75.83333333333333%'};
width: ${this.textBoxWidth ? this.textBoxWidth : '76%'};
height: ${this.textBoxHeight ? this.textBoxHeight : '100%'};
flex-direction: ${this.textBoxFlexDirection ? this.textBoxFlexDirection : 'column'};
justify-content: ${this.textBoxJustifyContent ? this.textBoxJustifyContent : 'flex-end'};
}

.titleBox {
display: flex;
flex-basis:  ${this.titleBoxFlexBasis ? this.titleBoxFlexBasis : '29.310344827586203%'};
width: ${this.titleBoxWidth ? this.titleBoxWidth : '52%'};
height: ${this.titleBoxHeight ? this.titleBoxHeight : '29%'};
border-radius: ${this.titleBoxBorderRadius ? this.titleBoxBorderRadius : ' 0px 30px 30px 0px'};
gap: ${this.titleBoxGap ? this.titleBoxGap : '10px'};
flex-direction: ${this.titleBoxFlexDirection ? this.titleBoxFlexDirection : 'row'};
background-color: ${this.titleBoxBackgroundColor ? this.titleBoxBackgroundColor : '#3d697c'};
padding-top: ${this.titleBoxPaddingTop ? this.titleBoxPaddingTop : '10px'};
padding-left: ${this.titleBoxPaddingLeft ? this.titleBoxPaddingLeft : '70px'};
padding-bottom: ${this.titleBoxPaddingBottom ? this.titleBoxPaddingBottom : '10px'};
padding-right: ${this.titleBoxPaddingRight ? this.titleBoxPaddingRight : '105px'};
justify-content: ${this.titleBoxJustifyContent ? this.titleBoxJustifyContent : 'center'};
align-items: ${this.titleBoxAlignItems ? this.titleBoxAlignItems : 'center'};
}

.name {
flex-basis:  ${this.nameFlexBasis ? this.nameFlexBasis : '85.18518518518519%'};
color: ${this.nameBackgroundColor ? this.nameBackgroundColor : '#ffffff'};
font-size: ${this.nameFontSize ? this.nameFontSize : '2.1622514724731445rem'};
font-family: ${this.nameFontFamily ? this.nameFontFamily : 'Roboto'};
font-weight: ${this.nameFontWeight ? this.nameFontWeight : '400'};
letter-spacing: ${this.nameLetterSpacing ? this.nameLetterSpacing : '0rem'};
text-align: ${this.nameTextAlign ? this.nameTextAlign : 'left'};
line-height: ${this.nameLineHeight ? this.nameLineHeight : '2.533888339996338rem'};
}

.subBox {
display: flex;
flex-basis:  ${this.subBoxFlexBasis ? this.subBoxFlexBasis : '12.068965517241379%'};
width: ${this.subBoxWidth ? this.subBoxWidth : '54%'};
height: ${this.subBoxHeight ? this.subBoxHeight : '12%'};
border-radius: ${this.subBoxBorderRadius ? this.subBoxBorderRadius : ' 0px 20px 20px 0px'};
flex-direction: ${this.subBoxFlexDirection ? this.subBoxFlexDirection : 'row'};
background-color: ${this.subBoxBackgroundColor ? this.subBoxBackgroundColor : '#598ea4'};
padding-top: ${this.subBoxPaddingTop ? this.subBoxPaddingTop : '11px'};
padding-left: ${this.subBoxPaddingLeft ? this.subBoxPaddingLeft : '70px'};
padding-bottom: ${this.subBoxPaddingBottom ? this.subBoxPaddingBottom : '11px'};
padding-right: ${this.subBoxPaddingRight ? this.subBoxPaddingRight : '28px'};
justify-content: ${this.subBoxJustifyContent ? this.subBoxJustifyContent : 'center'};
align-items: ${this.subBoxAlignItems ? this.subBoxAlignItems : 'center'};
}

.description {
flex-basis:  ${this.descriptionFlexBasis ? this.descriptionFlexBasis : '85.12820512820512%'};
color: ${this.descriptionBackgroundColor ? this.descriptionBackgroundColor : '#ffffff'};
font-size: ${this.descriptionFontSize ? this.descriptionFontSize : '0.75rem'};
font-family: ${this.descriptionFontFamily ? this.descriptionFontFamily : 'Roboto'};
font-weight: ${this.descriptionFontWeight ? this.descriptionFontWeight : '400'};
letter-spacing: ${this.descriptionLetterSpacing ? this.descriptionLetterSpacing : '0rem'};
text-align: ${this.descriptionTextAlign ? this.descriptionTextAlign : 'left'};
line-height: ${this.descriptionLineHeight ? this.descriptionLineHeight : '0.87890625rem'};
}


            </style> 
            <div class="img">
</div>
<div class="textBox">
<div class="titleBox">
<p class="name">
   ${this.nameText ? this.nameText : 'Albin Frick'}
</p>
</div>
<div class="subBox">
<p class="description">
   ${this.descriptionText ? this.descriptionText : ' M.Sc in Interaction and Design'}
</p>
</div>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], nameTag.prototype, "externalStyleSheet", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "width", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "height", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgFlexBasis", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgWidth", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgBorderRadius", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgGap", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgFlexDirection", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgBackgroundColor", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgBackgroundImage", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgBackgroundSize", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgPaddingTop", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgPaddingLeft", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgPaddingBottom", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgPaddingRight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgJustifyContent", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "imgAlignItems", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxWidth", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxGap", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxWidth", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxGap", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameFlexBasis", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameWidth", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameBorderRadius", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameGap", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameFlexDirection", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameBackgroundColor", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameFontSize", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameFontFamily", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameFontWeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameLetterSpacing", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameTextAlign", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameLineHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxWidth", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxGap", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionFlexBasis", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionWidth", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionBorderRadius", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionGap", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionFlexDirection", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionBackgroundColor", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionFontSize", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionFontFamily", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionFontWeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionLetterSpacing", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionTextAlign", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionLineHeight", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameText", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionText", void 0);
nameTag = __decorate([
    customElement('name-tag')
], nameTag);
export { nameTag };
// NOT GENERATED CODE
