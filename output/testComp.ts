import { LitElement, html, customElement, property } from 'lit-element';
@customElement('test-comp')
export class testComp extends LitElement { 
@property({type: String})
width = '';

@property({type: String})
height = '';

@property({type: String})
borderRadius = '';

@property({type: String})
flex = '';

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
Frame1Width = '';

@property({type: String})
Frame1Height = '';

@property({type: String})
Frame1BorderRadius = '';

@property({type: String})
Frame1Flex = '';

@property({type: String})
Frame1Gap = '';

@property({type: String})
Frame1FlexDirection = '';

@property({type: String})
Frame1BackgroundColor = '';

@property({type: String})
Frame1PaddingTop = '';

@property({type: String})
Frame1PaddingLeft = '';

@property({type: String})
Frame1PaddingBottom = '';

@property({type: String})
Frame1PaddingRight = '';

@property({type: String})
Frame1JustifyContent = '';

@property({type: String})
Frame1AlignItems = '';

@property({type: String})
TitleWidth = '';

@property({type: String})
TitleHeight = '';

@property({type: String})
TitleBorderRadius = '';

@property({type: String})
TitleFlex = '';

@property({type: String})
TitleGap = '';

@property({type: String})
TitleFlexDirection = '';

@property({type: String})
TitleBackgroundColor = '';

@property({type: String})
TitleFontSize = '';

@property({type: String})
TitleFontFamily = '';

@property({type: String})
TitleFontWeight = '';

@property({type: String})
TitleLetterSpacing = '';

@property({type: String})
BrödtextWidth = '';

@property({type: String})
BrödtextHeight = '';

@property({type: String})
BrödtextBorderRadius = '';

@property({type: String})
BrödtextFlex = '';

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
squareWidth = '';

@property({type: String})
squareHeight = '';

@property({type: String})
squareBorderRadius = '';

@property({type: String})
squareFlex = '';

@property({type: String})
squareGap = '';

@property({type: String})
squareFlexDirection = '';

@property({type: String})
squareBackgroundColor = '';

@property({type: String})
squarePaddingTop = '';

@property({type: String})
squarePaddingLeft = '';

@property({type: String})
squarePaddingBottom = '';

@property({type: String})
squarePaddingRight = '';

@property({type: String})
squareJustifyContent = '';

@property({type: String})
squareAlignItems = '';

@property({type: String})
TitleText = '';

@property({type: String})
BrödtextText = '';


    render(){
        return html`
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

.Frame1 {
display: flex;
width: ${this.Frame1Width  ? this.Frame1Width:  '48%' };
height: ${this.Frame1Height  ? this.Frame1Height:  '100%' };
flex: ${this.Frame1Flex  ? this.Frame1Flex:  '1' };
flex-direction: ${this.Frame1FlexDirection  ? this.Frame1FlexDirection:  'column' };
justify-content: ${this.Frame1JustifyContent  ? this.Frame1JustifyContent:  'flex-end' };
}

.Title {
color: ${this.TitleBackgroundColor ? this.TitleBackgroundColor : '#ffe7e7'};
font-size: ${this.TitleFontSize  ? this.TitleFontSize:  '1.5rem' };
font-family: ${this.TitleFontFamily  ? this.TitleFontFamily:  'Montserrat' };
font-weight: ${this.TitleFontWeight  ? this.TitleFontWeight:  '600' };
letter-spacing: ${this.TitleLetterSpacing  ? this.TitleLetterSpacing:  '0' };
}

.Brödtext {
color: ${this.BrödtextBackgroundColor ? this.BrödtextBackgroundColor : '#000000'};
font-size: ${this.BrödtextFontSize  ? this.BrödtextFontSize:  '0.75rem' };
font-family: ${this.BrödtextFontFamily  ? this.BrödtextFontFamily:  'Montserrat' };
font-weight: ${this.BrödtextFontWeight  ? this.BrödtextFontWeight:  '400' };
letter-spacing: ${this.BrödtextLetterSpacing  ? this.BrödtextLetterSpacing:  '0' };
}

.square {
width: ${this.squareWidth  ? this.squareWidth:  '48%' };
height: ${this.squareHeight  ? this.squareHeight:  '100%' };
flex: ${this.squareFlex  ? this.squareFlex:  '1' };
background-color: ${this.squareBackgroundColor  ? this.squareBackgroundColor:  '#c5c5c5' };
}


            </style> 
            <div class="Frame1">
<p class="Title">
   ${this.TitleText  ? this.TitleText:  'Title'
            }
</p>
<p class="Brödtext">
   ${this.BrödtextText  ? this.BrödtextText:  'Brödtext'
            }
</p>
</div>
<div class="square">
</div>

        `;
    }    
}
 // NOT GENERATED CODE
