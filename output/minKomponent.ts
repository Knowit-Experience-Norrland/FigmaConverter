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
textFlexBasis = '';

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
textTextAlign = '';

@property({type: String})
textLineHeight = '';

@property({type: String})
containerFlexBasis = '';

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
containerBackgroundImage = '';

@property({type: String})
containerBackgroundSize = '';

@property({type: String})
containerBackgroundRepeat = '';

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
leftRectangleFlexBasis = '';

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
leftRectangleBackgroundImage = '';

@property({type: String})
leftRectangleBackgroundSize = '';

@property({type: String})
leftRectangleBackgroundRepeat = '';

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
rightRectangleFlexBasis = '';

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
rightRectangleBackgroundImage = '';

@property({type: String})
rightRectangleBackgroundSize = '';

@property({type: String})
rightRectangleBackgroundRepeat = '';

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
flex-basis:  ${this.textFlexBasis ? this.textFlexBasis : '25.570776255707763%'};
color: ${this.textBackgroundColor ? this.textBackgroundColor : '#0b1021'};
font-size: ${this.textFontSize  ? this.textFontSize:  '1rem' };
font-family: ${this.textFontFamily  ? this.textFontFamily:  'Montserrat' };
font-weight: ${this.textFontWeight  ? this.textFontWeight:  '400' };
letter-spacing: ${this.textLetterSpacing  ? this.textLetterSpacing:  '0' };
text-align: ${this.textTextAlign  ? this.textTextAlign:  'center' };
line-height: ${this.textLineHeight  ? this.textLineHeight:  '1.171875rem' };
}

.container {
display: flex;
flex-basis:  ${this.containerFlexBasis ? this.containerFlexBasis : '54.5662100456621%'};
width: 100%;
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
flex-basis:  ${this.leftRectangleFlexBasis ? this.leftRectangleFlexBasis : '44.76987447698745%'};
width: 100%;
height: 100%;
background-color: ${this.leftRectangleBackgroundColor  ? this.leftRectangleBackgroundColor:  '#bcbcbc' };
}

.rightRectangle {
flex-basis:  ${this.rightRectangleFlexBasis ? this.rightRectangleFlexBasis : '44.76987447698745%'};
width: 100%;
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
