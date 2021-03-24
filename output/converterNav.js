var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let converterNav = class converterNav extends LitElement {
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
width: ${this.width ? `calc(${this.width} - 58px)` : '1387px'};
height: ${this.height ? `calc(${this.height} - 46px)` : '82px'};
gap: ${this.gap ? this.gap : '40px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'row'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#5da5aa'};
padding-top: ${this.paddingTop ? this.paddingTop : '23px'};
padding-left: ${this.paddingLeft ? this.paddingLeft : '29px'};
padding-bottom: ${this.paddingBottom ? this.paddingBottom : '23px'};
padding-right: ${this.paddingRight ? this.paddingRight : '29px'};
justify-content: ${this.justifyContent ? this.justifyContent : 'flex-end'};
align-items: ${this.alignItems ? this.alignItems : 'center'};
}


            </style> 
            <slot>
</slot>
<slot>
</slot>
<slot>
</slot>

        `;
    }
};
__decorate([
    property({ type: String })
], converterNav.prototype, "width", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "height", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], converterNav.prototype, "alignItems", void 0);
converterNav = __decorate([
    customElement('converter-nav')
], converterNav);
export { converterNav };
// NOT GENERATED CODE
