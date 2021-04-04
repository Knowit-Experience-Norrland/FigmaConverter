import { LitElement, html, customElement, property } from 'lit-element';
var testTestMap = new Map(); 
var testMap = new Map(); 
testTestMap.set('display', 'flex');
testTestMap.set('width', '24px');
testTestMap.set('height', '17px');
testTestMap.set('gap', '10px');
testTestMap.set('flex-direction', 'row');
testTestMap.set('background-color', '#ffffff');
testTestMap.set('padding-top', '62.5px');
testTestMap.set('padding-left', '62.5px');
testTestMap.set('padding-bottom', '62.5px');
testTestMap.set('padding-right', '62.5px');
testTestMap.set('justify-content', 'center');
testTestMap.set('align-items', 'center');
testMap.set('flex-basis', '100%');
testMap.set('width', '24px');
testMap.set('height', '17px');
testMap.set('color', '#000000');
@customElement('test-test')
export class testTest extends LitElement { 
@property({type: String})
testTest = '';

@property({type: String})
test = '';

@property({type: String})
testText = '';



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
${this.renderCssString(testTestMap, this.testTest)};
}
.test {
${this.renderCssString(testMap, this.test)};
}

            </style> 
            <p class="test">
   ${this.testText  ? this.testText:  'test'
            }
</p>

        `;
    }    
    }
 // NOT GENERATED CODE
