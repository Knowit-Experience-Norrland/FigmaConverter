var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var textBoxMap = new Map();
var imgBoxMap = new Map();
var projectCardMap = new Map();
var ImgFigmaMap = new Map();
var ImgLitMap = new Map();
var ImgTypeScriptMap = new Map();
var titleMap = new Map();
var descriptionMap = new Map();
textBoxMap.set('width', '50%');
textBoxMap.set('background-color', 'var(--color-light)');
projectCardMap.set('display', 'flex');
projectCardMap.set('width', '320px');
projectCardMap.set('height', '130px');
projectCardMap.set('gap', '7.5px');
projectCardMap.set('flex-direction', 'row');
projectCardMap.set('background-color', '#ffffff');
projectCardMap.set('align-items', 'center');
let projectCard = class projectCard extends LitElement {
    constructor() {
        super(...arguments);
        this.projectCard = '';
        this.textBox = '';
        this.imgBox = '';
        this.title = '';
        this.description = '';
        this.ImgFigma = '';
        this.ImgLit = '';
        this.ImgTypeScript = '';
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
                cssString += `${key} : ${value};\n`;
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
                    ${this.renderCssString(ImgTypeScriptMap, this.ImgTypeScript)};

                }

                .ImgLit {
                    ${this.renderCssString(ImgLitMap, this.ImgLit)};

                }
            </style>
            <div class="textBox">
                <p class="title">FigmaConverter</p>
                <p class="description">
                    'Ett verktyg som jag utvecklade under mitt examensarbete'
                </p>
            </div>
            <div class="imgBox">
                <div class="ImgFigma"></div>
                <div class="ImgTypescript"></div>
                <div class="ImgLit"></div>
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
], projectCard.prototype, "imgBox", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "title", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "description", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "ImgFigma", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "ImgLit", void 0);
__decorate([
    property({ type: String })
], projectCard.prototype, "ImgTypeScript", void 0);
projectCard = __decorate([
    customElement('project-card')
], projectCard);
export { projectCard };
// NOT GENERATED CODE
