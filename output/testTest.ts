import { LitElement, html, customElement, property } from 'lit-element';
var testTestMap = new Map(); 
var testMap = new Map(); 
testTestMap.set('display', 'flex');
testTestMap.set('width',
                        'calc(149px - 125px)'); 
testTestMap.set('height',
                        'calc(142px - 125px)'); 
testTestMap.set('gap', '10px');
testTestMap.set('flex-direction', 'row');
testTestMap.set('background-color', '#ffffff');
testTestMap.set('padding-top', '62.5px');
testTestMap.set('padding-left', '62.5px');
testTestMap.set('padding-bottom', '62.5px');
testTestMap.set('padding-right', '62.5px');
testTestMap.set('justify-content', 'center');
testTestMap.set('align-items', 'center');
testMap.set('flex-basis', '16.10738255033557%');
testMap.set('color', '#000000');
testMap.set('font-size','0.8805068731307983rem') ;
testMap.set('font-family','Roboto') ;
testMap.set('font-weight','400') ;
testMap.set('text-align','left') ;
@customElement('test-test')
export class testTest extends LitElement { 
@property({type: String})
testTest = '';

@property({type: String})
test = '';

@property({type: String})
testText = '';



    propertyToMap = (cssRules: Map<string, string>, property: string) => {
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

    renderCssString = (cssRules: Map<string, string>, property: string): string => {
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
   ${this.testText  ? this.testText:  `test`
            }
</p>

        `;
    }    
    }
 // NOT GENERATED CODE
