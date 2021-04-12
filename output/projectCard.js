var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var projectCardMap = new Map();
var textBoxMap = new Map();
var titleMap = new Map();
var descriptionMap = new Map();
var textBoxOpenMap = new Map();
var openTitleMap = new Map();
var openDescriptionMap = new Map();
var imgBoxMap = new Map();
var ImgFigmaMap = new Map();
var ImgTypescriptMap = new Map();
var ImgLitMap = new Map();
projectCardMap.set('display', 'flex');
projectCardMap.set('width', '556px');
projectCardMap.set('height', '130px');
projectCardMap.set('gap', '7.5px');
projectCardMap.set('flex-direction', 'row');
projectCardMap.set('background-color', '#ffffff');
projectCardMap.set('align-items', 'center');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '39.568345323741006%');
textBoxMap.set('width', 'calc(40% - 20px)');
textBoxMap.set('height', 'calc(100% - 28px)');
textBoxMap.set('border-radius', ' 0px 15px 15px 0px');
textBoxMap.set('gap', '8px');
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('background-color', '#e75d10');
textBoxMap.set('padding-top', '14px');
textBoxMap.set('padding-left', '10px');
textBoxMap.set('padding-bottom', '14px');
textBoxMap.set('padding-right', '10px');
titleMap.set('flex-basis', '16.923076923076923%');
titleMap.set('color', '#f5fdff');
titleMap.set('font-size', '1.125rem');
titleMap.set('font-family', 'Montserrat');
titleMap.set('font-weight', '400');
titleMap.set('text-align', 'left');
descriptionMap.set('flex-basis', '55.38461538461539%');
descriptionMap.set('color', '#f5fdff');
descriptionMap.set('font-size', '0.75rem');
descriptionMap.set('font-family', 'Montserrat');
descriptionMap.set('font-weight', '400');
descriptionMap.set('text-align', 'left');
textBoxOpenMap.set('display', 'flex');
textBoxOpenMap.set('flex-basis', '35.97122302158273%');
textBoxOpenMap.set('width', 'calc(36% - 20px)');
textBoxOpenMap.set('height', 'calc(100% - 20px)');
textBoxOpenMap.set('gap', '10px');
textBoxOpenMap.set('flex-direction', 'column');
textBoxOpenMap.set('padding-top', '10px');
textBoxOpenMap.set('padding-left', '10px');
textBoxOpenMap.set('padding-bottom', '10px');
textBoxOpenMap.set('padding-right', '10px');
openTitleMap.set('flex-basis', '16.923076923076923%');
openTitleMap.set('color', '#050505');
openTitleMap.set('font-size', '1.125rem');
openTitleMap.set('font-family', 'Montserrat');
openTitleMap.set('font-weight', '600');
openTitleMap.set('text-align', 'left');
openDescriptionMap.set('flex-basis', '57.692307692307686%');
openDescriptionMap.set('color', '#000000');
openDescriptionMap.set('font-size', '0.75rem');
openDescriptionMap.set('font-family', 'Montserrat');
openDescriptionMap.set('font-weight', '400');
openDescriptionMap.set('text-align', 'left');
imgBoxMap.set('display', 'flex');
imgBoxMap.set('flex-basis', '21.762589928057555%');
imgBoxMap.set('width', '22%');
imgBoxMap.set('height', '100%');
imgBoxMap.set('gap', '1.5px');
imgBoxMap.set('flex-direction', 'column');
imgBoxMap.set('justify-content', 'center');
imgBoxMap.set('align-items', 'center');
ImgFigmaMap.set('flex-basis', '41.53846153846154%');
ImgFigmaMap.set('width', '34%');
ImgFigmaMap.set('height', '42%');
ImgFigmaMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/7a5e/68bb/8f069453d630bb766d67b40ce777054e?Expires=1619395200&Signature=cht8mv5Tlsd7GRFl2MN0Wkp6UAG~ziuZthfe~EBvqhwcZnS269JbJxRQlnAwoMMD4xsq7-qi9PHJ~Wx3tIUr6V3TLKA47Hu74RcqVvYzNqHzr-TiiegeQ1Ti4Ikc~WaCFFzQ3t053yNrrhWzXfXroTAwnlDbQMIxAgl9Qt8xBGKAf6z299pKfb1VuGrjSO8TpZ9AWjrpf5ePwj8O2Toc7K2drA6XLJoXIyYtilhkpn8C4JKSofJeD381cmx7u3rHFR7RzN7sVNZjp2NmQrtJMYPtUWX4iZcGrmPXfJaSYKuzdEzFqIoAUqRnlOAHOIo7mvzLYwPEIkEYxUurO07VtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgFigmaMap.set('background-size', 'cover');
ImgFigmaMap.set('background-repeat', 'no-repeat');
ImgTypescriptMap.set('flex-basis', '26.923076923076923%');
ImgTypescriptMap.set('width', '29%');
ImgTypescriptMap.set('height', '27%');
ImgTypescriptMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/a9e5/ef51/0b44b85b5238036c332fde31edeaf5f9?Expires=1619395200&Signature=eDbMKZ8zS7Khar5F0-DWAr-Ywal~iY8laCkH86i3SFpLU27d7p0kOC-0v1U67i0BClllrHpFiwvySgl3qpYP5-lmvbyyRHUiXGutL5yGggUtsUOoepv1kcE6slPsP-8btD8JP1qZJYRvJBr3IWSOb-1wnWfMn0~ev4e1IO9x3abujpkl7NVN8t3E0y3ls3qXz4JdfNQWHPti6Z6HapUVLgjP3vJIO6XlE7EIYo3noSCK2v9-4V65IAk5AQ4EprjuQm6sQSgEDruFWWzH5jLnZfwFHqsBG0Cie7jMuJhRp6KbHmkmufKHDlJzcggvfwq780H8T9PW10W3l38wQipOCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgTypescriptMap.set('background-size', 'cover');
ImgTypescriptMap.set('background-repeat', 'no-repeat');
ImgLitMap.set('flex-basis', '20%');
ImgLitMap.set('width', '47%');
ImgLitMap.set('height', '20%');
ImgLitMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/5ca4/c0ea/216205032c86f406ef729e730356bf9c?Expires=1619395200&Signature=JFv9qYXYNnjmzZ619EOwZ0eeR87Dsk735-TH4DOdhXCRECeOTPJjHY97h7nZ1RDjVVHRvy5ZIvbkwB8mK9ZyctvuKnXITnNjU3R7Wn8D209OlftqCbgV-eODPTbcrh8c9Aj40Lc4qZmCCv6eCHiI03qpAjMoZAi4njCxLieuFu~RtU1iCD35L5uAOQrjdk7S-EH8HTxQOmqQsbGd5sesFJZI1iL5EFkwyeom8u1B3KmeADuV6ev7JvZ6nc6JPfRQmrM1S-kRG10sAURPZZBqxv9lirwlvGlY7o7WqR-MNdvbW0XZJU7rJuwXYb~KsEHktlRLy2rsBD3cgVdRaeA8pA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgLitMap.set('background-size', 'cover');
ImgLitMap.set('background-repeat', 'no-repeat');
let projectCard = class projectCard extends LitElement {
    constructor() {
        super(...arguments);
        this.projectCard = '';
        this.textBox = '';
        this.title = '';
        this.description = '';
        this.textBoxOpen = '';
        this.openTitle = '';
        this.openDescription = '';
        this.imgBox = '';
        this.ImgFigma = '';
        this.ImgTypescript = '';
        this.ImgLit = '';
        this.titleText = '';
        this.descriptionText = '';
        this.openTitleText = '';
        this.openDescriptionText = '';
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
${this.renderCssString(projectCardMap, this.projectCard)};
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
.textBoxOpen {
${this.renderCssString(textBoxOpenMap, this.textBoxOpen)};
}
.openTitle {
${this.renderCssString(openTitleMap, this.openTitle)};
}
.openDescription {
${this.renderCssString(openDescriptionMap, this.openDescription)};
}
.imgBox {
${this.renderCssString(imgBoxMap, this.imgBox)};
}
.ImgFigma {
${this.renderCssString(ImgFigmaMap, this.ImgFigma)};
}
.ImgTypescript {
${this.renderCssString(ImgTypescriptMap, this.ImgTypescript)};
}
.ImgLit {
${this.renderCssString(ImgLitMap, this.ImgLit)};
}

            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText ? this.titleText : `FigmaConverter`}
</p>
<p class="description">
   ${this.descriptionText ? this.descriptionText : `Ett verktyg som jag utvecklade under mitt examensarbete`}
</p>
</div>
<div class="textBoxOpen">
<p class="openTitle">
   ${this.openTitleText ? this.openTitleText : `FigmaConverter`}
</p>
<p class="openDescription">
   ${this.openDescriptionText ? this.openDescriptionText : `Under mitt exjobb så fick jag möjligheten att bygga ett verktyg som byggde upp web-komponeter med hjälp av figmas API. `}
</p>
</div>
<div class="imgBox">
<div class="ImgFigma">
</div>
<div class="ImgTypescript">
</div>
<div class="ImgLit">
</div>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], projectCard.prototype, "projectCard", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "textBox", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "title", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "description", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "textBoxOpen", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "openTitle", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "openDescription", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "imgBox", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "ImgFigma", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "ImgTypescript", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "ImgLit", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "descriptionText", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "openTitleText", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "openDescriptionText", void 0);
projectCard = __decorate([
    customElement('project-card')
], projectCard);
export { projectCard };
// NOT GENERATED CODE
