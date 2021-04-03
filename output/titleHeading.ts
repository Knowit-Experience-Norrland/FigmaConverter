import { LitElement, html, customElement, property } from 'lit-element';
@customElement('title-heading')
export class titleHeading extends LitElement { 
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
FigmaConverterFlexBasis = '';

@property({type: String})
FigmaConverterWidth = '';

@property({type: String})
FigmaConverterHeight = '';

@property({type: String})
FigmaConverterBorderRadius = '';

@property({type: String})
FigmaConverterGap = '';

@property({type: String})
FigmaConverterFlexDirection = '';

@property({type: String})
FigmaConverterBackgroundColor = '';

@property({type: String})
FigmaConverterFontSize = '';

@property({type: String})
FigmaConverterFontFamily = '';

@property({type: String})
FigmaConverterFontWeight = '';

@property({type: String})
FigmaConverterLetterSpacing = '';

@property({type: String})
FigmaConverterTextAlign = '';

@property({type: String})
FigmaConverterLineHeight = '';

@property({type: String})
AutomatetocomunicateFlexBasis = '';

@property({type: String})
AutomatetocomunicateWidth = '';

@property({type: String})
AutomatetocomunicateHeight = '';

@property({type: String})
AutomatetocomunicateBorderRadius = '';

@property({type: String})
AutomatetocomunicateGap = '';

@property({type: String})
AutomatetocomunicateFlexDirection = '';

@property({type: String})
AutomatetocomunicateBackgroundColor = '';

@property({type: String})
AutomatetocomunicateFontSize = '';

@property({type: String})
AutomatetocomunicateFontFamily = '';

@property({type: String})
AutomatetocomunicateFontWeight = '';

@property({type: String})
AutomatetocomunicateLetterSpacing = '';

@property({type: String})
AutomatetocomunicateTextAlign = '';

@property({type: String})
AutomatetocomunicateLineHeight = '';

@property({type: String})
FigmaConverterText = '';

@property({type: String})
AutomatetocomunicateText = '';


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? this.width:  '546px' };
height: ${this.height  ? this.height:  '118px' };
gap: ${this.gap  ? this.gap:  '5px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'column' };
}

.FigmaConverter {
flex-basis:  ${this.FigmaConverterFlexBasis ? this.FigmaConverterFlexBasis : '66.10169491525424%'};
color: ${this.FigmaConverterBackgroundColor ? this.FigmaConverterBackgroundColor : '#000000'};
font-size: ${this.FigmaConverterFontSize  ? this.FigmaConverterFontSize:  '4rem' };
font-family: ${this.FigmaConverterFontFamily  ? this.FigmaConverterFontFamily:  'Montserrat' };
font-weight: ${this.FigmaConverterFontWeight  ? this.FigmaConverterFontWeight:  '500' };
letter-spacing: ${this.FigmaConverterLetterSpacing  ? this.FigmaConverterLetterSpacing:  '0' };
text-align: ${this.FigmaConverterTextAlign  ? this.FigmaConverterTextAlign:  'left' };
line-height: ${this.FigmaConverterLineHeight  ? this.FigmaConverterLineHeight:  '4.6875rem' };
}

.Automatetocomunicate {
flex-basis:  ${this.AutomatetocomunicateFlexBasis ? this.AutomatetocomunicateFlexBasis : '29.66101694915254%'};
color: ${this.AutomatetocomunicateBackgroundColor ? this.AutomatetocomunicateBackgroundColor : '#000000'};
font-size: ${this.AutomatetocomunicateFontSize  ? this.AutomatetocomunicateFontSize:  '1.8125rem' };
font-family: ${this.AutomatetocomunicateFontFamily  ? this.AutomatetocomunicateFontFamily:  'Montserrat' };
font-weight: ${this.AutomatetocomunicateFontWeight  ? this.AutomatetocomunicateFontWeight:  '400' };
letter-spacing: ${this.AutomatetocomunicateLetterSpacing  ? this.AutomatetocomunicateLetterSpacing:  '0' };
text-align: ${this.AutomatetocomunicateTextAlign  ? this.AutomatetocomunicateTextAlign:  'left' };
line-height: ${this.AutomatetocomunicateLineHeight  ? this.AutomatetocomunicateLineHeight:  '2.1240234375rem' };
}


            </style> 
            <p class="FigmaConverter">
   ${this.FigmaConverterText  ? this.FigmaConverterText:  'Figma Converter'
            }
</p>
<p class="Automatetocomunicate">
   ${this.AutomatetocomunicateText  ? this.AutomatetocomunicateText:  'Automate to comunicate'
            }
</p>

        `;
    }    
}
 // NOT GENERATED CODE