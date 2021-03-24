import { LitElement, html, customElement, property } from 'lit-element';
@customElement('min-komponent')
export class minKomponent extends LitElement { 
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
textWidth = '';

@property({type: String})
textHeight = '';

@property({type: String})
textBorderRadius = '';

@property({type: String})
textGap = '';

@property({type: String})
textFlexDirection = '';

@property({type: String})
textBackgroundColor = '';

@property({type: String})
textFontSize = '';

@property({type: String})
textFontFamily = '';

@property({type: String})
textFontWeight = '';

@property({type: String})
textLetterSpacing = '';

@property({type: String})
containerWidth = '';

@property({type: String})
containerHeight = '';

@property({type: String})
containerBorderRadius = '';

@property({type: String})
containerGap = '';

@property({type: String})
containerFlexDirection = '';

@property({type: String})
containerBackgroundColor = '';

@property({type: String})
containerPaddingTop = '';

@property({type: String})
containerPaddingLeft = '';

@property({type: String})
containerPaddingBottom = '';

@property({type: String})
containerPaddingRight = '';

@property({type: String})
containerJustifyContent = '';

@property({type: String})
containerAlignItems = '';

@property({type: String})
leftRectangleWidth = '';

@property({type: String})
leftRectangleHeight = '';

@property({type: String})
leftRectangleBorderRadius = '';

@property({type: String})
leftRectangleGap = '';

@property({type: String})
leftRectangleFlexDirection = '';

@property({type: String})
leftRectangleBackgroundColor = '';

@property({type: String})
leftRectanglePaddingTop = '';

@property({type: String})
leftRectanglePaddingLeft = '';

@property({type: String})
leftRectanglePaddingBottom = '';

@property({type: String})
leftRectanglePaddingRight = '';

@property({type: String})
leftRectangleJustifyContent = '';

@property({type: String})
leftRectangleAlignItems = '';

@property({type: String})
rightRectangleWidth = '';

@property({type: String})
rightRectangleHeight = '';

@property({type: String})
rightRectangleBorderRadius = '';

@property({type: String})
rightRectangleGap = '';

@property({type: String})
rightRectangleFlexDirection = '';

@property({type: String})
rightRectangleBackgroundColor = '';

@property({type: String})
rightRectanglePaddingTop = '';

@property({type: String})
rightRectanglePaddingLeft = '';

@property({type: String})
rightRectanglePaddingBottom = '';

@property({type: String})
rightRectanglePaddingRight = '';

@property({type: String})
rightRectangleJustifyContent = '';

@property({type: String})
rightRectangleAlignItems = '';

@property({type: String})
textText = '';


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 40px)`:  '438px' };
height: ${this.height  ? `calc(${this.height} - 40px)`:  '219px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  '37px' };
gap: ${this.gap  ? this.gap:  '36.5px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#49ad9b' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '20px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '20px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '20px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '20px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'center' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.text {
color: ${this.textBackgroundColor ? this.textBackgroundColor : '#0b1021'};
font-size: ${this.textFontSize  ? this.textFontSize:  '1rem' };
font-family: ${this.textFontFamily  ? this.textFontFamily:  'Montserrat' };
font-weight: ${this.textFontWeight  ? this.textFontWeight:  '400' };
letter-spacing: ${this.textLetterSpacing  ? this.textLetterSpacing:  '0' };
}

.container {
display: flex;
width: 100%;
flex-basis:54.5662100456621%;
height: 100%;
border-radius: ${this.containerBorderRadius  ? this.containerBorderRadius:  '15px' };
gap: ${this.containerGap  ? this.containerGap:  '25px' };
flex-direction: ${this.containerFlexDirection  ? this.containerFlexDirection:  'row' };
background-color: ${this.containerBackgroundColor  ? this.containerBackgroundColor:  'var(--color-accent)' };
padding-top: ${this.containerPaddingTop  ? this.containerPaddingTop:  '25px' };
padding-left: ${this.containerPaddingLeft  ? this.containerPaddingLeft:  '25px' };
padding-bottom: ${this.containerPaddingBottom  ? this.containerPaddingBottom:  '25px' };
padding-right: ${this.containerPaddingRight  ? this.containerPaddingRight:  '25px' };
align-items: ${this.containerAlignItems  ? this.containerAlignItems:  'center' };
}

.leftRectangle {
width: 100%;
flex-basis:44.76987447698745%;
height: 100%;
background-color: ${this.leftRectangleBackgroundColor  ? this.leftRectangleBackgroundColor:  '#bcbcbc' };
}

.rightRectangle {
width: 100%;
flex-basis:44.76987447698745%;
height: 100%;
background-color: ${this.rightRectangleBackgroundColor  ? this.rightRectangleBackgroundColor:  '#bcbcbc' };
}


            </style> 
            <p class="text">
   ${this.textText  ? this.textText:  'Lorum Ipsum'
            }
</p>
<div class="container">
<div class="leftRectangle">
</div>
<div class="rightRectangle">
</div>
</div>

        `;
    }    
}
 // NOT GENERATED CODE
