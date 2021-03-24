import { LitElement, html, customElement, property } from 'lit-element';
@customElement('little-card')
export class littleCard extends LitElement { 
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
Frame5Width = '';

@property({type: String})
Frame5Height = '';

@property({type: String})
Frame5BorderRadius = '';

@property({type: String})
Frame5Flex = '';

@property({type: String})
Frame5Gap = '';

@property({type: String})
Frame5FlexDirection = '';

@property({type: String})
Frame5BackgroundColor = '';

@property({type: String})
Frame5PaddingTop = '';

@property({type: String})
Frame5PaddingLeft = '';

@property({type: String})
Frame5PaddingBottom = '';

@property({type: String})
Frame5PaddingRight = '';

@property({type: String})
Frame5JustifyContent = '';

@property({type: String})
Frame5AlignItems = '';

@property({type: String})
LittleCardWidth = '';

@property({type: String})
LittleCardHeight = '';

@property({type: String})
LittleCardBorderRadius = '';

@property({type: String})
LittleCardFlex = '';

@property({type: String})
LittleCardGap = '';

@property({type: String})
LittleCardFlexDirection = '';

@property({type: String})
LittleCardBackgroundColor = '';

@property({type: String})
LittleCardFontSize = '';

@property({type: String})
LittleCardFontFamily = '';

@property({type: String})
LittleCardFontWeight = '';

@property({type: String})
LittleCardLetterSpacing = '';

@property({type: String})
someexplanationtexthereWidth = '';

@property({type: String})
someexplanationtexthereHeight = '';

@property({type: String})
someexplanationtexthereBorderRadius = '';

@property({type: String})
someexplanationtexthereFlex = '';

@property({type: String})
someexplanationtexthereGap = '';

@property({type: String})
someexplanationtexthereFlexDirection = '';

@property({type: String})
someexplanationtexthereBackgroundColor = '';

@property({type: String})
someexplanationtexthereFontSize = '';

@property({type: String})
someexplanationtexthereFontFamily = '';

@property({type: String})
someexplanationtexthereFontWeight = '';

@property({type: String})
someexplanationtexthereLetterSpacing = '';

@property({type: String})
LittleCardText = '';

@property({type: String})
someexplanationtexthereText = '';


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 64px)`:  '665px' };
height: ${this.height  ? `calc(${this.height} - 66px)`:  '115px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  '29px' };
gap: ${this.gap  ? this.gap:  '80px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  'var(--color-accent-light)' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '33px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '32px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '33px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '32px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'center' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.Frame5 {
display: flex;
width: ${this.Frame5Width  ? this.Frame5Width:  '56%' };
height: ${this.Frame5Height  ? this.Frame5Height:  '100%' };
gap: ${this.Frame5Gap  ? this.Frame5Gap:  '22px' };
flex-direction: ${this.Frame5FlexDirection  ? this.Frame5FlexDirection:  'column' };
}

.LittleCard {
color: ${this.LittleCardBackgroundColor ? this.LittleCardBackgroundColor : '#000000'};
font-size: ${this.LittleCardFontSize  ? this.LittleCardFontSize:  '3rem' };
font-family: ${this.LittleCardFontFamily  ? this.LittleCardFontFamily:  'Montserrat' };
font-weight: ${this.LittleCardFontWeight  ? this.LittleCardFontWeight:  '100' };
letter-spacing: ${this.LittleCardLetterSpacing  ? this.LittleCardLetterSpacing:  '0' };
}

.someexplanationtexthere {
color: ${this.someexplanationtexthereBackgroundColor ? this.someexplanationtexthereBackgroundColor : '#000000'};
font-size: ${this.someexplanationtexthereFontSize  ? this.someexplanationtexthereFontSize:  '1.7513335943222046rem' };
font-family: ${this.someexplanationtexthereFontFamily  ? this.someexplanationtexthereFontFamily:  'Montserrat' };
font-weight: ${this.someexplanationtexthereFontWeight  ? this.someexplanationtexthereFontWeight:  '100' };
letter-spacing: ${this.someexplanationtexthereLetterSpacing  ? this.someexplanationtexthereLetterSpacing:  '0' };
}


            </style> 
            <div class="Frame5">
<p class="LittleCard">
   ${this.LittleCardText  ? this.LittleCardText:  'Little Card'
            }
</p>
<p class="someexplanationtexthere">
   ${this.someexplanationtexthereText  ? this.someexplanationtexthereText:  'some explanation text here'
            }
</p>
</div>
<slot>
</slot>

        `;
    }    
}
 // NOT GENERATED CODE