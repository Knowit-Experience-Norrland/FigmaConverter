import { LitElement, html, customElement, property } from 'lit-element';
@customElement('name-tag')
export class nameTag extends LitElement { 
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
titleBoxFlexBasis = '';

@property({type: String})
titleBoxWidth = '';

@property({type: String})
titleBoxHeight = '';

@property({type: String})
titleBoxBorderRadius = '';

@property({type: String})
titleBoxGap = '';

@property({type: String})
titleBoxFlexDirection = '';

@property({type: String})
titleBoxBackgroundColor = '';

@property({type: String})
titleBoxBackgroundImage = '';

@property({type: String})
titleBoxBackgroundSize = '';

@property({type: String})
titleBoxBackgroundRepeat = '';

@property({type: String})
titleBoxPaddingTop = '';

@property({type: String})
titleBoxPaddingLeft = '';

@property({type: String})
titleBoxPaddingBottom = '';

@property({type: String})
titleBoxPaddingRight = '';

@property({type: String})
titleBoxJustifyContent = '';

@property({type: String})
titleBoxAlignItems = '';

@property({type: String})
nameFlexBasis = '';

@property({type: String})
nameWidth = '';

@property({type: String})
nameHeight = '';

@property({type: String})
nameBorderRadius = '';

@property({type: String})
nameGap = '';

@property({type: String})
nameFlexDirection = '';

@property({type: String})
nameBackgroundColor = '';

@property({type: String})
nameFontSize = '';

@property({type: String})
nameFontFamily = '';

@property({type: String})
nameFontWeight = '';

@property({type: String})
nameLetterSpacing = '';

@property({type: String})
nameTextAlign = '';

@property({type: String})
nameLineHeight = '';

@property({type: String})
subBoxFlexBasis = '';

@property({type: String})
subBoxWidth = '';

@property({type: String})
subBoxHeight = '';

@property({type: String})
subBoxBorderRadius = '';

@property({type: String})
subBoxGap = '';

@property({type: String})
subBoxFlexDirection = '';

@property({type: String})
subBoxBackgroundColor = '';

@property({type: String})
subBoxBackgroundImage = '';

@property({type: String})
subBoxBackgroundSize = '';

@property({type: String})
subBoxBackgroundRepeat = '';

@property({type: String})
subBoxPaddingTop = '';

@property({type: String})
subBoxPaddingLeft = '';

@property({type: String})
subBoxPaddingBottom = '';

@property({type: String})
subBoxPaddingRight = '';

@property({type: String})
subBoxJustifyContent = '';

@property({type: String})
subBoxAlignItems = '';

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
nameText = '';

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
width: ${this.width  ? this.width:  '480px' };
height: ${this.height  ? this.height:  '116px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
}

.img {
flex-basis:  ${this.imgFlexBasis ? this.imgFlexBasis : '24.166666666666668%'};
width: ${this.imgWidth  ? this.imgWidth:  '24%' };
height: ${this.imgHeight  ? this.imgHeight:  '100%' };
border-radius: ${this.imgBorderRadius  ? this.imgBorderRadius:  '50%' };
background-image: ${this.imgBackgroundImage  ? this.imgBackgroundImage:  'url(https://s3-alpha-sig.figma.com/img/eef5/7561/45407980a3de4d17ad939880d89ad77b?Expires=1618185600&Signature=Oz7k1a~yixlsidvMPs9nSKA0YnWGE9bUErdTZsBv~ORk7h4~Akd8Flr7tSplpk2hhOxcNgTyWeVNz7poU0nrrnByatFDjrP7shwqbJTv98L6cktFSyi~tpWZCzwvYndF7h66XdgBZPJuKleLJDaoluZ6irX~xWRMuYm1hdT4zgL9Zd~zeD5BtqNwiiLTJX3dLXKiIRBQqQV8V4ZHWJu4fruXUUwDqAPjq3ro6Lrtgt4a1NMRH2EAOroXGHcxTMt2fS~joL3izSjB8PXJaG2hn0jJxpUTkm3BHJA73KP8osCwj0ME19wzwUCqGMSBdIw9lD4jYGodpLs40QD6BN0QFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)' };
background-size: ${this.imgBackgroundSize  ? this.imgBackgroundSize:  'cover' };
background-repeat: ${this.imgBackgroundRepeat  ? this.imgBackgroundRepeat:  'no-repeat' };
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '75.83333333333333%'};
width: ${this.textBoxWidth  ? this.textBoxWidth:  '76%' };
height: ${this.textBoxHeight  ? this.textBoxHeight:  '100%' };
flex-direction: ${this.textBoxFlexDirection  ? this.textBoxFlexDirection:  'column' };
justify-content: ${this.textBoxJustifyContent  ? this.textBoxJustifyContent:  'flex-end' };
}

.titleBox {
display: flex;
flex-basis:  ${this.titleBoxFlexBasis ? this.titleBoxFlexBasis : '29.310344827586203%'};
width: ${this.titleBoxWidth  ? this.titleBoxWidth:  '52%' };
height: ${this.titleBoxHeight  ? this.titleBoxHeight:  '29%' };
border-radius: ${this.titleBoxBorderRadius  ? this.titleBoxBorderRadius:  ' 0px 30px 30px 0px' };
gap: ${this.titleBoxGap  ? this.titleBoxGap:  '10px' };
flex-direction: ${this.titleBoxFlexDirection  ? this.titleBoxFlexDirection:  'row' };
background-color: ${this.titleBoxBackgroundColor  ? this.titleBoxBackgroundColor:  '#3d697c' };
padding-top: ${this.titleBoxPaddingTop  ? this.titleBoxPaddingTop:  '10px' };
padding-left: ${this.titleBoxPaddingLeft  ? this.titleBoxPaddingLeft:  '70px' };
padding-bottom: ${this.titleBoxPaddingBottom  ? this.titleBoxPaddingBottom:  '10px' };
padding-right: ${this.titleBoxPaddingRight  ? this.titleBoxPaddingRight:  '105px' };
justify-content: ${this.titleBoxJustifyContent  ? this.titleBoxJustifyContent:  'center' };
align-items: ${this.titleBoxAlignItems  ? this.titleBoxAlignItems:  'center' };
}

.name {
flex-basis:  ${this.nameFlexBasis ? this.nameFlexBasis : '85.18518518518519%'};
color: ${this.nameBackgroundColor ? this.nameBackgroundColor : '#ffffff'};
font-size: ${this.nameFontSize  ? this.nameFontSize:  '2.1622514724731445rem' };
font-family: ${this.nameFontFamily  ? this.nameFontFamily:  'Roboto' };
font-weight: ${this.nameFontWeight  ? this.nameFontWeight:  '400' };
letter-spacing: ${this.nameLetterSpacing  ? this.nameLetterSpacing:  '0rem' };
text-align: ${this.nameTextAlign  ? this.nameTextAlign:  'left' };
line-height: ${this.nameLineHeight  ? this.nameLineHeight:  '2.533888339996338rem' };
}

.subBox {
display: flex;
flex-basis:  ${this.subBoxFlexBasis ? this.subBoxFlexBasis : '12.068965517241379%'};
width: ${this.subBoxWidth  ? this.subBoxWidth:  '54%' };
height: ${this.subBoxHeight  ? this.subBoxHeight:  '12%' };
border-radius: ${this.subBoxBorderRadius  ? this.subBoxBorderRadius:  ' 0px 20px 20px 0px' };
flex-direction: ${this.subBoxFlexDirection  ? this.subBoxFlexDirection:  'row' };
background-color: ${this.subBoxBackgroundColor  ? this.subBoxBackgroundColor:  '#598ea4' };
padding-top: ${this.subBoxPaddingTop  ? this.subBoxPaddingTop:  '11px' };
padding-left: ${this.subBoxPaddingLeft  ? this.subBoxPaddingLeft:  '70px' };
padding-bottom: ${this.subBoxPaddingBottom  ? this.subBoxPaddingBottom:  '11px' };
padding-right: ${this.subBoxPaddingRight  ? this.subBoxPaddingRight:  '28px' };
justify-content: ${this.subBoxJustifyContent  ? this.subBoxJustifyContent:  'center' };
align-items: ${this.subBoxAlignItems  ? this.subBoxAlignItems:  'center' };
}

.description {
flex-basis:  ${this.descriptionFlexBasis ? this.descriptionFlexBasis : '85.12820512820512%'};
color: ${this.descriptionBackgroundColor ? this.descriptionBackgroundColor : '#ffffff'};
font-size: ${this.descriptionFontSize  ? this.descriptionFontSize:  '0.75rem' };
font-family: ${this.descriptionFontFamily  ? this.descriptionFontFamily:  'Roboto' };
font-weight: ${this.descriptionFontWeight  ? this.descriptionFontWeight:  '400' };
letter-spacing: ${this.descriptionLetterSpacing  ? this.descriptionLetterSpacing:  '0rem' };
text-align: ${this.descriptionTextAlign  ? this.descriptionTextAlign:  'left' };
line-height: ${this.descriptionLineHeight  ? this.descriptionLineHeight:  '0.87890625rem' };
}


            </style> 
            <div class="img">
</div>
<div class="textBox">
<div class="titleBox">
<p class="name">
   ${this.nameText  ? this.nameText:  'Albin Frick'
            }
</p>
</div>
<div class="subBox">
<p class="description">
   ${this.descriptionText  ? this.descriptionText:  ' M.Sc in Interaction and Design'
            }
</p>
</div>
</div>

        `;
    }    
}
 // NOT GENERATED CODE
