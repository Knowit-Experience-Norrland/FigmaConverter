var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let testComp = class testComp extends LitElement {
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
        this.BrödtextFlexBasis = '';
        this.BrödtextWidth = '';
        this.BrödtextHeight = '';
        this.BrödtextBorderRadius = '';
        this.BrödtextGap = '';
        this.BrödtextFlexDirection = '';
        this.BrödtextBackgroundColor = '';
        this.BrödtextFontSize = '';
        this.BrödtextFontFamily = '';
        this.BrödtextFontWeight = '';
        this.BrödtextLetterSpacing = '';
        this.BrödtextTextAlign = '';
        this.BrödtextLineHeight = '';
        this.hildaFlexBasis = '';
        this.hildaWidth = '';
        this.hildaHeight = '';
        this.hildaBorderRadius = '';
        this.hildaGap = '';
        this.hildaFlexDirection = '';
        this.hildaBackgroundColor = '';
        this.hildaBackgroundImage = '';
        this.hildaBackgroundSize = '';
        this.hildaBackgroundRepeat = '';
        this.hildaPaddingTop = '';
        this.hildaPaddingLeft = '';
        this.hildaPaddingBottom = '';
        this.hildaPaddingRight = '';
        this.hildaJustifyContent = '';
        this.hildaAlignItems = '';
        this.titleText = '';
        this.BrödtextText = '';
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
width: ${this.width ? `calc(${this.width} - 20px)` : '236px'};
height: ${this.height ? `calc(${this.height} - 20px)` : '74px'};
border-radius: ${this.borderRadius ? this.borderRadius : '14px'};
gap: ${this.gap ? this.gap : '10px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#2f7c81'};
padding-top: ${this.paddingTop ? this.paddingTop : '10px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '10px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '10px'};
padding-right: ${this.paddingRight ? this.paddingRight : '10px'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '44.91525423728814%'};
width: ${this.textBoxWidth ? this.textBoxWidth : '45%'};
height: ${this.textBoxHeight ? this.textBoxHeight : '91%'};
flex-direction: ${this.textBoxFlexDirection ? this.textBoxFlexDirection : 'column'};
padding-top: ${this.textBoxPaddingTop ? this.textBoxPaddingTop : '3.5px'};
padding-left: ${this.textBoxPaddingLeft ? this.textBoxPaddingLeft : '3.5px'};
padding-bottom: ${this.textBoxPaddingBottom ? this.textBoxPaddingBottom : '3.5px'};
padding-right: ${this.textBoxPaddingRight ? this.textBoxPaddingRight : '3.5px'};
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '43.28358208955223%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#ffe7e7'};
font-size: ${this.titleFontSize ? this.titleFontSize : '1.5rem'};
font-family: ${this.titleFontFamily ? this.titleFontFamily : 'Montserrat'};
font-weight: ${this.titleFontWeight ? this.titleFontWeight : '600'};
letter-spacing: ${this.titleLetterSpacing ? this.titleLetterSpacing : '0rem'};
text-align: ${this.titleTextAlign ? this.titleTextAlign : 'left'};
line-height: ${this.titleLineHeight ? this.titleLineHeight : '1.7578125rem'};
}

.Brödtext {
flex-basis:  ${this.BrödtextFlexBasis ? this.BrödtextFlexBasis : '22.388059701492537%'};
color: ${this.BrödtextBackgroundColor ? this.BrödtextBackgroundColor : '#000000'};
font-size: ${this.BrödtextFontSize ? this.BrödtextFontSize : '0.75rem'};
font-family: ${this.BrödtextFontFamily ? this.BrödtextFontFamily : 'Montserrat'};
font-weight: ${this.BrödtextFontWeight ? this.BrödtextFontWeight : '400'};
letter-spacing: ${this.BrödtextLetterSpacing ? this.BrödtextLetterSpacing : '0rem'};
text-align: ${this.BrödtextTextAlign ? this.BrödtextTextAlign : 'left'};
line-height: ${this.BrödtextLineHeight ? this.BrödtextLineHeight : '0.87890625rem'};
}

.hilda {
flex-basis:  ${this.hildaFlexBasis ? this.hildaFlexBasis : '47.88135593220339%'};
width: ${this.hildaWidth ? this.hildaWidth : '48%'};
height: ${this.hildaHeight ? this.hildaHeight : '100%'};
background-image: ${this.hildaBackgroundImage ? this.hildaBackgroundImage : 'url(https://s3-alpha-sig.figma.com/img/22bd/2d41/d562fe02234f42c2e2efa41c3c3e240c?Expires=1618185600&Signature=e-ZWrb4XaFtRUfpyNr-EqkOGsgB8LSTWlsfNKLYUDYmCm0CYTjrofFpdpH-dbkQ712QckQgrpK5QOucBtVxKZKO3DmoP~brFet6cdFBkRybAM8nzFpi0ImHcM2ejCPB3zpqIkZz23X~SqRaPC353QRQ6zTUzR6PCd7mUt7dzIDkgcZNtJ9VhkDae5lto1e67zocOOEl5bCmZK~5EIkceMPKCCj57aHgboluGoENIgwOXvjNaXEaUVaa4zt9wxbWTK6K5Jz-5sWPgISJh~FJtWC~9AyzlQkbpVOVhym4JJ2KZwiVsB8Nm91V9l-yetvNoYp9Fc0hfhQ3jG~eEGjV70A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'};
background-size: ${this.hildaBackgroundSize ? this.hildaBackgroundSize : 'cover'};
background-repeat: ${this.hildaBackgroundRepeat ? this.hildaBackgroundRepeat : 'no-repeat'};
}


            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText ? this.titleText : 'Title'}
</p>
<p class="Brödtext">
   ${this.BrödtextText ? this.BrödtextText : 'Brödtext'}
</p>
</div>
<div class="hilda">
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], testComp.prototype, "externalStyleSheet", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "width", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "height", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxWidth", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxGap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleFlexBasis", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleWidth", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleBorderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleGap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleFlexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleFontSize", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleFontFamily", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleFontWeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleLetterSpacing", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleTextAlign", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleLineHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextFlexBasis", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextWidth", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextBorderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextGap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextFlexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextFontSize", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextFontFamily", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextFontWeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextLetterSpacing", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextTextAlign", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextLineHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaFlexBasis", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaWidth", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaBorderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaGap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaFlexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaBackgroundImage", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaBackgroundSize", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaPaddingTop", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaPaddingLeft", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaPaddingBottom", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaPaddingRight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaJustifyContent", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hildaAlignItems", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextText", void 0);
testComp = __decorate([
    customElement('test-comp')
], testComp);
export { testComp };
// NOT GENERATED CODE
