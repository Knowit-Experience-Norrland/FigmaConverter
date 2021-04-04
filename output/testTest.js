var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var testTestMap = new Map();
var testMap = new Map();
testTestMap.set('display', 'flex');
testTestMap.set('width', '24px');
testTestMap.set('height', '17px');
testTestMap.set('gap', '10px');
testTestMap.set('flex-direction', 'row');
testTestMap.set('background-color', '#ffffff');
testTestMap.set('padding-top', '62.5px');
testTestMap.set('padding-left', '62.5px');
testTestMap.set('padding-bottom', '62.5px');
testTestMap.set('padding-right', '62.5px');
testTestMap.set('justify-content', 'center');
testTestMap.set('align-items', 'center');
testMap.set('flex-basis', '100%');
testMap.set('width', '24px');
testMap.set('height', '17px');
testMap.set('color', '#000000');
let testTest = class testTest extends LitElement {
    constructor() {
        super(...arguments);
        this.testTest = '';
        this.test = '';
        this.testText = '';
        this.propertyToMap = (cssRules, property) => {
            if (property) {
                var rules = property.split(', ');
                rules.forEach((rule) => {
                    var key = rule.split(': ')[0];
                    var value = rule.split(': ')[1];
                    if (cssRules.has(key)) {
                        cssRules.delete(key);
                    }
                    cssRules.set(key, value);
                });
            }
        };
        this.renderCssString = (cssRules, property) => {
            this.propertyToMap(cssRules, property);
            var cssString = '';
            for (let [key, value] of cssRules.entries()) {
                cssString += `${key}: ${value};\n`;
            }
            return cssString;
        };
    }
    render() {
        return html `
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            
            :host {
${this.renderCssString(testTestMap, this.testTest)};
}
.test {
${this.renderCssString(testMap, this.test)};
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
], testTest.prototype, "testTest", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "test", void 0);
__decorate([
    property({ type: String })
], testTest.prototype, "testText", void 0);
testTest = __decorate([
    customElement('test-test')
], testTest);
export { testTest };
// NOT GENERATED CODE
