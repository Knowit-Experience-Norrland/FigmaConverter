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
textBoxMap.set('flex-basis', '62.5%');
textBoxMap.set('width', '200px');
textBoxMap.set('height', '102px');
textBoxMap.set('border-radius', ' 0px 15px 15px 0px');
textBoxMap.set('gap', '8px');
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('background-color', '#e75d10');
textBoxMap.set('padding-top', '14px');
textBoxMap.set('padding-left', '10px');
textBoxMap.set('padding-bottom', '14px');
textBoxMap.set('padding-right', '10px');
titleMap.set('flex-basis', '21.568627450980394%');
titleMap.set('width', '200px');
titleMap.set('height', '22px');
titleMap.set('color', '#f5fdff');
descriptionMap.set('flex-basis', '70.58823529411765%');
descriptionMap.set('width', '200px');
descriptionMap.set('height', '72px');
descriptionMap.set('color', '#f5fdff');
imgBoxMap.set('display', 'flex');
imgBoxMap.set('flex-basis', '22.5%');
imgBoxMap.set('width', '72.5px');
imgBoxMap.set('height', '110px');
imgBoxMap.set('gap', '1.5px');
imgBoxMap.set('flex-direction', 'column');
imgBoxMap.set('padding-top', '10px');
imgBoxMap.set('padding-left', '10px');
imgBoxMap.set('padding-bottom', '10px');
imgBoxMap.set('padding-right', '10px');
imgBoxMap.set('justify-content', 'center');
imgBoxMap.set('align-items', 'center');
ImgFigmaMap.set('flex-basis', '49.09090909090909%');
ImgFigmaMap.set('width', '41.23045349121094px');
ImgFigmaMap.set('height', '54.055477142333984px');
ImgFigmaMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/7a5e/68bb/8f069453d630bb766d67b40ce777054e?Expires=1618185600&Signature=e~6TGCt9vf1E~~x7i7jYlE5ytZRAJ5WbK25iREyTJlv2Fw3c2VWFIK5nZNE5S4DjeA7JFCh-HqCig0q~NkRfebRZ3GwOZiI-7EQJpFjuSEyTSMp3TQHLQvZVymp~-wMuhFeYtcUxvLjXPgcaf9ao7K5jj14imkhdjOGijqoU6Vs4~ZD8GK6JfLJLnLWlPMN92SN6sPEfor-9V5V~pYxfZAE5WSqyKhzRnLClat0JC0iagy6W~9X1b0wg7O0~KRB1Vq4W1rx4uVI1MRnCqZSC88fX2kfSiRe3G9utHzhWnp6uHGupgdJpEN6WfDjZjAV7sfbQ2EVsduEx83L-3XGgdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgFigmaMap.set('background-size', 'cover');
ImgFigmaMap.set('background-repeat', 'no-repeat');
ImgTypescriptMap.set('flex-basis', '31.818181818181817%');
ImgTypescriptMap.set('width', '35px');
ImgTypescriptMap.set('height', '35px');
ImgTypescriptMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/a9e5/ef51/0b44b85b5238036c332fde31edeaf5f9?Expires=1618185600&Signature=Kl7SSdP56wJhJzAZd5fTK96nGUgTm12-BpwP03lVUCXvs16iL0nx~vTN9IQZIC1QLk9~rL70gZgdUkFIGWpbY4XV6i42YWk4fLQObj2i29Ae13oc9VmgUxJKi32x77KgcR2NdefkTSr~tP0kKAhvaj3fJMVALNb2rX9CJTGh0GiX1DwmvYIYMt-jwAGMXCg~Qx10YrhZJqa3mb5~~SLyW6wO56Ol74XhJuW8tUVKG7tpkOw8BVOOcZ5~WnYBqwsQqzhOz0jvamlpBvb0kRzZX34BZsdN9oJljbJmVLJQqYPKIfJdoCpV1PZDUeLd0vBAASPdlt60tsVopY3WcFUmGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgTypescriptMap.set('background-size', 'cover');
ImgTypescriptMap.set('background-repeat', 'no-repeat');
ImgLitMap.set('flex-basis', '23.636363636363637%');
ImgLitMap.set('width', '57px');
ImgLitMap.set('height', '26px');
ImgLitMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/5ca4/c0ea/216205032c86f406ef729e730356bf9c?Expires=1618185600&Signature=gvprYE2vFEmZCUi5UPoyhUSAbXDZzaZSN9y7bz9mKmHvgOOfKYjr8sqQJlOmhv2pgMh72IFIBUcSqUvsvcN6qSbCcvimj0uYyLsRt96nF6iAAoYW23P~pEZG3RT6JYGUWsXxYhcSsNoCSKrkZvRKy910prQt0WaNo3OV0dKoeIjhn8EA-vVc0yVuJ6SeJIh88muGBHxMfITisjuu65ALE4FgBLT6igOolWm8FZfP523kJHOgod~VuU6yicG6gWS2aDcAnxMmlT2dnOfDrRnsL2FET8Zamtu7i~wTG0v-6IVWmSC9NkbAMpYxAaEkpjFfjH62LErmpU5IHs7q-9xvgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
ImgLitMap.set('background-size', 'cover');
ImgLitMap.set('background-repeat', 'no-repeat');
@customElement('project-card')
export class projectCard extends LitElement { 
@property({type: String})
projectCard = '';

@property({type: String})
textBox = '';

@property({type: String})
title = '';

@property({type: String})
description = '';

@property({type: String})
imgBox = '';

@property({type: String})
ImgFigma = '';

@property({type: String})
ImgTypescript = '';

@property({type: String})
ImgLit = '';

@property({type: String})
titleText = '';

@property({type: String})
descriptionText = '';



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
            cssString += `${key}: ${value};\n`;
        }
        return cssString;
    };

    render(){
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
${this.renderCssString(ImgTypescriptMap, this.ImgTypescript)};
}
.ImgLit {
${this.renderCssString(ImgLitMap, this.ImgLit)};
}

            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText  ? this.titleText:  'FigmaConverter'
            }
</p>
<p class="description">
   ${this.descriptionText  ? this.descriptionText:  'Ett verktyg som jag utvecklade under mitt examensarbete'
            }
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
    }
 // NOT GENERATED CODE
