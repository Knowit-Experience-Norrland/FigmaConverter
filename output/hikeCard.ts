import { LitElement, html, customElement, property } from 'lit-element';
@customElement('hike-card')
export class hikeCard extends LitElement { 
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
descriptionFlexBasis = '';

@property({type: String})
descriptionWidth = '';

@property({type: String})
descriptionHeight = '';

@property({type: String})
descriptionBorderRadius = '';

@property({type: String})
descriptionGap = '';

@property({type: String})
descriptionFlexDirection = '';

@property({type: String})
descriptionBackgroundColor = '';

@property({type: String})
descriptionFontSize = '';

@property({type: String})
descriptionFontFamily = '';

@property({type: String})
descriptionFontWeight = '';

@property({type: String})
descriptionLetterSpacing = '';

@property({type: String})
descriptionTextAlign = '';

@property({type: String})
descriptionLineHeight = '';

@property({type: String})
imgBoxFlexBasis = '';

@property({type: String})
imgBoxWidth = '';

@property({type: String})
imgBoxHeight = '';

@property({type: String})
imgBoxBorderRadius = '';

@property({type: String})
imgBoxGap = '';

@property({type: String})
imgBoxFlexDirection = '';

@property({type: String})
imgBoxBackgroundColor = '';

@property({type: String})
imgBoxBackgroundImage = '';

@property({type: String})
imgBoxBackgroundSize = '';

@property({type: String})
imgBoxBackgroundRepeat = '';

@property({type: String})
imgBoxPaddingTop = '';

@property({type: String})
imgBoxPaddingLeft = '';

@property({type: String})
imgBoxPaddingBottom = '';

@property({type: String})
imgBoxPaddingRight = '';

@property({type: String})
imgBoxJustifyContent = '';

@property({type: String})
imgBoxAlignItems = '';

@property({type: String})
imgFlexBasis = '';

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
imgBackgroundImage = '';

@property({type: String})
imgBackgroundSize = '';

@property({type: String})
imgBackgroundRepeat = '';

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
titleText = '';

@property({type: String})
descriptionText = '';


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
width: ${this.width  ? this.width:  '303px' };
height: ${this.height  ? this.height:  '124px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  ' 0px 10px 10px 0px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#ffffff' };
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '52.8052805280528%'};
width: ${this.textBoxWidth  ? this.textBoxWidth:  '53%' };
height: ${this.textBoxHeight  ? this.textBoxHeight:  '88%' };
border-radius: ${this.textBoxBorderRadius  ? this.textBoxBorderRadius:  ' 0px 10px 10px 0px' };
gap: ${this.textBoxGap  ? this.textBoxGap:  '10px' };
flex-direction: ${this.textBoxFlexDirection  ? this.textBoxFlexDirection:  'column' };
background-color: ${this.textBoxBackgroundColor  ? this.textBoxBackgroundColor:  '#b1b1b1' };
padding-top: ${this.textBoxPaddingTop  ? this.textBoxPaddingTop:  '7.5px' };
padding-left: ${this.textBoxPaddingLeft  ? this.textBoxPaddingLeft:  '7.5px' };
padding-bottom: ${this.textBoxPaddingBottom  ? this.textBoxPaddingBottom:  '7.5px' };
padding-right: ${this.textBoxPaddingRight  ? this.textBoxPaddingRight:  '7.5px' };
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '26.605504587155966%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#ffffff'};
font-size: ${this.titleFontSize  ? this.titleFontSize:  '1.497180461883545rem' };
font-family: ${this.titleFontFamily  ? this.titleFontFamily:  'Montserrat' };
font-weight: ${this.titleFontWeight  ? this.titleFontWeight:  '500' };
letter-spacing: ${this.titleLetterSpacing  ? this.titleLetterSpacing:  '0rem' };
text-align: ${this.titleTextAlign  ? this.titleTextAlign:  'left' };
line-height: ${this.titleLineHeight  ? this.titleLineHeight:  '1.754508376121521rem' };
}

.description {
flex-basis:  ${this.descriptionFlexBasis ? this.descriptionFlexBasis : '11.926605504587156%'};
color: ${this.descriptionBackgroundColor ? this.descriptionBackgroundColor : '#ffffff'};
font-size: ${this.descriptionFontSize  ? this.descriptionFontSize:  '0.671875rem' };
font-family: ${this.descriptionFontFamily  ? this.descriptionFontFamily:  'Montserrat' };
font-weight: ${this.descriptionFontWeight  ? this.descriptionFontWeight:  '400' };
letter-spacing: ${this.descriptionLetterSpacing  ? this.descriptionLetterSpacing:  '0rem' };
text-align: ${this.descriptionTextAlign  ? this.descriptionTextAlign:  'left' };
line-height: ${this.descriptionLineHeight  ? this.descriptionLineHeight:  '0.787353515625rem' };
}

.imgBox {
display: flex;
flex-basis:  ${this.imgBoxFlexBasis ? this.imgBoxFlexBasis : '35.64356435643564%'};
width: ${this.imgBoxWidth  ? this.imgBoxWidth:  '36%' };
height: ${this.imgBoxHeight  ? this.imgBoxHeight:  '84%' };
gap: ${this.imgBoxGap  ? this.imgBoxGap:  '10px' };
flex-direction: ${this.imgBoxFlexDirection  ? this.imgBoxFlexDirection:  'column' };
padding-top: ${this.imgBoxPaddingTop  ? this.imgBoxPaddingTop:  '10px' };
padding-left: ${this.imgBoxPaddingLeft  ? this.imgBoxPaddingLeft:  '10px' };
padding-bottom: ${this.imgBoxPaddingBottom  ? this.imgBoxPaddingBottom:  '10px' };
padding-right: ${this.imgBoxPaddingRight  ? this.imgBoxPaddingRight:  '10px' };
}

.img {
flex-basis:  ${this.imgFlexBasis ? this.imgFlexBasis : '100%'};
width: ${this.imgWidth  ? this.imgWidth:  '100%' };
height: ${this.imgHeight  ? this.imgHeight:  '100%' };
background-image: ${this.imgBackgroundImage  ? this.imgBackgroundImage:  'url(https://s3-alpha-sig.figma.com/img/3aa8/f2ea/d29dd308201f67d7ee0d13780262c402?Expires=1618185600&Signature=XLDPv7voma6EUOcf9gBBcnY-wsu3FSRJta9et7-2pWF23f1JwVJEy0tP65g~xtJcFgxYpPRiZLL40cEDKx6L7W15TVZ~OFgf-brT5N4XZfch6jOcIj-rMT5E9OhSEiPURL0Cw~uB-T~zR8~vZjEc1ORrlYWlfunzxx9EerKEjdS9h1nr17BAlaXIooWoVqm0fPaIvhARyhI7y8UC~oBK6UmT1b5witZz2suCubZyuWPhGynxVlqiJN9l-8NTDnElsiFOys9y97Oa913vC1~6g70Az99KHxVglzIF-gsw38Rhy~4YjsfHk4fJ~WOgw9yS6lXNCtdlTtQ~AVw4RZ5fGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)' };
background-size: ${this.imgBackgroundSize  ? this.imgBackgroundSize:  'cover' };
background-repeat: ${this.imgBackgroundRepeat  ? this.imgBackgroundRepeat:  'no-repeat' };
}


            </style> 
            <div class="textBox">
<p class="title">
   ${this.titleText  ? this.titleText:  'Hiking'
            }
</p>
<p class="description">
   ${this.descriptionText  ? this.descriptionText:  'For the one’s that like natue'
            }
</p>
</div>
<div class="imgBox">
<div class="img">
</div>
</div>

        `;
    }    
}
 // NOT GENERATED CODE
