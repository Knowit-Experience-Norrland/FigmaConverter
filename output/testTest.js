var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let testTest = class testTest extends LitElement {
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
        this.testFlexBasis = '';
        this.testWidth = '';
        this.testHeight = '';
        this.testBorderRadius = '';
        this.testGap = '';
        this.testFlexDirection = '';
        this.testBackgroundColor = '';
        this.testFontSize = '';
        this.testFontFamily = '';
        this.testFontWeight = '';
        this.testTextAlign = '';
        this.testText = '';
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
width: ${this.width ? `calc(${this.width} - 125px)` : '24px'};
height: ${this.height ? `calc(${this.height} - 125px)` : '17px'};
gap: ${this.gap ? this.gap : '10px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#ffffff'};
padding-top: ${this.paddingTop ? this.paddingTop : '62.5px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '62.5px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '62.5px'};
padding-right: ${this.paddingRight ? this.paddingRight : '62.5px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'center'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.test {
flex-basis:  ${this.testFlexBasis ? this.testFlexBasis : '100%'};
color: ${this.testBackgroundColor ? this.testBackgroundColor : '#000000'};
font-size: ${this.testFontSize ? this.testFontSize : '0.8805068731307983rem'};
font-family: ${this.testFontFamily ? this.testFontFamily : 'Roboto'};
font-weight: ${this.testFontWeight ? this.testFontWeight : '400'};
text-align: ${this.testTextAlign ? this.testTextAlign : 'left'};
}


            </style> 
            <p class="test">
   ${this.testText ? this.testText : 'test'}
</p>

        `;
    }
};
__decorate([
    property({ type: String })
], testTest.prototype, "externalStyleSheet", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "width", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "height", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testFlexBasis", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testWidth", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testHeight", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testBorderRadius", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testGap", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testFlexDirection", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testFontSize", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testFontFamily", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testFontWeight", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testTextAlign", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testText", void 0);
testTest = __decorate([
    customElement('test-test')
], testTest);
export { testTest };
// NOT GENERATED CODE
