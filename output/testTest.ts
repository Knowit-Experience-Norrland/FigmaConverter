import { LitElement, html, customElement, property } from 'lit-element';
@customElement('test-test')
export class testTest extends LitElement { 
@property({type: String})
externalStyleSheet = '';

@property({type: String})
width = '';

@property({type: String})
height = '';

@property({type: String})
borderRadius = '';

@property({type: String})
gap = '';

@property({type: String})
flexDirection = '';

@property({type: String})
backgroundColor = '';

@property({type: String})
backgroundImage = '';

@property({type: String})
backgroundSize = '';

@property({type: String})
backgroundRepeat = '';

@property({type: String})
paddingTop = '';

@property({type: String})
paddingLeft = '';

@property({type: String})
paddingBottom = '';

@property({type: String})
paddingRight = '';

@property({type: String})
justifyContent = '';

@property({type: String})
alignItems = '';

@property({type: String})
testFlexBasis = '';

@property({type: String})
testWidth = '';

@property({type: String})
testHeight = '';

@property({type: String})
testBorderRadius = '';

@property({type: String})
testGap = '';

@property({type: String})
testFlexDirection = '';

@property({type: String})
testBackgroundColor = '';

@property({type: String})
testFontSize = '';

@property({type: String})
testFontFamily = '';

@property({type: String})
testFontWeight = '';

@property({type: String})
testTextAlign = '';

@property({type: String})
testText = '';


    render(){
        return html`
            <link rel="stylesheet" href="${this.externalStyleSheet}" />
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 125px)`:  '24px' };
height: ${this.height  ? `calc(${this.height} - 125px)`:  '17px' };
gap: ${this.gap  ? this.gap:  '10px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#ffffff' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '62.5px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '62.5px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '62.5px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '62.5px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'center' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.test {
flex-basis:  ${this.testFlexBasis ? this.testFlexBasis : '100%'};
color: ${this.testBackgroundColor ? this.testBackgroundColor : '#000000'};
font-size: ${this.testFontSize  ? this.testFontSize:  '0.8805068731307983rem' };
font-family: ${this.testFontFamily  ? this.testFontFamily:  'Roboto' };
font-weight: ${this.testFontWeight  ? this.testFontWeight:  '400' };
text-align: ${this.testTextAlign  ? this.testTextAlign:  'left' };
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
