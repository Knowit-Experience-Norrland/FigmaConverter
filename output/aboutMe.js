var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var aboutMeMap = new Map();
var titleMap = new Map();
var firstParagraphMap = new Map();
var secondParagraphMap = new Map();
aboutMeMap.set('display', 'flex');
aboutMeMap.set('width', 'calc(320px - 27px)');
aboutMeMap.set('height', 'calc(415px - 27px)');
aboutMeMap.set('gap', '41px');
aboutMeMap.set('flex-direction', 'column');
aboutMeMap.set('background-color', '#0c0c0c');
aboutMeMap.set('padding-top', '13.5px');
aboutMeMap.set('padding-left', '13.5px');
aboutMeMap.set('padding-bottom', '13.5px');
aboutMeMap.set('padding-right', '13.5px');
titleMap.set('flex-basis', '6.987951807228916%');
titleMap.set('color', '#f5fdff');
titleMap.set('font-size', '1.5rem');
titleMap.set('font-family', 'Montserrat');
titleMap.set('font-weight', '400');
titleMap.set('text-align', 'left');
firstParagraphMap.set('flex-basis', '33.25301204819277%');
firstParagraphMap.set('color', '#f5fdff');
firstParagraphMap.set('font-size', '0.875rem');
firstParagraphMap.set('font-family', 'Montserrat');
firstParagraphMap.set('font-weight', '400');
firstParagraphMap.set('text-align', 'left');
secondParagraphMap.set('flex-basis', '33.25301204819277%');
secondParagraphMap.set('color', '#f5fdff');
secondParagraphMap.set('font-size', '0.875rem');
secondParagraphMap.set('font-family', 'Montserrat');
secondParagraphMap.set('font-weight', '400');
secondParagraphMap.set('text-align', 'left');
let aboutMe = class aboutMe extends LitElement {
    constructor() {
        super(...arguments);
        this.aboutMe = '';
        this.title = '';
        this.firstParagraph = '';
        this.secondParagraph = '';
        this.titleText = '';
        this.firstParagraphText = '';
        this.secondParagraphText = '';
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
${this.renderCssString(aboutMeMap, this.aboutMe)};
}
.title {
${this.renderCssString(titleMap, this.title)};
}
.firstParagraph {
${this.renderCssString(firstParagraphMap, this.firstParagraph)};
}
.secondParagraph {
${this.renderCssString(secondParagraphMap, this.secondParagraph)};
}

            </style> 
            <p class="title">
   ${this.titleText ? this.titleText : 'Hej! '}
</p>
<p class="firstParagraph">
   ${this.firstParagraphText ? this.firstParagraphText : 'Albin Frick heter jag och går femte och sista året på programmet Civilingenjör för interaktion och design i Umeå. Jag är 24 år gammal och bor tillsammans med min fästmö i Umeå. Jag älskar att koda och designa nya saker. Jag är väldigt intresserad av front-end utveckling men tycker är spännande att ha en fullstack förståelse över system.'}
</p>
<p class="secondParagraph">
   ${this.secondParagraphText ? this.secondParagraphText : 'Ända sedan jag fick min första smartphone så har jag varit på jakt efter nya häftiga applikationer och hämsidor. På senare tid har sökandet gått mer över till skapande och hoppas att kunna få arbeta med detta framöver! '}
</p>

        `;
    }
};
__decorate([
    property({ type: String })
], aboutMe.prototype, "aboutMe", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "title", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraph", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraph", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "firstParagraphText", void 0);
__decorate([
    property({ type: String })
], aboutMe.prototype, "secondParagraphText", void 0);
aboutMe = __decorate([
    customElement('about-me')
], aboutMe);
export { aboutMe };
// NOT GENERATED CODE
