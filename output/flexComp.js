var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let flexComp = class flexComp extends LitElement {
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
        this.leftFlexBasis = '';
        this.leftWidth = '';
        this.leftHeight = '';
        this.leftBorderRadius = '';
        this.leftGap = '';
        this.leftFlexDirection = '';
        this.leftBackgroundColor = '';
        this.leftBackgroundImage = '';
        this.leftBackgroundSize = '';
        this.leftBackgroundRepeat = '';
        this.leftPaddingTop = '';
        this.leftPaddingLeft = '';
        this.leftPaddingBottom = '';
        this.leftPaddingRight = '';
        this.leftJustifyContent = '';
        this.leftAlignItems = '';
        this.middleFlexBasis = '';
        this.middleWidth = '';
        this.middleHeight = '';
        this.middleBorderRadius = '';
        this.middleGap = '';
        this.middleFlexDirection = '';
        this.middleBackgroundColor = '';
        this.middleBackgroundImage = '';
        this.middleBackgroundSize = '';
        this.middleBackgroundRepeat = '';
        this.middlePaddingTop = '';
        this.middlePaddingLeft = '';
        this.middlePaddingBottom = '';
        this.middlePaddingRight = '';
        this.middleJustifyContent = '';
        this.middleAlignItems = '';
        this.rightFlexBasis = '';
        this.rightWidth = '';
        this.rightHeight = '';
        this.rightBorderRadius = '';
        this.rightGap = '';
        this.rightFlexDirection = '';
        this.rightBackgroundColor = '';
        this.rightBackgroundImage = '';
        this.rightBackgroundSize = '';
        this.rightBackgroundRepeat = '';
        this.rightPaddingTop = '';
        this.rightPaddingLeft = '';
        this.rightPaddingBottom = '';
        this.rightPaddingRight = '';
        this.rightJustifyContent = '';
        this.rightAlignItems = '';
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
width: ${this.width ? `calc(${this.width} - 60px)` : '757px'};
height: ${this.height ? `calc(${this.height} - 60px)` : '209px'};
border-radius: ${this.borderRadius ? this.borderRadius : '35px'};
gap: ${this.gap ? this.gap : '30px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#0e359a'};
padding-top: ${this.paddingTop ? this.paddingTop : '30px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '30px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '30px'};
padding-right: ${this.paddingRight ? this.paddingRight : '30px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'center'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.left {
flex-basis:  ${this.leftFlexBasis ? this.leftFlexBasis : '30.647291941875825%'};
width: 100%;
height: 100%;
background-color: ${this.leftBackgroundColor ? this.leftBackgroundColor : '#e1e1e1'};
}

.middle {
flex-basis:  ${this.middleFlexBasis ? this.middleFlexBasis : '30.647291941875825%'};
width: 100%;
height: 100%;
background-color: ${this.middleBackgroundColor ? this.middleBackgroundColor : '#447d50'};
}

.right {
flex-basis:  ${this.rightFlexBasis ? this.rightFlexBasis : '30.647291941875825%'};
width: 100%;
height: 100%;
background-color: ${this.rightBackgroundColor ? this.rightBackgroundColor : '#66e983'};
}


            </style> 
            <div class="left">
</div>
<div class="middle">
</div>
<div class="right">
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], flexComp.prototype, "width", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "height", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftFlexBasis", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftWidth", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftHeight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftBorderRadius", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftGap", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftFlexDirection", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftBackgroundColor", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftBackgroundImage", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftBackgroundSize", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftPaddingTop", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftPaddingLeft", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftPaddingBottom", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftPaddingRight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftJustifyContent", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "leftAlignItems", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleFlexBasis", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleWidth", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleHeight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleBorderRadius", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleGap", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleFlexDirection", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleBackgroundImage", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleBackgroundSize", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middlePaddingTop", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middlePaddingLeft", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middlePaddingBottom", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middlePaddingRight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleJustifyContent", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "middleAlignItems", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightFlexBasis", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightWidth", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightHeight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightBorderRadius", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightGap", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightFlexDirection", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightBackgroundColor", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightBackgroundImage", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightBackgroundSize", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightPaddingTop", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightPaddingLeft", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightPaddingBottom", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightPaddingRight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightJustifyContent", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "rightAlignItems", void 0);
flexComp = __decorate([
    customElement('flex-comp')
], flexComp);
export { flexComp };
// NOT GENERATED CODE
