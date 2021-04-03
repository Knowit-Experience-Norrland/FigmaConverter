var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let titleHeading = class titleHeading extends LitElement {
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
        this.FigmaConverterFlexBasis = '';
        this.FigmaConverterWidth = '';
        this.FigmaConverterHeight = '';
        this.FigmaConverterBorderRadius = '';
        this.FigmaConverterGap = '';
        this.FigmaConverterFlexDirection = '';
        this.FigmaConverterBackgroundColor = '';
        this.FigmaConverterFontSize = '';
        this.FigmaConverterFontFamily = '';
        this.FigmaConverterFontWeight = '';
        this.FigmaConverterLetterSpacing = '';
        this.FigmaConverterTextAlign = '';
        this.FigmaConverterLineHeight = '';
        this.AutomatetocomunicateFlexBasis = '';
        this.AutomatetocomunicateWidth = '';
        this.AutomatetocomunicateHeight = '';
        this.AutomatetocomunicateBorderRadius = '';
        this.AutomatetocomunicateGap = '';
        this.AutomatetocomunicateFlexDirection = '';
        this.AutomatetocomunicateBackgroundColor = '';
        this.AutomatetocomunicateFontSize = '';
        this.AutomatetocomunicateFontFamily = '';
        this.AutomatetocomunicateFontWeight = '';
        this.AutomatetocomunicateLetterSpacing = '';
        this.AutomatetocomunicateTextAlign = '';
        this.AutomatetocomunicateLineHeight = '';
        this.FigmaConverterText = '';
        this.AutomatetocomunicateText = '';
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
width: ${this.width ? this.width : '546px'};
height: ${this.height ? this.height : '118px'};
gap: ${this.gap ? this.gap : '5px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'column'};
}

.FigmaConverter {
flex-basis:  ${this.FigmaConverterFlexBasis ? this.FigmaConverterFlexBasis : '66.10169491525424%'};
color: ${this.FigmaConverterBackgroundColor ? this.FigmaConverterBackgroundColor : '#000000'};
font-size: ${this.FigmaConverterFontSize ? this.FigmaConverterFontSize : '4rem'};
font-family: ${this.FigmaConverterFontFamily ? this.FigmaConverterFontFamily : 'Montserrat'};
font-weight: ${this.FigmaConverterFontWeight ? this.FigmaConverterFontWeight : '500'};
letter-spacing: ${this.FigmaConverterLetterSpacing ? this.FigmaConverterLetterSpacing : '0'};
text-align: ${this.FigmaConverterTextAlign ? this.FigmaConverterTextAlign : 'left'};
line-height: ${this.FigmaConverterLineHeight ? this.FigmaConverterLineHeight : '4.6875rem'};
}

.Automatetocomunicate {
flex-basis:  ${this.AutomatetocomunicateFlexBasis ? this.AutomatetocomunicateFlexBasis : '29.66101694915254%'};
color: ${this.AutomatetocomunicateBackgroundColor ? this.AutomatetocomunicateBackgroundColor : '#000000'};
font-size: ${this.AutomatetocomunicateFontSize ? this.AutomatetocomunicateFontSize : '1.8125rem'};
font-family: ${this.AutomatetocomunicateFontFamily ? this.AutomatetocomunicateFontFamily : 'Montserrat'};
font-weight: ${this.AutomatetocomunicateFontWeight ? this.AutomatetocomunicateFontWeight : '400'};
letter-spacing: ${this.AutomatetocomunicateLetterSpacing ? this.AutomatetocomunicateLetterSpacing : '0'};
text-align: ${this.AutomatetocomunicateTextAlign ? this.AutomatetocomunicateTextAlign : 'left'};
line-height: ${this.AutomatetocomunicateLineHeight ? this.AutomatetocomunicateLineHeight : '2.1240234375rem'};
}


            </style> 
            <p class="FigmaConverter">
   ${this.FigmaConverterText ? this.FigmaConverterText : 'Figma Converter'}
</p>
<p class="Automatetocomunicate">
   ${this.AutomatetocomunicateText ? this.AutomatetocomunicateText : 'Automate to comunicate'}
</p>

        `;
    }
};
__decorate([
    property({ type: String })
], titleHeading.prototype, "width", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "height", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterFlexBasis", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterWidth", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterHeight", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterBorderRadius", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterGap", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterFlexDirection", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterBackgroundColor", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterFontSize", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterFontFamily", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterFontWeight", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterLetterSpacing", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterTextAlign", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterLineHeight", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateFlexBasis", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateWidth", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateHeight", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateBorderRadius", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateGap", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateFlexDirection", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateBackgroundColor", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateFontSize", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateFontFamily", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateFontWeight", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateLetterSpacing", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateTextAlign", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateLineHeight", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "FigmaConverterText", void 0);
__decorate([
    property({ type: String })
], titleHeading.prototype, "AutomatetocomunicateText", void 0);
titleHeading = __decorate([
    customElement('title-heading')
], titleHeading);
export { titleHeading };
// NOT GENERATED CODE
