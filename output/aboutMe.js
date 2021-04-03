var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let aboutMe = class aboutMe extends LitElement {
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
        this.titleTextAlign = '';
        this.firstParagraphFlexBasis = '';
        this.firstParagraphWidth = '';
        this.firstParagraphHeight = '';
        this.firstParagraphBorderRadius = '';
        this.firstParagraphGap = '';
        this.firstParagraphFlexDirection = '';
        this.firstParagraphBackgroundColor = '';
        this.firstParagraphFontSize = '';
        this.firstParagraphFontFamily = '';
        this.firstParagraphFontWeight = '';
        this.firstParagraphTextAlign = '';
        this.secondParagraphFlexBasis = '';
        this.secondParagraphWidth = '';
        this.secondParagraphHeight = '';
        this.secondParagraphBorderRadius = '';
        this.secondParagraphGap = '';
        this.secondParagraphFlexDirection = '';
        this.secondParagraphBackgroundColor = '';
        this.secondParagraphFontSize = '';
        this.secondParagraphFontFamily = '';
        this.secondParagraphFontWeight = '';
        this.secondParagraphTextAlign = '';
        this.titleText = '';
        this.firstParagraphText = '';
        this.secondParagraphText = '';
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
width: ${this.width ? `calc(${this.width} - 27px)` : '293px'};
height: ${this.height ? `calc(${this.height} - 27px)` : '388px'};
gap: ${this.gap ? this.gap : '41px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'column'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#0c0c0c'};
padding-top: ${this.paddingTop ? this.paddingTop : '13.5px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '13.5px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '13.5px'};
padding-right: ${this.paddingRight ? this.paddingRight : '13.5px'};
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '7.474226804123711%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#f5fdff'};
font-size: ${this.titleFontSize ? this.titleFontSize : '1.5rem'};
font-family: ${this.titleFontFamily ? this.titleFontFamily : 'Montserrat'};
font-weight: ${this.titleFontWeight ? this.titleFontWeight : '400'};
text-align: ${this.titleTextAlign ? this.titleTextAlign : 'left'};
}

.firstParagraph {
flex-basis:  ${this.firstParagraphFlexBasis ? this.firstParagraphFlexBasis : '35.56701030927835%'};
color: ${this.firstParagraphBackgroundColor ? this.firstParagraphBackgroundColor : '#f5fdff'};
font-size: ${this.firstParagraphFontSize ? this.firstParagraphFontSize : '0.875rem'};
font-family: ${this.firstParagraphFontFamily ? this.firstParagraphFontFamily : 'Montserrat'};
font-weight: ${this.firstParagraphFontWeight ? this.firstParagraphFontWeight : '400'};
text-align: ${this.firstParagraphTextAlign ? this.firstParagraphTextAlign : 'left'};
}

.secondParagraph {
flex-basis:  ${this.secondParagraphFlexBasis ? this.secondParagraphFlexBasis : '35.56701030927835%'};
color: ${this.secondParagraphBackgroundColor ? this.secondParagraphBackgroundColor : '#f5fdff'};
font-size: ${this.secondParagraphFontSize ? this.secondParagraphFontSize : '0.875rem'};
font-family: ${this.secondParagraphFontFamily ? this.secondParagraphFontFamily : 'Montserrat'};
font-weight: ${this.secondParagraphFontWeight ? this.secondParagraphFontWeight : '400'};
text-align: ${this.secondParagraphTextAlign ? this.secondParagraphTextAlign : 'left'};
}


            </style> 
            <p class="title">
   ${this.titleText ? this.titleText : 'Hej! '}
</p>
<p class="firstParagraph">
   ${this.firstParagraphText ? this.firstParagraphText : 'Albin Frick heter jag och går femte och sista året på programmet Civilingenjör för interaktion och design i Umeå. Jag är 24 år gammal och bor tillsammans med min fästmö i Umeå. Jag älskar att koda och designa nya saker. Jag är väldigt intresserad av front-end utveckling men tycker är spännande att ha en fullstack förståelse över system.'}
</p>
<p class="secondParagraph">
   ${this.secondParagraphText ? this.secondParagraphText : 'Ända sedan jag fick min första smartphone så har jag varit på jakt efter nya häftiga applikationer och hämsidor. På senare tid har sökandet gått mer över till skapande och hoppas att kunna få arbeta med detta framöver! '}
</p>

        `;
    }
};
__decorate([
    property({ type: String })
], aboutMe.prototype, "externalStyleSheet", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "width", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "height", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleFlexBasis", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleWidth", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleHeight", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleBorderRadius", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleGap", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleFlexDirection", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleFontSize", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleFontFamily", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleFontWeight", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleTextAlign", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphFlexBasis", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphWidth", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphHeight", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphBorderRadius", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphGap", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphFlexDirection", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphBackgroundColor", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphFontSize", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphFontFamily", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphFontWeight", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphTextAlign", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphFlexBasis", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphWidth", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphHeight", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphBorderRadius", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphGap", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphFlexDirection", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphBackgroundColor", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphFontSize", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphFontFamily", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphFontWeight", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphTextAlign", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphText", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphText", void 0);
aboutMe = __decorate([
    customElement('about-me')
], aboutMe);
export { aboutMe };
// NOT GENERATED CODE
