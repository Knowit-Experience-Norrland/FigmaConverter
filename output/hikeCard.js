var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var hikeCardMap = new Map();
var textBoxMap = new Map();
var titleMap = new Map();
var descriptionMap = new Map();
var imgBoxMap = new Map();
var imgMap = new Map();
hikeCardMap.set('display', 'flex');
hikeCardMap.set('width', '303px');
hikeCardMap.set('height', '124px');
hikeCardMap.set('border-radius', ' 0px 10px 10px 0px');
hikeCardMap.set('flex-direction', 'row');
hikeCardMap.set('background-color', '#ffffff');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '57.755775577557756%');
textBoxMap.set('width', 'calc(58% - 15px)');
textBoxMap.set('height', 'calc(100% - 15px)');
textBoxMap.set('border-radius', ' 0px 10px 10px 0px');
textBoxMap.set('gap', '10px');
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('background-color', '#b1b1b1');
textBoxMap.set('padding-top', '7.5px');
textBoxMap.set('padding-left', '7.5px');
textBoxMap.set('padding-bottom', '7.5px');
textBoxMap.set('padding-right', '7.5px');
titleMap.set('flex-basis', '23.387096774193548%');
titleMap.set('color', '#ffffff');
titleMap.set('font-size', '1.497180461883545rem');
titleMap.set('font-family', 'Montserrat');
titleMap.set('font-weight', '500');
titleMap.set('text-align', 'left');
descriptionMap.set('flex-basis', '10.483870967741936%');
descriptionMap.set('color', '#ffffff');
descriptionMap.set('font-size', '0.671875rem');
descriptionMap.set('font-family', 'Montserrat');
descriptionMap.set('font-weight', '400');
descriptionMap.set('text-align', 'left');
imgBoxMap.set('display', 'flex');
imgBoxMap.set('flex-basis', '42.244224422442244%');
imgBoxMap.set('width', 'calc(42% - 20px)');
imgBoxMap.set('height', 'calc(100% - 20px)');
imgBoxMap.set('gap', '10px');
imgBoxMap.set('flex-direction', 'column');
imgBoxMap.set('padding-top', '10px');
imgBoxMap.set('padding-left', '10px');
imgBoxMap.set('padding-bottom', '10px');
imgBoxMap.set('padding-right', '10px');
imgMap.set('flex-basis', '83.87096774193549%');
imgMap.set('width', '84%');
imgMap.set('height', '84%');
imgMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/3aa8/f2ea/d29dd308201f67d7ee0d13780262c402?Expires=1618790400&Signature=J-FQ6U90ax2cPiegJXoRU5MOcAA7zBldkgSdAdBxK824geQdDHrED9Vr5hZcewCRdyxdgWoE5wpzVa3nbiQnfInyz6agx9EfwspjOr7Y~UOKFQTUaG9thoGzUoSgQrBAJIFllfe9U8NhHs~aRZQPbOcyhKfuekdcc1DttN5GqOOtgbRS1~poIwhKzoEKxxVToO7QScNR0bUqjo~sCyeniWzr25PXeO2fxGtys13FEao8MBgQ5~VIabJw9xFcGRQwgRFkE0ztGeHfTPvNUQ856OEqmcEDfUPbxCnpL~Ebzx1nBQuuNXF1FOcsrnfwDbNkwdilGhyCebfX2n4IA3ZOFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
imgMap.set('background-size', 'cover');
imgMap.set('background-repeat', 'no-repeat');
let hikeCard = class hikeCard extends LitElement {
    constructor() {
        super(...arguments);
        this.hikeCard = '';
        this.textBox = '';
        this.title = '';
        this.description = '';
        this.imgBox = '';
        this.img = '';
        this.titleText = '';
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
${this.renderCssString(hikeCardMap, this.hikeCard)};
}
.textBox {
${this.renderCssString(textBoxMap, this.textBox)};
}
.title {
${this.renderCssString(titleMap, this.title)};
}
.description {
${this.renderCssString(descriptionMap, this.description)};
}
.imgBox {
${this.renderCssString(imgBoxMap, this.imgBox)};
}
.img {
${this.renderCssString(imgMap, this.img)};
}

            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText ? this.titleText : 'Hiking'}
</p>
<p class="description">
   ${this.descriptionText ? this.descriptionText : 'For the one’s that like natue'}
</p>
</div>
<div class="imgBox">
<div class="img">
</div>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], hikeCard.prototype, "hikeCard", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "textBox", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "title", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "description", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "imgBox", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "img", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], hikeCard.prototype, "descriptionText", void 0);
hikeCard = __decorate([
    customElement('hike-card')
], hikeCard);
export { hikeCard };
// NOT GENERATED CODE
