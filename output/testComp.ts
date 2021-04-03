import { LitElement, html, customElement, property } from 'lit-element';
@customElement('test-comp')
export class testComp extends LitElement { 
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
textBoxFlexBasis = '';

@property({type: String})
textBoxWidth = '';

@property({type: String})
textBoxHeight = '';

@property({type: String})
textBoxBorderRadius = '';

@property({type: String})
textBoxGap = '';

@property({type: String})
textBoxFlexDirection = '';

@property({type: String})
textBoxBackgroundColor = '';

@property({type: String})
textBoxBackgroundImage = '';

@property({type: String})
textBoxBackgroundSize = '';

@property({type: String})
textBoxBackgroundRepeat = '';

@property({type: String})
textBoxPaddingTop = '';

@property({type: String})
textBoxPaddingLeft = '';

@property({type: String})
textBoxPaddingBottom = '';

@property({type: String})
textBoxPaddingRight = '';

@property({type: String})
textBoxJustifyContent = '';

@property({type: String})
textBoxAlignItems = '';

@property({type: String})
titleFlexBasis = '';

@property({type: String})
titleWidth = '';

@property({type: String})
titleHeight = '';

@property({type: String})
titleBorderRadius = '';

@property({type: String})
titleGap = '';

@property({type: String})
titleFlexDirection = '';

@property({type: String})
titleBackgroundColor = '';

@property({type: String})
titleFontSize = '';

@property({type: String})
titleFontFamily = '';

@property({type: String})
titleFontWeight = '';

@property({type: String})
titleLetterSpacing = '';

@property({type: String})
titleTextAlign = '';

@property({type: String})
titleLineHeight = '';

@property({type: String})
BrödtextFlexBasis = '';

@property({type: String})
BrödtextWidth = '';

@property({type: String})
BrödtextHeight = '';

@property({type: String})
BrödtextBorderRadius = '';

@property({type: String})
BrödtextGap = '';

@property({type: String})
BrödtextFlexDirection = '';

@property({type: String})
BrödtextBackgroundColor = '';

@property({type: String})
BrödtextFontSize = '';

@property({type: String})
BrödtextFontFamily = '';

@property({type: String})
BrödtextFontWeight = '';

@property({type: String})
BrödtextLetterSpacing = '';

@property({type: String})
BrödtextTextAlign = '';

@property({type: String})
BrödtextLineHeight = '';

@property({type: String})
hildaFlexBasis = '';

@property({type: String})
hildaWidth = '';

@property({type: String})
hildaHeight = '';

@property({type: String})
hildaBorderRadius = '';

@property({type: String})
hildaGap = '';

@property({type: String})
hildaFlexDirection = '';

@property({type: String})
hildaBackgroundColor = '';

@property({type: String})
hildaBackgroundImage = '';

@property({type: String})
hildaBackgroundSize = '';

@property({type: String})
hildaBackgroundRepeat = '';

@property({type: String})
hildaPaddingTop = '';

@property({type: String})
hildaPaddingLeft = '';

@property({type: String})
hildaPaddingBottom = '';

@property({type: String})
hildaPaddingRight = '';

@property({type: String})
hildaJustifyContent = '';

@property({type: String})
hildaAlignItems = '';

@property({type: String})
titleText = '';

@property({type: String})
BrödtextText = '';


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
width: ${this.width  ? `calc(${this.width} - 20px)`:  '236px' };
height: ${this.height  ? `calc(${this.height} - 20px)`:  '74px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  '14px' };
gap: ${this.gap  ? this.gap:  '10px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#2f7c81' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '10px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '10px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '10px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '10px' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '44.91525423728814%'};
width: ${this.textBoxWidth  ? this.textBoxWidth:  '45%' };
height: ${this.textBoxHeight  ? this.textBoxHeight:  '91%' };
flex-direction: ${this.textBoxFlexDirection  ? this.textBoxFlexDirection:  'column' };
padding-top: ${this.textBoxPaddingTop  ? this.textBoxPaddingTop:  '3.5px' };
padding-left: ${this.textBoxPaddingLeft  ? this.textBoxPaddingLeft:  '3.5px' };
padding-bottom: ${this.textBoxPaddingBottom  ? this.textBoxPaddingBottom:  '3.5px' };
padding-right: ${this.textBoxPaddingRight  ? this.textBoxPaddingRight:  '3.5px' };
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '43.28358208955223%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#ffe7e7'};
font-size: ${this.titleFontSize  ? this.titleFontSize:  '1.5rem' };
font-family: ${this.titleFontFamily  ? this.titleFontFamily:  'Montserrat' };
font-weight: ${this.titleFontWeight  ? this.titleFontWeight:  '600' };
letter-spacing: ${this.titleLetterSpacing  ? this.titleLetterSpacing:  '0rem' };
text-align: ${this.titleTextAlign  ? this.titleTextAlign:  'left' };
line-height: ${this.titleLineHeight  ? this.titleLineHeight:  '1.7578125rem' };
}

.Brödtext {
flex-basis:  ${this.BrödtextFlexBasis ? this.BrödtextFlexBasis : '22.388059701492537%'};
color: ${this.BrödtextBackgroundColor ? this.BrödtextBackgroundColor : '#000000'};
font-size: ${this.BrödtextFontSize  ? this.BrödtextFontSize:  '0.75rem' };
font-family: ${this.BrödtextFontFamily  ? this.BrödtextFontFamily:  'Montserrat' };
font-weight: ${this.BrödtextFontWeight  ? this.BrödtextFontWeight:  '400' };
letter-spacing: ${this.BrödtextLetterSpacing  ? this.BrödtextLetterSpacing:  '0rem' };
text-align: ${this.BrödtextTextAlign  ? this.BrödtextTextAlign:  'left' };
line-height: ${this.BrödtextLineHeight  ? this.BrödtextLineHeight:  '0.87890625rem' };
}

.hilda {
flex-basis:  ${this.hildaFlexBasis ? this.hildaFlexBasis : '47.88135593220339%'};
width: ${this.hildaWidth  ? this.hildaWidth:  '48%' };
height: ${this.hildaHeight  ? this.hildaHeight:  '100%' };
background-image: ${this.hildaBackgroundImage  ? this.hildaBackgroundImage:  'url(https://s3-alpha-sig.figma.com/img/22bd/2d41/d562fe02234f42c2e2efa41c3c3e240c?Expires=1618185600&Signature=e-ZWrb4XaFtRUfpyNr-EqkOGsgB8LSTWlsfNKLYUDYmCm0CYTjrofFpdpH-dbkQ712QckQgrpK5QOucBtVxKZKO3DmoP~brFet6cdFBkRybAM8nzFpi0ImHcM2ejCPB3zpqIkZz23X~SqRaPC353QRQ6zTUzR6PCd7mUt7dzIDkgcZNtJ9VhkDae5lto1e67zocOOEl5bCmZK~5EIkceMPKCCj57aHgboluGoENIgwOXvjNaXEaUVaa4zt9wxbWTK6K5Jz-5sWPgISJh~FJtWC~9AyzlQkbpVOVhym4JJ2KZwiVsB8Nm91V9l-yetvNoYp9Fc0hfhQ3jG~eEGjV70A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)' };
background-size: ${this.hildaBackgroundSize  ? this.hildaBackgroundSize:  'cover' };
background-repeat: ${this.hildaBackgroundRepeat  ? this.hildaBackgroundRepeat:  'no-repeat' };
}


            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText  ? this.titleText:  'Title'
            }
</p>
<p class="Brödtext">
   ${this.BrödtextText  ? this.BrödtextText:  'Brödtext'
            }
</p>
</div>
<div class="hilda">
</div>

        `;
    }    
}
 // NOT GENERATED CODE
