var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var testCompMap = new Map();
var textBoxMap = new Map();
var titleMap = new Map();
var BrödtextMap = new Map();
var hildaMap = new Map();
testCompMap.set('display', 'flex');
testCompMap.set('width', 'calc(256px - 20px)');
testCompMap.set('height', 'calc(94px - 20px)');
testCompMap.set('border-radius', '14px');
testCompMap.set('gap', '10px');
testCompMap.set('flex-direction', 'row');
testCompMap.set('background-color', '#2f7c81');
testCompMap.set('padding-top', '10px');
testCompMap.set('padding-left', '10px');
testCompMap.set('padding-bottom', '10px');
testCompMap.set('padding-right', '10px');
testCompMap.set('align-items', 'center');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '44.140625%');
textBoxMap.set('width', 'calc(44% - 7px)');
textBoxMap.set('height', 'calc(79% - 7px)');
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('padding-top', '3.5px');
textBoxMap.set('padding-left', '3.5px');
textBoxMap.set('padding-bottom', '3.5px');
textBoxMap.set('padding-right', '3.5px');
titleMap.set('flex-basis', '39.189189189189186%');
titleMap.set('color', '#ffe7e7');
titleMap.set('font-size', '1.5rem');
titleMap.set('font-family', 'Montserrat');
titleMap.set('font-weight', '600');
titleMap.set('text-align', 'left');
BrödtextMap.set('flex-basis', '20.27027027027027%');
BrödtextMap.set('color', '#000000');
BrödtextMap.set('font-size', '0.75rem');
BrödtextMap.set('font-family', 'Montserrat');
BrödtextMap.set('font-weight', '400');
BrödtextMap.set('text-align', 'left');
hildaMap.set('flex-basis', '44.140625%');
hildaMap.set('width', '44%');
hildaMap.set('height', '79%');
hildaMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/22bd/2d41/d562fe02234f42c2e2efa41c3c3e240c?Expires=1618790400&Signature=RdqpcCpP1k-Cv9fYR-ZqWN-pA3l7Km8giA-xvPzNLPqzpExrYAQGO9CEcmxpGozPotCeEFdPz~LO~nkG51Grgrz5ZdR~x1Z7HEhLaGBxTJoQLWT38MLZGyGxQ-2yS8gobijRoACBfoC4MGOeFcYcJB00VZYguALqB88V6cAlxlj3BnQ45QNklpmtllyhzd5pHF1WpDkwpEW4cl6kA8GtEC9vQGVZUHWG~D3txyn6rMzWH1xMFiF4Eq3EuTXPVOUnVxVPsM28DQ9e1WYeL2eSQtHqF9Dca~~ZpdfLe1Of8vq8eQgFMWO91Owhh4iQTeT0o6YCG-wWxAN~Z-FEz08SMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
hildaMap.set('background-size', 'cover');
hildaMap.set('background-repeat', 'no-repeat');
let testComp = class testComp extends LitElement {
    constructor() {
        super(...arguments);
        this.testComp = '';
        this.textBox = '';
        this.title = '';
        this.Brödtext = '';
        this.hilda = '';
        this.titleText = '';
        this.BrödtextText = '';
        this.propertyToMap = (cssRules, property) => {
            var rules = property.split(';');
            rules.forEach((rule) => {
                // removes all whitespaces that is more than one whitespace
                rule = rule.replace(/ss+/g, ' ');
                var key = rule.split(': ')[0];
                var value = rule.split(': ')[1];
                key = key.trim();
                if (cssRules.has(key)) {
                    cssRules.delete(key);
                }
                cssRules.set(key, value);
            });
        };
        this.renderCssString = (cssRules, property) => {
            if (property) {
                var mapCopy = new Map();
                for (let [key, value] of cssRules) {
                    mapCopy.set(key, value);
                }
                this.propertyToMap(mapCopy, property);
                var cssString = '';
                for (let [key, value] of mapCopy.entries()) {
                    cssString += `${key}: ${value};\n`;
                }
                return cssString;
            }
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
${this.renderCssString(testCompMap, this.testComp)};
}
.textBox {
${this.renderCssString(textBoxMap, this.textBox)};
}
.title {
${this.renderCssString(titleMap, this.title)};
}
.Brödtext {
${this.renderCssString(BrödtextMap, this.Brödtext)};
}
.hilda {
${this.renderCssString(hildaMap, this.hilda)};
}

            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText ? this.titleText : 'Title'}
</p>
<p class="Brödtext">
   ${this.BrödtextText ? this.BrödtextText : 'Brödtext'}
</p>
</div>
<div class="hilda">
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], testComp.prototype, "testComp", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "textBox", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "title", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtext", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "hilda", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], testComp.prototype, "Br\u00F6dtextText", void 0);
testComp = __decorate([
    customElement('test-comp')
], testComp);
export { testComp };
// NOT GENERATED CODE
