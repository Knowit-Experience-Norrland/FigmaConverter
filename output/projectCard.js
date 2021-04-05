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
var imgBoxMap = new Map();
var ImgFigmaMap = new Map();
var ImgTypescriptMap = new Map();
var ImgLitMap = new Map();
projectCardMap.set('display', 'flex');
projectCardMap.set('width', '320px');
projectCardMap.set('height', '130px');
projectCardMap.set('gap', '7.5px');
projectCardMap.set('flex-direction', 'row');
projectCardMap.set('background-color', '#ffffff');
projectCardMap.set('align-items', 'center');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '68.75%');
textBoxMap.set('width', 'calc(69% - 20px)');
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
imgBoxMap.set('display', 'flex');
imgBoxMap.set('flex-basis', '28.749999999999996%');
imgBoxMap.set('width', 'calc(29% - 20px)');
imgBoxMap.set('height', 'calc(100% - 20px)');
imgBoxMap.set('gap', '1.5px');
imgBoxMap.set('flex-direction', 'column');
imgBoxMap.set('padding-top', '10px');
imgBoxMap.set('padding-left', '10px');
imgBoxMap.set('padding-bottom', '10px');
imgBoxMap.set('padding-right', '10px');
imgBoxMap.set('justify-content', 'center');
imgBoxMap.set('align-items', 'center');
ImgFigmaMap.set('flex-basis', '41.53846153846154%');
ImgFigmaMap.set('width', '45%');
ImgFigmaMap.set('height', '42%');
ImgFigmaMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/7a5e/68bb/8f069453d630bb766d67b40ce777054e?Expires=1618790400&Signature=ThU4gMWtLfIK~2414y79F-GMidjDOv4JH7DZLGCUEYXCIwMd4l37dU0WPor1mPoxTEHgoYOa6THJcT0ETwG0idDhRDhy85NN6-p5P4Dw7aMonrfYRDhPMeEBzb-OaO5aXvQIJey18oum5dmzGf3ThuII3ffFimvv-iJkjtfIpsakVyl41t~A8LvtQYI3hpdh25p9ULqhM2DOhbBF~y7Eht2XXKgZBs6o5a02z5lYAS7K59DdrK-3ZaI9CGQp0T7VTfzAuhwRNo7A5tFo-at58lepMuBo9j3GGSBsQcJSz7pEZTT7UjnjVrsEKpDgDXMnDKF5sGN~pAtvZZpwWHFSpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgFigmaMap.set('background-size', 'cover');
ImgFigmaMap.set('background-repeat', 'no-repeat');
ImgTypescriptMap.set('flex-basis', '26.923076923076923%');
ImgTypescriptMap.set('width', '38%');
ImgTypescriptMap.set('height', '27%');
ImgTypescriptMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/a9e5/ef51/0b44b85b5238036c332fde31edeaf5f9?Expires=1618790400&Signature=Vmnfk81MO1Ss5vq1MAzplpJKFkgFrTaBtoaS75gBaQnCfpt2P4eWhqfCXwsar-xY1vCYVlOjFRGuwlcZoAo-rvsMpMXmUwGmbVi9KUNNLYFoJCpyVtQEmZJyWLvDOx~uxND~aG6-8BBjV25AsUpDQS5I5VckF1RDyQ1Qp-Td43R9OZnjzhc6Y58MAaMsriJme~uV7pZLh0LdmbkMs~oEpiT1aTRZ644O7CiPj8ge2Ecjhab04~7m97dTzRUh~PtbZmaEJMUOZO1VoMhmlkYB254zhQuKtJMi1hxbSTk2EOaoK4feHb9slbTk7Jpb7LeGEuiteXOpqrjl0UNwNE7Qyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgTypescriptMap.set('background-size', 'cover');
ImgTypescriptMap.set('background-repeat', 'no-repeat');
ImgLitMap.set('flex-basis', '20%');
ImgLitMap.set('width', '62%');
ImgLitMap.set('height', '20%');
ImgLitMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/5ca4/c0ea/216205032c86f406ef729e730356bf9c?Expires=1618790400&Signature=QizLh3juF0pYzecqdfjBph45cANoK3p3WJ5DzYcX7UuBEmW2UsxuRJ5I813g7RHJvhObQTKzHsk35YdZFx9HXn8eKG02xPWv4EJe-FhpJgXrYKb3eonQI8wv8iYa9qioqPUgtWZMQ9dYp9SxARjKlHj0iDCPKgZqRT3QNgDsksk-3q9u4PfKLfmHqcPRi4-PzNzCWlcYDtR1lhCM7xjIN2VJiPJOuLU~IK66J8ETGE0vt8pn-UipKQS0aIN2UuK-jntgwGZEdMFyjB4SMRs-uGjc~YTQVWcsWhiuDsRMIKSUWiSe1pzUsrDoBk7vcQCGAMca~O4OhVld0h2yNG0Wsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgLitMap.set('background-size', 'cover');
ImgLitMap.set('background-repeat', 'no-repeat');
let projectCard = class projectCard extends LitElement {
    constructor() {
        super(...arguments);
        this.projectCard = '';
        this.textBox = '';
        this.title = '';
        this.description = '';
        this.imgBox = '';
        this.ImgFigma = '';
        this.ImgTypescript = '';
        this.ImgLit = '';
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
   ${this.titleText ? this.titleText : 'FigmaConverter'}
</p>
<p class="description">
   ${this.descriptionText ? this.descriptionText : 'Ett verktyg som jag utvecklade under mitt examensarbete'}
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
projectCard = __decorate([
    customElement('project-card')
], projectCard);
export { projectCard };
// NOT GENERATED CODE
