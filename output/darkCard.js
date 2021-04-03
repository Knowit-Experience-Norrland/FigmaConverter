var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let darkCard = class darkCard extends LitElement {
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
        this.Frame1FlexBasis = '';
        this.Frame1Width = '';
        this.Frame1Height = '';
        this.Frame1BorderRadius = '';
        this.Frame1Gap = '';
        this.Frame1FlexDirection = '';
        this.Frame1BackgroundColor = '';
        this.Frame1BackgroundImage = '';
        this.Frame1BackgroundSize = '';
        this.Frame1BackgroundRepeat = '';
        this.Frame1PaddingTop = '';
        this.Frame1PaddingLeft = '';
        this.Frame1PaddingBottom = '';
        this.Frame1PaddingRight = '';
        this.Frame1JustifyContent = '';
        this.Frame1AlignItems = '';
        this.TodaytrainingtimeFlexBasis = '';
        this.TodaytrainingtimeWidth = '';
        this.TodaytrainingtimeHeight = '';
        this.TodaytrainingtimeBorderRadius = '';
        this.TodaytrainingtimeGap = '';
        this.TodaytrainingtimeFlexDirection = '';
        this.TodaytrainingtimeBackgroundColor = '';
        this.TodaytrainingtimeFontSize = '';
        this.TodaytrainingtimeFontFamily = '';
        this.TodaytrainingtimeFontWeight = '';
        this.TodaytrainingtimeLetterSpacing = '';
        this.TodaytrainingtimeTextAlign = '';
        this.TodaytrainingtimeLineHeight = '';
        this.minutesFlexBasis = '';
        this.minutesWidth = '';
        this.minutesHeight = '';
        this.minutesBorderRadius = '';
        this.minutesGap = '';
        this.minutesFlexDirection = '';
        this.minutesBackgroundColor = '';
        this.minutesFontSize = '';
        this.minutesFontFamily = '';
        this.minutesFontWeight = '';
        this.minutesLetterSpacing = '';
        this.minutesTextAlign = '';
        this.minutesLineHeight = '';
        this.Rectangle22FlexBasis = '';
        this.Rectangle22Width = '';
        this.Rectangle22Height = '';
        this.Rectangle22BorderRadius = '';
        this.Rectangle22Gap = '';
        this.Rectangle22FlexDirection = '';
        this.Rectangle22BackgroundColor = '';
        this.Rectangle22BackgroundImage = '';
        this.Rectangle22BackgroundSize = '';
        this.Rectangle22BackgroundRepeat = '';
        this.Rectangle22PaddingTop = '';
        this.Rectangle22PaddingLeft = '';
        this.Rectangle22PaddingBottom = '';
        this.Rectangle22PaddingRight = '';
        this.Rectangle22JustifyContent = '';
        this.Rectangle22AlignItems = '';
        this.TodaytrainingtimeText = '';
        this.minutesText = '';
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
width: ${this.width ? `calc(${this.width} - 80px)` : '594px'};
height: ${this.height ? `calc(${this.height} - 70px)` : '107px'};
border-radius: ${this.borderRadius ? this.borderRadius : '16px'};
gap: ${this.gap ? this.gap : '84px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#431d1d'};
padding-top: ${this.paddingTop ? this.paddingTop : '35px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '40px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '35px'};
padding-right: ${this.paddingRight ? this.paddingRight : '40px'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.Frame1 {
display: flex;
flex-basis:  ${this.Frame1FlexBasis ? this.Frame1FlexBasis : '44.27609427609428%'};
width: 100%;
height: 100%;
flex-direction: ${this.Frame1FlexDirection ? this.Frame1FlexDirection : 'column'};
}

.Todaytrainingtime {
flex-basis:  ${this.TodaytrainingtimeFlexBasis ? this.TodaytrainingtimeFlexBasis : '42.857142857142854%'};
color: ${this.TodaytrainingtimeBackgroundColor ? this.TodaytrainingtimeBackgroundColor : '#ffffff'};
font-size: ${this.TodaytrainingtimeFontSize ? this.TodaytrainingtimeFontSize : '1.5rem'};
font-family: ${this.TodaytrainingtimeFontFamily ? this.TodaytrainingtimeFontFamily : 'Open Sans'};
font-weight: ${this.TodaytrainingtimeFontWeight ? this.TodaytrainingtimeFontWeight : '400'};
letter-spacing: ${this.TodaytrainingtimeLetterSpacing ? this.TodaytrainingtimeLetterSpacing : '0'};
text-align: ${this.TodaytrainingtimeTextAlign ? this.TodaytrainingtimeTextAlign : 'left'};
line-height: ${this.TodaytrainingtimeLineHeight ? this.TodaytrainingtimeLineHeight : '1.7578125rem'};
}

.minutes {
flex-basis:  ${this.minutesFlexBasis ? this.minutesFlexBasis : '57.14285714285714%'};
color: ${this.minutesBackgroundColor ? this.minutesBackgroundColor : '#ffffff'};
font-size: ${this.minutesFontSize ? this.minutesFontSize : '2rem'};
font-family: ${this.minutesFontFamily ? this.minutesFontFamily : 'Open Sans'};
font-weight: ${this.minutesFontWeight ? this.minutesFontWeight : '600'};
letter-spacing: ${this.minutesLetterSpacing ? this.minutesLetterSpacing : '0'};
text-align: ${this.minutesTextAlign ? this.minutesTextAlign : 'left'};
line-height: ${this.minutesLineHeight ? this.minutesLineHeight : '2.34375rem'};
}

.Rectangle22 {
flex-basis:  ${this.Rectangle22FlexBasis ? this.Rectangle22FlexBasis : '41.582491582491585%'};
width: 100%;
height: 100%;
border-radius: ${this.Rectangle22BorderRadius ? this.Rectangle22BorderRadius : '28px'};
background-color: ${this.Rectangle22BackgroundColor ? this.Rectangle22BackgroundColor : '#446d52'};
}


            </style> 
            <div class="Frame1">
<p class="Todaytrainingtime">
   ${this.TodaytrainingtimeText ? this.TodaytrainingtimeText : 'Today training time'}
</p>
<p class="minutes">
   ${this.minutesText ? this.minutesText : '01:33:58 minutes'}
</p>
</div>
<div class="Rectangle22">
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], darkCard.prototype, "width", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "height", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1FlexBasis", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1Width", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1Height", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1BorderRadius", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1Gap", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1FlexDirection", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1BackgroundColor", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1BackgroundImage", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1BackgroundSize", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1BackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1PaddingTop", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1PaddingLeft", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1PaddingBottom", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1PaddingRight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1JustifyContent", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Frame1AlignItems", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeFlexBasis", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeWidth", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeHeight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeBorderRadius", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeGap", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeFlexDirection", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeBackgroundColor", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeFontSize", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeFontFamily", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeFontWeight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeLetterSpacing", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeTextAlign", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeLineHeight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesFlexBasis", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesWidth", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesHeight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesBorderRadius", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesGap", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesFlexDirection", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesBackgroundColor", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesFontSize", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesFontFamily", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesFontWeight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesLetterSpacing", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesTextAlign", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesLineHeight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22FlexBasis", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22Width", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22Height", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22BorderRadius", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22Gap", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22FlexDirection", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22BackgroundColor", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22BackgroundImage", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22BackgroundSize", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22BackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22PaddingTop", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22PaddingLeft", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22PaddingBottom", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22PaddingRight", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22JustifyContent", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "Rectangle22AlignItems", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "TodaytrainingtimeText", void 0);
__decorate([
    property({ type: String })
], darkCard.prototype, "minutesText", void 0);
darkCard = __decorate([
    customElement('dark-card')
], darkCard);
export { darkCard };
// NOT GENERATED CODE
