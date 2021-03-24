import { LitElement, html, customElement, property } from 'lit-element';
@customElement('test-button')
export class testButton extends LitElement { 
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
ButtonWidth = '';

@property({type: String})
ButtonHeight = '';

@property({type: String})
ButtonBorderRadius = '';

@property({type: String})
ButtonGap = '';

@property({type: String})
ButtonFlexDirection = '';

@property({type: String})
ButtonBackgroundColor = '';

@property({type: String})
ButtonFontSize = '';

@property({type: String})
ButtonFontFamily = '';

@property({type: String})
ButtonFontWeight = '';

@property({type: String})
ButtonLetterSpacing = '';

@property({type: String})
ButtonText = '';


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 23px)`:  '165px' };
height: ${this.height  ? `calc(${this.height} - 23px)`:  '59px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  '12px' };
gap: ${this.gap  ? this.gap:  '10px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#ffffff' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '11.5px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '11.5px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '11.5px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '11.5px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'center' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.Button {
color: ${this.ButtonBackgroundColor ? this.ButtonBackgroundColor : '#000000'};
font-size: ${this.ButtonFontSize  ? this.ButtonFontSize:  '3rem' };
font-family: ${this.ButtonFontFamily  ? this.ButtonFontFamily:  'Montserrat' };
font-weight: ${this.ButtonFontWeight  ? this.ButtonFontWeight:  '100' };
letter-spacing: ${this.ButtonLetterSpacing  ? this.ButtonLetterSpacing:  '0' };
}


            </style> 
            <p class="Button">
   ${this.ButtonText  ? this.ButtonText:  'Button'
            }
</p>

        `;
    }    
}
 // NOT GENERATED CODE