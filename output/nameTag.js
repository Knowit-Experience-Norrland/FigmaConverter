var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var nameTagMap = new Map();
var imgMap = new Map();
var textBoxMap = new Map();
var titleBoxMap = new Map();
var nameMap = new Map();
var subBoxMap = new Map();
var descriptionMap = new Map();
nameTagMap.set('display', 'flex');
nameTagMap.set('width', '480px');
nameTagMap.set('height', '116px');
nameTagMap.set('flex-direction', 'row');
imgMap.set('flex-basis', '24.166666666666668%');
imgMap.set('width', '24%');
imgMap.set('height', '100%');
imgMap.set('border-radius', '50%');
imgMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/eef5/7561/45407980a3de4d17ad939880d89ad77b?Expires=1618790400&Signature=WHs0EquQp5Mi5lLFAfHSuallWX~zikWQ-y-7~ReihI40pBAFIGPZCkQWB2MaVFiEDqWTzlb4fr-qRWS~9NDJhBZ~CY30VxysljBi0iZMhvTE6eh5YSgkbT-TSPoQdDlJkDhfpy9LBOr7PBXDZUVmMn6wrNY34evi2P7KjltyVUB63uVC-sFNASj3911fwT0sgMBBUYU~sG~QXUpSn45b9~bJkA0sgmmdcJhWnQsfhv7270MSVmVgLn0yxPYud0lq1fYlgQTPhUZT4Ax~whfLTWUgBDTAyChhlEGeLbhXtQd2cfznYwPMVqj23YE8YRUjJ7LE1qkGbBMbGsmkCo78Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
imgMap.set('background-size', 'cover');
imgMap.set('background-repeat', 'no-repeat');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '75.83333333333333%');
textBoxMap.set('width', '76%');
textBoxMap.set('height', '100%');
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('justify-content', 'flex-end');
titleBoxMap.set('display', 'flex');
titleBoxMap.set('flex-basis', '46.55172413793103%');
titleBoxMap.set('width', 'calc(100% - 175px)');
titleBoxMap.set('height', 'calc(47% - 20px)');
titleBoxMap.set('border-radius', ' 0px 30px 30px 0px');
titleBoxMap.set('gap', '10px');
titleBoxMap.set('flex-direction', 'row');
titleBoxMap.set('background-color', '#3d697c');
titleBoxMap.set('padding-top', '10px');
titleBoxMap.set('padding-left', '70px');
titleBoxMap.set('padding-bottom', '10px');
titleBoxMap.set('padding-right', '105px');
titleBoxMap.set('justify-content', 'center');
titleBoxMap.set('align-items', 'center');
nameMap.set('flex-basis', '44.230769230769226%');
nameMap.set('color', '#ffffff');
nameMap.set('font-size', '2.1622514724731445rem');
nameMap.set('font-family', 'Roboto');
nameMap.set('font-weight', '400');
nameMap.set('text-align', 'left');
subBoxMap.set('display', 'flex');
subBoxMap.set('flex-basis', '31.03448275862069%');
subBoxMap.set('width', 'calc(80% - 98px)');
subBoxMap.set('height', 'calc(31% - 22px)');
subBoxMap.set('border-radius', ' 0px 20px 20px 0px');
subBoxMap.set('flex-direction', 'row');
subBoxMap.set('background-color', '#598ea4');
subBoxMap.set('padding-top', '11px');
subBoxMap.set('padding-left', '70px');
subBoxMap.set('padding-bottom', '11px');
subBoxMap.set('padding-right', '28px');
subBoxMap.set('justify-content', 'center');
subBoxMap.set('align-items', 'center');
descriptionMap.set('flex-basis', '56.655290102389074%');
descriptionMap.set('color', '#ffffff');
descriptionMap.set('font-size', '0.75rem');
descriptionMap.set('font-family', 'Roboto');
descriptionMap.set('font-weight', '400');
descriptionMap.set('text-align', 'left');
let nameTag = class nameTag extends LitElement {
    constructor() {
        super(...arguments);
        this.nameTag = '';
        this.img = '';
        this.textBox = '';
        this.titleBox = '';
        this.name = '';
        this.subBox = '';
        this.description = '';
        this.nameText = '';
        this.descriptionText = '';
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
${this.renderCssString(nameTagMap, this.nameTag)};
}
.img {
${this.renderCssString(imgMap, this.img)};
}
.textBox {
${this.renderCssString(textBoxMap, this.textBox)};
}
.titleBox {
${this.renderCssString(titleBoxMap, this.titleBox)};
}
.name {
${this.renderCssString(nameMap, this.name)};
}
.subBox {
${this.renderCssString(subBoxMap, this.subBox)};
}
.description {
${this.renderCssString(descriptionMap, this.description)};
}

            </style> 
            <div class="img">
</div>
<div class="textBox">
<div class="titleBox">
<p class="name">
   ${this.nameText ? this.nameText : 'Albin Frick'}
</p>
</div>
<div class="subBox">
<p class="description">
   ${this.descriptionText ? this.descriptionText : ' M.Sc in Interaction and Design'}
</p>
</div>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], nameTag.prototype, "nameTag", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "img", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "textBox", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "titleBox", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "name", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "subBox", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "description", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "nameText", void 0);
__decorate([
    property({ type: String })
], nameTag.prototype, "descriptionText", void 0);
nameTag = __decorate([
    customElement('name-tag')
], nameTag);
export { nameTag };
// NOT GENERATED CODE
