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
        this.paddingTop = '';
        this.paddingLeft = '';
        this.paddingBottom = '';
        this.paddingRight = '';
        this.justifyContent = '';
        this.alignItems = '';
        this.leftWidth = '';
        this.leftHeight = '';
        this.leftBorderRadius = '';
        this.leftGap = '';
        this.leftFlexDirection = '';
        this.leftBackgroundColor = '';
        this.leftPaddingTop = '';
        this.leftPaddingLeft = '';
        this.leftPaddingBottom = '';
        this.leftPaddingRight = '';
        this.leftJustifyContent = '';
        this.leftAlignItems = '';
        this.rightWidth = '';
        this.rightHeight = '';
        this.rightBorderRadius = '';
        this.rightGap = '';
        this.rightFlexDirection = '';
        this.rightBackgroundColor = '';
        this.rightPaddingTop = '';
        this.rightPaddingLeft = '';
        this.rightPaddingBottom = '';
        this.rightPaddingRight = '';
        this.rightJustifyContent = '';
        this.rightAlignItems = '';
        this.Rectangle23Width = '';
        this.Rectangle23Height = '';
        this.Rectangle23BorderRadius = '';
        this.Rectangle23Gap = '';
        this.Rectangle23FlexDirection = '';
        this.Rectangle23BackgroundColor = '';
        this.Rectangle23PaddingTop = '';
        this.Rectangle23PaddingLeft = '';
        this.Rectangle23PaddingBottom = '';
        this.Rectangle23PaddingRight = '';
        this.Rectangle23JustifyContent = '';
        this.Rectangle23AlignItems = '';
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
height: ${this.height ? `calc(${this.height} - 60px)` : '233px'};
gap: ${this.gap ? this.gap : '30px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#b8c0d6'};
padding-top: ${this.paddingTop ? this.paddingTop : '30px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '30px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '30px'};
padding-right: ${this.paddingRight ? this.paddingRight : '30px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'center'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}

.left {
width: 100%;
flex-basis:19.815059445178335%;
height: 100%;
background-color: ${this.leftBackgroundColor ? this.leftBackgroundColor : '#e1e1e1'};
}

.right {
width: 100%;
flex-basis:39.63011889035667%;
height: 100%;
background-color: ${this.rightBackgroundColor ? this.rightBackgroundColor : '#762525'};
}

.Rectangle23 {
width: 100%;
flex-basis:19.815059445178335%;
height: 100%;
background-color: ${this.Rectangle23BackgroundColor ? this.Rectangle23BackgroundColor : '#447d50'};
}


            </style> 
            <div class="left">
</div>
<div class="right">
</div>
<div class="Rectangle23">
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
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23Width", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23Height", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23BorderRadius", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23Gap", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23FlexDirection", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23BackgroundColor", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23PaddingTop", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23PaddingLeft", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23PaddingBottom", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23PaddingRight", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23JustifyContent", void 0);
__decorate([
    property({ type: String })
], flexComp.prototype, "Rectangle23AlignItems", void 0);
flexComp = __decorate([
    customElement('flex-comp')
], flexComp);
export { flexComp };
// NOT GENERATED CODE
