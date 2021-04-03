import { LitElement, html, customElement, property, css } from 'lit-element';
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

@customElement('project-card')
export class projectCard extends LitElement {
    @property({ type: String })
    projectCard = '';

    @property({ type: String })
    textBox = '';

    @property({ type: String })
    imgBox = '';

    @property({ type: String })
    title = '';

    @property({ type: String })
    description = '';

    @property({ type: String })
    ImgFigma = '';

    @property({ type: String })
    ImgLit = '';

    @property({ type: String })
    ImgTypeScript = '';

    propertyToMap = (cssRules: Map<string, string>, property: string) => {
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
    renderCssString = (cssRules: Map<string, string>, property: string): string => {
        this.propertyToMap(cssRules, property);
        var cssString = '';
        for (let [key, value] of cssRules.entries()) {
            cssString += key + ': ' + value + ';\n';
        }
        return cssString;
    };

    render() {
        return html`
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
}
// NOT GENERATED CODE
