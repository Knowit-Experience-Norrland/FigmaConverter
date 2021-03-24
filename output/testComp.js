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
        this.Frame1Width = '';
        this.Frame1Height = '';
        this.Frame1BorderRadius = '';
        this.Frame1Flex = '';
        this.Frame1Gap = '';
        this.Frame1FlexDirection = '';
        this.Frame1BackgroundColor = '';
        this.Frame1PaddingTop = '';
        this.Frame1PaddingLeft = '';
        this.Frame1PaddingBottom = '';
        this.Frame1PaddingRight = '';
        this.Frame1JustifyContent = '';
        this.Frame1AlignItems = '';
        this.TitleWidth = '';
        this.TitleHeight = '';
        this.TitleBorderRadius = '';
        this.TitleFlex = '';
        this.TitleGap = '';
        this.TitleFlexDirection = '';
        this.TitleBackgroundColor = '';
        this.TitleFontSize = '';
        this.TitleFontFamily = '';
        this.TitleFontWeight = '';
        this.TitleLetterSpacing = '';
        this.BrödtextWidth = '';
        this.BrödtextHeight = '';
        this.BrödtextBorderRadius = '';
        this.BrödtextFlex = '';
        this.BrödtextGap = '';
        this.BrödtextFlexDirection = '';
        this.BrödtextBackgroundColor = '';
        this.BrödtextFontSize = '';
        this.BrödtextFontFamily = '';
        this.BrödtextFontWeight = '';
        this.BrödtextLetterSpacing = '';
        this.squareWidth = '';
        this.squareHeight = '';
        this.squareBorderRadius = '';
        this.squareFlex = '';
        this.squareGap = '';
        this.squareFlexDirection = '';
        this.squareBackgroundColor = '';
        this.squarePaddingTop = '';
        this.squarePaddingLeft = '';
        this.squarePaddingBottom = '';
        this.squarePaddingRight = '';
        this.squareJustifyContent = '';
        this.squareAlignItems = '';
        this.TitleText = '';
        this.BrödtextText = '';
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

.Frame1 {
display: flex;
width: ${this.Frame1Width ? this.Frame1Width : '48%'};
height: ${this.Frame1Height ? this.Frame1Height : '100%'};
flex: ${this.Frame1Flex ? this.Frame1Flex : '1'};
flex-direction: ${this.Frame1FlexDirection ? this.Frame1FlexDirection : 'column'};
justify-content: ${this.Frame1JustifyContent ? this.Frame1JustifyContent : 'flex-end'};
}

.Title {
color: ${this.TitleBackgroundColor ? this.TitleBackgroundColor : '#ffe7e7'};
font-size: ${this.TitleFontSize ? this.TitleFontSize : '1.5rem'};
font-family: ${this.TitleFontFamily ? this.TitleFontFamily : 'Montserrat'};
font-weight: ${this.TitleFontWeight ? this.TitleFontWeight : '600'};
letter-spacing: ${this.TitleLetterSpacing ? this.TitleLetterSpacing : '0'};
}

.Brödtext {
color: ${this.BrödtextBackgroundColor ? this.BrödtextBackgroundColor : '#000000'};
font-size: ${this.BrödtextFontSize ? this.BrödtextFontSize : '0.75rem'};
font-family: ${this.BrödtextFontFamily ? this.BrödtextFontFamily : 'Montserrat'};
font-weight: ${this.BrödtextFontWeight ? this.BrödtextFontWeight : '400'};
letter-spacing: ${this.BrödtextLetterSpacing ? this.BrödtextLetterSpacing : '0'};
}

.square {
width: ${this.squareWidth ? this.squareWidth : '48%'};
height: ${this.squareHeight ? this.squareHeight : '100%'};
flex: ${this.squareFlex ? this.squareFlex : '1'};
background-color: ${this.squareBackgroundColor ? this.squareBackgroundColor : '#c5c5c5'};
}


            </style> 
            <div class="Frame1">
<p class="Title">
   ${this.TitleText ? this.TitleText : 'Title'}
</p>
<p class="Brödtext">
   ${this.BrödtextText ? this.BrödtextText : 'Brödtext'}
</p>
</div>
<div class="square">
</div>

        `;
    }
};
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
], testComp.prototype, "flex", void 0);
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
], testComp.prototype, "Frame1Width", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1Height", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1BorderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1Flex", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1Gap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1FlexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1BackgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1PaddingTop", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1PaddingLeft", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1PaddingBottom", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1PaddingRight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1JustifyContent", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Frame1AlignItems", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleWidth", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleBorderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleFlex", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleGap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleFlexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleFontSize", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleFontFamily", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleFontWeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleLetterSpacing", void 0);
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
], testComp.prototype, "Br\u00F6dtextFlex", void 0);
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
], testComp.prototype, "squareWidth", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareHeight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareBorderRadius", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareFlex", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareGap", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareFlexDirection", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareBackgroundColor", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squarePaddingTop", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squarePaddingLeft", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squarePaddingBottom", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squarePaddingRight", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareJustifyContent", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "squareAlignItems", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "TitleText", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextText", void 0);
testComp = __decorate([
    customElement('test-comp')
], testComp);
export { testComp };
// NOT GENERATED CODE
