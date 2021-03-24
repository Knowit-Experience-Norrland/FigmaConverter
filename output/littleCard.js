var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let littleCard = class littleCard extends LitElement {
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
        this.Frame5Width = '';
        this.Frame5Height = '';
        this.Frame5BorderRadius = '';
        this.Frame5Flex = '';
        this.Frame5Gap = '';
        this.Frame5FlexDirection = '';
        this.Frame5BackgroundColor = '';
        this.Frame5PaddingTop = '';
        this.Frame5PaddingLeft = '';
        this.Frame5PaddingBottom = '';
        this.Frame5PaddingRight = '';
        this.Frame5JustifyContent = '';
        this.Frame5AlignItems = '';
        this.LittleCardWidth = '';
        this.LittleCardHeight = '';
        this.LittleCardBorderRadius = '';
        this.LittleCardFlex = '';
        this.LittleCardGap = '';
        this.LittleCardFlexDirection = '';
        this.LittleCardBackgroundColor = '';
        this.LittleCardFontSize = '';
        this.LittleCardFontFamily = '';
        this.LittleCardFontWeight = '';
        this.LittleCardLetterSpacing = '';
        this.someexplanationtexthereWidth = '';
        this.someexplanationtexthereHeight = '';
        this.someexplanationtexthereBorderRadius = '';
        this.someexplanationtexthereFlex = '';
        this.someexplanationtexthereGap = '';
        this.someexplanationtexthereFlexDirection = '';
        this.someexplanationtexthereBackgroundColor = '';
        this.someexplanationtexthereFontSize = '';
        this.someexplanationtexthereFontFamily = '';
        this.someexplanationtexthereFontWeight = '';
        this.someexplanationtexthereLetterSpacing = '';
        this.LittleCardText = '';
        this.someexplanationtexthereText = '';
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
width: ${this.width ? `calc(${this.width} - 64px)` : '665px'};
height: ${this.height ? `calc(${this.height} - 66px)` : '115px'};
border-radius: ${this.borderRadius ? this.borderRadius : '29px'};
gap: ${this.gap ? this.gap : '80px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : 'var(--color-accent-light)'};
padding-top: ${this.paddingTop ? this.paddingTop : '33px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '32px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '33px'};
padding-right: ${this.paddingRight ? this.paddingRight : '32px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'center'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.Frame5 {
display: flex;
width: ${this.Frame5Width ? this.Frame5Width : '56%'};
height: ${this.Frame5Height ? this.Frame5Height : '100%'};
gap: ${this.Frame5Gap ? this.Frame5Gap : '22px'};
flex-direction: ${this.Frame5FlexDirection ? this.Frame5FlexDirection : 'column'};
}

.LittleCard {
color: ${this.LittleCardBackgroundColor ? this.LittleCardBackgroundColor : '#000000'};
font-size: ${this.LittleCardFontSize ? this.LittleCardFontSize : '3rem'};
font-family: ${this.LittleCardFontFamily ? this.LittleCardFontFamily : 'Montserrat'};
font-weight: ${this.LittleCardFontWeight ? this.LittleCardFontWeight : '100'};
letter-spacing: ${this.LittleCardLetterSpacing ? this.LittleCardLetterSpacing : '0'};
}

.someexplanationtexthere {
color: ${this.someexplanationtexthereBackgroundColor ? this.someexplanationtexthereBackgroundColor : '#000000'};
font-size: ${this.someexplanationtexthereFontSize ? this.someexplanationtexthereFontSize : '1.7513335943222046rem'};
font-family: ${this.someexplanationtexthereFontFamily ? this.someexplanationtexthereFontFamily : 'Montserrat'};
font-weight: ${this.someexplanationtexthereFontWeight ? this.someexplanationtexthereFontWeight : '100'};
letter-spacing: ${this.someexplanationtexthereLetterSpacing ? this.someexplanationtexthereLetterSpacing : '0'};
}


            </style> 
            <div class="Frame5">
<p class="LittleCard">
   ${this.LittleCardText ? this.LittleCardText : 'Little Card'}
</p>
<p class="someexplanationtexthere">
   ${this.someexplanationtexthereText ? this.someexplanationtexthereText : 'some explanation text here'}
</p>
</div>
<slot>
</slot>

        `;
    }
};
__decorate([
    property({ type: String })
], littleCard.prototype, "width", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "height", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "flex", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5Width", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5Height", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5BorderRadius", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5Flex", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5Gap", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5FlexDirection", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5BackgroundColor", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5PaddingTop", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5PaddingLeft", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5PaddingBottom", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5PaddingRight", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5JustifyContent", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "Frame5AlignItems", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardWidth", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardHeight", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardBorderRadius", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardFlex", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardGap", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardFlexDirection", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardBackgroundColor", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardFontSize", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardFontFamily", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardFontWeight", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardLetterSpacing", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereWidth", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereHeight", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereBorderRadius", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereFlex", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereGap", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereFlexDirection", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereBackgroundColor", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereFontSize", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereFontFamily", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereFontWeight", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereLetterSpacing", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "LittleCardText", void 0);
__decorate([
    property({ type: String })
], littleCard.prototype, "someexplanationtexthereText", void 0);
littleCard = __decorate([
    customElement('little-card')
], littleCard);
export { littleCard };
// NOT GENERATED CODE
