import { LitElement, html, customElement, property } from 'lit-element';
@customElement('info-card')
export class infoCard extends LitElement { 
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
cardtitleWidth = '';

@property({type: String})
cardtitleHeight = '';

@property({type: String})
cardtitleBorderRadius = '';

@property({type: String})
cardtitleGap = '';

@property({type: String})
cardtitleFlexDirection = '';

@property({type: String})
cardtitleBackgroundColor = '';

@property({type: String})
cardtitleFontSize = '';

@property({type: String})
cardtitleFontFamily = '';

@property({type: String})
cardtitleFontWeight = '';

@property({type: String})
cardtitleLetterSpacing = '';

@property({type: String})
bodytextWidth = '';

@property({type: String})
bodytextHeight = '';

@property({type: String})
bodytextBorderRadius = '';

@property({type: String})
bodytextGap = '';

@property({type: String})
bodytextFlexDirection = '';

@property({type: String})
bodytextBackgroundColor = '';

@property({type: String})
bodytextFontSize = '';

@property({type: String})
bodytextFontFamily = '';

@property({type: String})
bodytextFontWeight = '';

@property({type: String})
bodytextLetterSpacing = '';

@property({type: String})
imgWidth = '';

@property({type: String})
imgHeight = '';

@property({type: String})
imgBorderRadius = '';

@property({type: String})
imgGap = '';

@property({type: String})
imgFlexDirection = '';

@property({type: String})
imgBackgroundColor = '';

@property({type: String})
imgPaddingTop = '';

@property({type: String})
imgPaddingLeft = '';

@property({type: String})
imgPaddingBottom = '';

@property({type: String})
imgPaddingRight = '';

@property({type: String})
imgJustifyContent = '';

@property({type: String})
imgAlignItems = '';

@property({type: String})
imgTextWidth = '';

@property({type: String})
imgTextHeight = '';

@property({type: String})
imgTextBorderRadius = '';

@property({type: String})
imgTextGap = '';

@property({type: String})
imgTextFlexDirection = '';

@property({type: String})
imgTextBackgroundColor = '';

@property({type: String})
imgTextFontSize = '';

@property({type: String})
imgTextFontFamily = '';

@property({type: String})
imgTextFontWeight = '';

@property({type: String})
imgTextLetterSpacing = '';

@property({type: String})
imgTextFontStyle = '';

@property({type: String})
cardtitleText = '';

@property({type: String})
bodytextText = '';

@property({type: String})
imgTextText = '';


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 90px)`:  '975px' };
height: ${this.height  ? `calc(${this.height} - 82px)`:  '352px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  '20px' };
gap: ${this.gap  ? this.gap:  '56px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  'var(--color-background-default)' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '41px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '45px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '41px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '45px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'center' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.textBox {
display: flex;
width: 100%;
flex-basis:32.82051282051282%;
height: 100%;
gap: ${this.textBoxGap  ? this.textBoxGap:  '25px' };
flex-direction: ${this.textBoxFlexDirection  ? this.textBoxFlexDirection:  'column' };
}

.cardtitle {
color: ${this.cardtitleBackgroundColor ? this.cardtitleBackgroundColor : '#000000'};
font-size: ${this.cardtitleFontSize  ? this.cardtitleFontSize:  '1.997816562652588rem' };
font-family: ${this.cardtitleFontFamily  ? this.cardtitleFontFamily:  'Montserrat' };
font-weight: ${this.cardtitleFontWeight  ? this.cardtitleFontWeight:  '500' };
letter-spacing: ${this.cardtitleLetterSpacing  ? this.cardtitleLetterSpacing:  '0' };
}

.bodytext {
color: ${this.bodytextBackgroundColor ? this.bodytextBackgroundColor : '#000000'};
font-size: ${this.bodytextFontSize  ? this.bodytextFontSize:  '1.3318777084350586rem' };
font-family: ${this.bodytextFontFamily  ? this.bodytextFontFamily:  'Montserrat' };
font-weight: ${this.bodytextFontWeight  ? this.bodytextFontWeight:  '400' };
letter-spacing: ${this.bodytextLetterSpacing  ? this.bodytextLetterSpacing:  '0' };
}

.img {
display: flex;
width: 100%;
flex-basis:61.43589743589744%;
height: 100%;
border-radius: ${this.imgBorderRadius  ? this.imgBorderRadius:  '20px' };
gap: ${this.imgGap  ? this.imgGap:  '10px' };
flex-direction: ${this.imgFlexDirection  ? this.imgFlexDirection:  'column' };
background-color: ${this.imgBackgroundColor  ? this.imgBackgroundColor:  'var(--color-primary)' };
justify-content: ${this.imgJustifyContent  ? this.imgJustifyContent:  'center' };
align-items: ${this.imgAlignItems  ? this.imgAlignItems:  'center' };
}

.imgText {
color: ${this.imgTextBackgroundColor ? this.imgTextBackgroundColor : '#ffffff'};
font-size: ${this.imgTextFontSize  ? this.imgTextFontSize:  '1.7290455102920532rem' };
font-family: ${this.imgTextFontFamily  ? this.imgTextFontFamily:  'Times' };
font-weight: ${this.imgTextFontWeight  ? this.imgTextFontWeight:  '700' };
letter-spacing: ${this.imgTextLetterSpacing  ? this.imgTextLetterSpacing:  '0' };
font-style: ${this.imgTextFontStyle  ? this.imgTextFontStyle:  'italic' };
}


            </style> 
            <div class="textBox">
<p class="cardtitle">
   ${this.cardtitleText  ? this.cardtitleText:  'What your project needs'
            }
</p>
<p class="bodytext">
   ${this.bodytextText  ? this.bodytextText:  'Figma Converter is the perfect tool for all projects working with separate designers and developers.'
            }
</p>
</div>
<div class="img">
<p class="imgText">
   ${this.imgTextText  ? this.imgTextText:  'This is an image'
            }
</p>
</div>

        `;
    }    
}
 // NOT GENERATED CODE
