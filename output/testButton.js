var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let testButton = class testButton extends LitElement {
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
        this.ButtonWidth = '';
        this.ButtonHeight = '';
        this.ButtonBorderRadius = '';
        this.ButtonGap = '';
        this.ButtonFlexDirection = '';
        this.ButtonBackgroundColor = '';
        this.ButtonFontSize = '';
        this.ButtonFontFamily = '';
        this.ButtonFontWeight = '';
        this.ButtonLetterSpacing = '';
        this.ButtonText = '';
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
width: ${this.width ? `calc(${this.width} - 23px)` : '165px'};
height: ${this.height ? `calc(${this.height} - 23px)` : '59px'};
border-radius: ${this.borderRadius ? this.borderRadius : '12px'};
gap: ${this.gap ? this.gap : '10px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#ffffff'};
padding-top: ${this.paddingTop ? this.paddingTop : '11.5px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '11.5px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '11.5px'};
padding-right: ${this.paddingRight ? this.paddingRight : '11.5px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'center'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.Button {
color: ${this.ButtonBackgroundColor ? this.ButtonBackgroundColor : '#000000'};
font-size: ${this.ButtonFontSize ? this.ButtonFontSize : '3rem'};
font-family: ${this.ButtonFontFamily ? this.ButtonFontFamily : 'Montserrat'};
font-weight: ${this.ButtonFontWeight ? this.ButtonFontWeight : '100'};
letter-spacing: ${this.ButtonLetterSpacing ? this.ButtonLetterSpacing : '0'};
}


            </style> 
            <p class="Button">
   ${this.ButtonText ? this.ButtonText : 'Button'}
</p>

        `;
    }
};
__decorate([
    property({ type: String })
], testButton.prototype, "width", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "height", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonWidth", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonHeight", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonBorderRadius", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonGap", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonFlexDirection", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonFontSize", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonFontFamily", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonFontWeight", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonLetterSpacing", void 0);
__decorate([
    property({ type: String })
], testButton.prototype, "ButtonText", void 0);
testButton = __decorate([
    customElement('test-button')
], testButton);
export { testButton };
// NOT GENERATED CODE
