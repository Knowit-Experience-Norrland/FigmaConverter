import { LitElement, html, customElement, property } from 'lit-element';
@customElement('about-me')
export class aboutMe extends LitElement { 
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
titleTextAlign = '';

@property({type: String})
firstParagraphFlexBasis = '';

@property({type: String})
firstParagraphWidth = '';

@property({type: String})
firstParagraphHeight = '';

@property({type: String})
firstParagraphBorderRadius = '';

@property({type: String})
firstParagraphGap = '';

@property({type: String})
firstParagraphFlexDirection = '';

@property({type: String})
firstParagraphBackgroundColor = '';

@property({type: String})
firstParagraphFontSize = '';

@property({type: String})
firstParagraphFontFamily = '';

@property({type: String})
firstParagraphFontWeight = '';

@property({type: String})
firstParagraphTextAlign = '';

@property({type: String})
secondParagraphFlexBasis = '';

@property({type: String})
secondParagraphWidth = '';

@property({type: String})
secondParagraphHeight = '';

@property({type: String})
secondParagraphBorderRadius = '';

@property({type: String})
secondParagraphGap = '';

@property({type: String})
secondParagraphFlexDirection = '';

@property({type: String})
secondParagraphBackgroundColor = '';

@property({type: String})
secondParagraphFontSize = '';

@property({type: String})
secondParagraphFontFamily = '';

@property({type: String})
secondParagraphFontWeight = '';

@property({type: String})
secondParagraphTextAlign = '';

@property({type: String})
titleText = '';

@property({type: String})
firstParagraphText = '';

@property({type: String})
secondParagraphText = '';


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
width: ${this.width  ? `calc(${this.width} - 27px)`:  '293px' };
height: ${this.height  ? `calc(${this.height} - 27px)`:  '388px' };
gap: ${this.gap  ? this.gap:  '41px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'column' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#0c0c0c' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '13.5px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '13.5px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '13.5px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '13.5px' };
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '7.474226804123711%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#f5fdff'};
font-size: ${this.titleFontSize  ? this.titleFontSize:  '1.5rem' };
font-family: ${this.titleFontFamily  ? this.titleFontFamily:  'Montserrat' };
font-weight: ${this.titleFontWeight  ? this.titleFontWeight:  '400' };
text-align: ${this.titleTextAlign  ? this.titleTextAlign:  'left' };
}

.firstParagraph {
flex-basis:  ${this.firstParagraphFlexBasis ? this.firstParagraphFlexBasis : '35.56701030927835%'};
color: ${this.firstParagraphBackgroundColor ? this.firstParagraphBackgroundColor : '#f5fdff'};
font-size: ${this.firstParagraphFontSize  ? this.firstParagraphFontSize:  '0.875rem' };
font-family: ${this.firstParagraphFontFamily  ? this.firstParagraphFontFamily:  'Montserrat' };
font-weight: ${this.firstParagraphFontWeight  ? this.firstParagraphFontWeight:  '400' };
text-align: ${this.firstParagraphTextAlign  ? this.firstParagraphTextAlign:  'left' };
}

.secondParagraph {
flex-basis:  ${this.secondParagraphFlexBasis ? this.secondParagraphFlexBasis : '35.56701030927835%'};
color: ${this.secondParagraphBackgroundColor ? this.secondParagraphBackgroundColor : '#f5fdff'};
font-size: ${this.secondParagraphFontSize  ? this.secondParagraphFontSize:  '0.875rem' };
font-family: ${this.secondParagraphFontFamily  ? this.secondParagraphFontFamily:  'Montserrat' };
font-weight: ${this.secondParagraphFontWeight  ? this.secondParagraphFontWeight:  '400' };
text-align: ${this.secondParagraphTextAlign  ? this.secondParagraphTextAlign:  'left' };
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
