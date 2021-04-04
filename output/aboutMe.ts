import { LitElement, html, customElement, property } from 'lit-element';
var aboutMeMap = new Map(); 
var titleMap = new Map(); 
var firstParagraphMap = new Map(); 
var secondParagraphMap = new Map(); 
aboutMeMap.set('display', 'flex');
aboutMeMap.set('width', '293px');
aboutMeMap.set('height', '388px');
aboutMeMap.set('gap', '41px');
aboutMeMap.set('flex-direction', 'column');
aboutMeMap.set('background-color', '#0c0c0c');
aboutMeMap.set('padding-top', '13.5px');
aboutMeMap.set('padding-left', '13.5px');
aboutMeMap.set('padding-bottom', '13.5px');
aboutMeMap.set('padding-right', '13.5px');
titleMap.set('flex-basis', '7.474226804123711%');
titleMap.set('width', '47px');
titleMap.set('height', '29px');
titleMap.set('color', '#f5fdff');
firstParagraphMap.set('flex-basis', '35.56701030927835%');
firstParagraphMap.set('width', '293px');
firstParagraphMap.set('height', '138.5px');
firstParagraphMap.set('color', '#f5fdff');
secondParagraphMap.set('flex-basis', '35.56701030927835%');
secondParagraphMap.set('width', '293px');
secondParagraphMap.set('height', '138.5px');
secondParagraphMap.set('color', '#f5fdff');
@customElement('about-me')
export class aboutMe extends LitElement { 
@property({type: String})
aboutMe = '';

@property({type: String})
title = '';

@property({type: String})
firstParagraph = '';

@property({type: String})
secondParagraph = '';

@property({type: String})
titleText = '';

@property({type: String})
firstParagraphText = '';

@property({type: String})
secondParagraphText = '';



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
   ${this.titleText  ? this.titleText:  'Hej! '
            }
</p>
<p class="firstParagraph">
   ${this.firstParagraphText  ? this.firstParagraphText:  'Albin Frick heter jag och går femte och sista året på programmet Civilingenjör för interaktion och design i Umeå. Jag är 24 år gammal och bor tillsammans med min fästmö i Umeå. Jag älskar att koda och designa nya saker. Jag är väldigt intresserad av front-end utveckling men tycker är spännande att ha en fullstack förståelse över system.'
            }
</p>
<p class="secondParagraph">
   ${this.secondParagraphText  ? this.secondParagraphText:  'Ända sedan jag fick min första smartphone så har jag varit på jakt efter nya häftiga applikationer och hämsidor. På senare tid har sökandet gått mer över till skapande och hoppas att kunna få arbeta med detta framöver! '
            }
</p>

        `;
    }    
    }
 // NOT GENERATED CODE
