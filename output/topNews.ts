import { LitElement, html, customElement, property } from 'lit-element';
@customElement('top-news')
export class topNews extends LitElement { 
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
metaFlexBasis = '';

@property({type: String})
metaWidth = '';

@property({type: String})
metaHeight = '';

@property({type: String})
metaBorderRadius = '';

@property({type: String})
metaGap = '';

@property({type: String})
metaFlexDirection = '';

@property({type: String})
metaBackgroundColor = '';

@property({type: String})
metaBackgroundImage = '';

@property({type: String})
metaBackgroundSize = '';

@property({type: String})
metaBackgroundRepeat = '';

@property({type: String})
metaPaddingTop = '';

@property({type: String})
metaPaddingLeft = '';

@property({type: String})
metaPaddingBottom = '';

@property({type: String})
metaPaddingRight = '';

@property({type: String})
metaJustifyContent = '';

@property({type: String})
metaAlignItems = '';

@property({type: String})
timeFlexBasis = '';

@property({type: String})
timeWidth = '';

@property({type: String})
timeHeight = '';

@property({type: String})
timeBorderRadius = '';

@property({type: String})
timeGap = '';

@property({type: String})
timeFlexDirection = '';

@property({type: String})
timeBackgroundColor = '';

@property({type: String})
timeBackgroundImage = '';

@property({type: String})
timeBackgroundSize = '';

@property({type: String})
timeBackgroundRepeat = '';

@property({type: String})
timePaddingTop = '';

@property({type: String})
timePaddingLeft = '';

@property({type: String})
timePaddingBottom = '';

@property({type: String})
timePaddingRight = '';

@property({type: String})
timeJustifyContent = '';

@property({type: String})
timeAlignItems = '';

@property({type: String})
timeFontSize = '';

@property({type: String})
timeFontFamily = '';

@property({type: String})
timeFontWeight = '';

@property({type: String})
timeLetterSpacing = '';

@property({type: String})
timeTextAlign = '';

@property({type: String})
timeLineHeight = '';

@property({type: String})
coworkersFlexBasis = '';

@property({type: String})
coworkersWidth = '';

@property({type: String})
coworkersHeight = '';

@property({type: String})
coworkersBorderRadius = '';

@property({type: String})
coworkersGap = '';

@property({type: String})
coworkersFlexDirection = '';

@property({type: String})
coworkersBackgroundColor = '';

@property({type: String})
coworkersBackgroundImage = '';

@property({type: String})
coworkersBackgroundSize = '';

@property({type: String})
coworkersBackgroundRepeat = '';

@property({type: String})
coworkersPaddingTop = '';

@property({type: String})
coworkersPaddingLeft = '';

@property({type: String})
coworkersPaddingBottom = '';

@property({type: String})
coworkersPaddingRight = '';

@property({type: String})
coworkersJustifyContent = '';

@property({type: String})
coworkersAlignItems = '';

@property({type: String})
MedarbetareFlexBasis = '';

@property({type: String})
MedarbetareWidth = '';

@property({type: String})
MedarbetareHeight = '';

@property({type: String})
MedarbetareBorderRadius = '';

@property({type: String})
MedarbetareGap = '';

@property({type: String})
MedarbetareFlexDirection = '';

@property({type: String})
MedarbetareBackgroundColor = '';

@property({type: String})
MedarbetareBackgroundImage = '';

@property({type: String})
MedarbetareBackgroundSize = '';

@property({type: String})
MedarbetareBackgroundRepeat = '';

@property({type: String})
MedarbetarePaddingTop = '';

@property({type: String})
MedarbetarePaddingLeft = '';

@property({type: String})
MedarbetarePaddingBottom = '';

@property({type: String})
MedarbetarePaddingRight = '';

@property({type: String})
MedarbetareJustifyContent = '';

@property({type: String})
MedarbetareAlignItems = '';

@property({type: String})
MedarbetareFontSize = '';

@property({type: String})
MedarbetareFontFamily = '';

@property({type: String})
MedarbetareFontWeight = '';

@property({type: String})
MedarbetareLetterSpacing = '';

@property({type: String})
MedarbetareTextAlign = '';

@property({type: String})
MedarbetareLineHeight = '';

@property({type: String})
likesContainerFlexBasis = '';

@property({type: String})
likesContainerWidth = '';

@property({type: String})
likesContainerHeight = '';

@property({type: String})
likesContainerBorderRadius = '';

@property({type: String})
likesContainerGap = '';

@property({type: String})
likesContainerFlexDirection = '';

@property({type: String})
likesContainerBackgroundColor = '';

@property({type: String})
likesContainerBackgroundImage = '';

@property({type: String})
likesContainerBackgroundSize = '';

@property({type: String})
likesContainerBackgroundRepeat = '';

@property({type: String})
likesContainerPaddingTop = '';

@property({type: String})
likesContainerPaddingLeft = '';

@property({type: String})
likesContainerPaddingBottom = '';

@property({type: String})
likesContainerPaddingRight = '';

@property({type: String})
likesContainerJustifyContent = '';

@property({type: String})
likesContainerAlignItems = '';

@property({type: String})
likesFlexBasis = '';

@property({type: String})
likesWidth = '';

@property({type: String})
likesHeight = '';

@property({type: String})
likesBorderRadius = '';

@property({type: String})
likesGap = '';

@property({type: String})
likesFlexDirection = '';

@property({type: String})
likesBackgroundColor = '';

@property({type: String})
likesBackgroundImage = '';

@property({type: String})
likesBackgroundSize = '';

@property({type: String})
likesBackgroundRepeat = '';

@property({type: String})
likesPaddingTop = '';

@property({type: String})
likesPaddingLeft = '';

@property({type: String})
likesPaddingBottom = '';

@property({type: String})
likesPaddingRight = '';

@property({type: String})
likesJustifyContent = '';

@property({type: String})
likesAlignItems = '';

@property({type: String})
likesFontSize = '';

@property({type: String})
likesFontFamily = '';

@property({type: String})
likesFontWeight = '';

@property({type: String})
likesLetterSpacing = '';

@property({type: String})
likesTextAlign = '';

@property({type: String})
likesLineHeight = '';

@property({type: String})
commentsContainerFlexBasis = '';

@property({type: String})
commentsContainerWidth = '';

@property({type: String})
commentsContainerHeight = '';

@property({type: String})
commentsContainerBorderRadius = '';

@property({type: String})
commentsContainerGap = '';

@property({type: String})
commentsContainerFlexDirection = '';

@property({type: String})
commentsContainerBackgroundColor = '';

@property({type: String})
commentsContainerBackgroundImage = '';

@property({type: String})
commentsContainerBackgroundSize = '';

@property({type: String})
commentsContainerBackgroundRepeat = '';

@property({type: String})
commentsContainerPaddingTop = '';

@property({type: String})
commentsContainerPaddingLeft = '';

@property({type: String})
commentsContainerPaddingBottom = '';

@property({type: String})
commentsContainerPaddingRight = '';

@property({type: String})
commentsContainerJustifyContent = '';

@property({type: String})
commentsContainerAlignItems = '';

@property({type: String})
commentsFlexBasis = '';

@property({type: String})
commentsWidth = '';

@property({type: String})
commentsHeight = '';

@property({type: String})
commentsBorderRadius = '';

@property({type: String})
commentsGap = '';

@property({type: String})
commentsFlexDirection = '';

@property({type: String})
commentsBackgroundColor = '';

@property({type: String})
commentsBackgroundImage = '';

@property({type: String})
commentsBackgroundSize = '';

@property({type: String})
commentsBackgroundRepeat = '';

@property({type: String})
commentsPaddingTop = '';

@property({type: String})
commentsPaddingLeft = '';

@property({type: String})
commentsPaddingBottom = '';

@property({type: String})
commentsPaddingRight = '';

@property({type: String})
commentsJustifyContent = '';

@property({type: String})
commentsAlignItems = '';

@property({type: String})
commentsFontSize = '';

@property({type: String})
commentsFontFamily = '';

@property({type: String})
commentsFontWeight = '';

@property({type: String})
commentsLetterSpacing = '';

@property({type: String})
commentsTextAlign = '';

@property({type: String})
commentsLineHeight = '';

@property({type: String})
titleText = '';

@property({type: String})
timeText = '';

@property({type: String})
MedarbetareText = '';

@property({type: String})
likesText = '';

@property({type: String})
commentsText = '';


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
width: ${this.width  ? this.width:  '395px' };
height: ${this.height  ? this.height:  '390px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'column' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#ffffff' };
}

.img {
display: flex;
flex-basis:  ${this.imgFlexBasis ? this.imgFlexBasis : '54.1025641025641%'};
width: ${this.imgWidth  ? this.imgWidth:  '100%' };
height: ${this.imgHeight  ? this.imgHeight:  '54%' };
flex-direction: ${this.imgFlexDirection  ? this.imgFlexDirection:  'column' };
justify-content: ${this.imgJustifyContent  ? this.imgJustifyContent:  'center' };
align-items: ${this.imgAlignItems  ? this.imgAlignItems:  'center' };
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '37.69230769230769%'};
width: ${this.textBoxWidth  ? this.textBoxWidth:  '88%' };
height: ${this.textBoxHeight  ? this.textBoxHeight:  '38%' };
flex-direction: ${this.textBoxFlexDirection  ? this.textBoxFlexDirection:  'column' };
padding-top: ${this.textBoxPaddingTop  ? this.textBoxPaddingTop:  '16px' };
padding-left: ${this.textBoxPaddingLeft  ? this.textBoxPaddingLeft:  '24px' };
padding-bottom: ${this.textBoxPaddingBottom  ? this.textBoxPaddingBottom:  '16px' };
padding-right: ${this.textBoxPaddingRight  ? this.textBoxPaddingRight:  '24px' };
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '87.75510204081633%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#000000'};
font-size: ${this.titleFontSize  ? this.titleFontSize:  '1.5rem' };
font-family: ${this.titleFontFamily  ? this.titleFontFamily:  'Open Sans' };
font-weight: ${this.titleFontWeight  ? this.titleFontWeight:  '700' };
letter-spacing: ${this.titleLetterSpacing  ? this.titleLetterSpacing:  '0rem' };
text-align: ${this.titleTextAlign  ? this.titleTextAlign:  'left' };
line-height: ${this.titleLineHeight  ? this.titleLineHeight:  '1.8125rem' };
}

.meta {
display: flex;
flex-basis:  ${this.metaFlexBasis ? this.metaFlexBasis : '12.244897959183673%'};
width: ${this.metaWidth  ? this.metaWidth:  '100%' };
height: ${this.metaHeight  ? this.metaHeight:  '12%' };
gap: ${this.metaGap  ? this.metaGap:  '16px' };
flex-direction: ${this.metaFlexDirection  ? this.metaFlexDirection:  'row' };
align-items: ${this.metaAlignItems  ? this.metaAlignItems:  'center' };
}

.time {
flex-basis:  ${this.timeFlexBasis ? this.timeFlexBasis : '19.596541786743515%'};
font-size: ${this.timeFontSize  ? this.timeFontSize:  '0.875rem' };
font-family: ${this.timeFontFamily  ? this.timeFontFamily:  'Open Sans' };
font-weight: ${this.timeFontWeight  ? this.timeFontWeight:  '400' };
letter-spacing: ${this.timeLetterSpacing  ? this.timeLetterSpacing:  '0rem' };
text-align: ${this.timeTextAlign  ? this.timeTextAlign:  'left' };
line-height: ${this.timeLineHeight  ? this.timeLineHeight:  '1.125rem' };
}

.coworkers {
display: flex;
flex-basis:  ${this.coworkersFlexBasis ? this.coworkersFlexBasis : '31.412103746397698%'};
width: ${this.coworkersWidth  ? this.coworkersWidth:  '31%' };
height: ${this.coworkersHeight  ? this.coworkersHeight:  '100%' };
gap: ${this.coworkersGap  ? this.coworkersGap:  '5.5px' };
flex-direction: ${this.coworkersFlexDirection  ? this.coworkersFlexDirection:  'row' };
align-items: ${this.coworkersAlignItems  ? this.coworkersAlignItems:  'center' };
}

.Medarbetare {
flex-basis:  ${this.MedarbetareFlexBasis ? this.MedarbetareFlexBasis : '78.89908256880734%'};
font-size: ${this.MedarbetareFontSize  ? this.MedarbetareFontSize:  '0.875rem' };
font-family: ${this.MedarbetareFontFamily  ? this.MedarbetareFontFamily:  'Open Sans' };
font-weight: ${this.MedarbetareFontWeight  ? this.MedarbetareFontWeight:  '400' };
letter-spacing: ${this.MedarbetareLetterSpacing  ? this.MedarbetareLetterSpacing:  '0rem' };
text-align: ${this.MedarbetareTextAlign  ? this.MedarbetareTextAlign:  'left' };
line-height: ${this.MedarbetareLineHeight  ? this.MedarbetareLineHeight:  '1.125rem' };
}

.likesContainer {
display: flex;
flex-basis:  ${this.likesContainerFlexBasis ? this.likesContainerFlexBasis : '9.221902017291066%'};
width: ${this.likesContainerWidth  ? this.likesContainerWidth:  '9%' };
height: ${this.likesContainerHeight  ? this.likesContainerHeight:  '100%' };
gap: ${this.likesContainerGap  ? this.likesContainerGap:  '5.5px' };
flex-direction: ${this.likesContainerFlexDirection  ? this.likesContainerFlexDirection:  'row' };
align-items: ${this.likesContainerAlignItems  ? this.likesContainerAlignItems:  'center' };
}

.likes {
flex-basis:  ${this.likesFlexBasis ? this.likesFlexBasis : '28.125%'};
font-size: ${this.likesFontSize  ? this.likesFontSize:  '0.875rem' };
font-family: ${this.likesFontFamily  ? this.likesFontFamily:  'Open Sans' };
font-weight: ${this.likesFontWeight  ? this.likesFontWeight:  '400' };
letter-spacing: ${this.likesLetterSpacing  ? this.likesLetterSpacing:  '0rem' };
text-align: ${this.likesTextAlign  ? this.likesTextAlign:  'left' };
line-height: ${this.likesLineHeight  ? this.likesLineHeight:  '1.125rem' };
}

.commentsContainer {
display: flex;
flex-basis:  ${this.commentsContainerFlexBasis ? this.commentsContainerFlexBasis : '9.798270893371757%'};
width: ${this.commentsContainerWidth  ? this.commentsContainerWidth:  '10%' };
height: ${this.commentsContainerHeight  ? this.commentsContainerHeight:  '100%' };
gap: ${this.commentsContainerGap  ? this.commentsContainerGap:  '7px' };
flex-direction: ${this.commentsContainerFlexDirection  ? this.commentsContainerFlexDirection:  'row' };
align-items: ${this.commentsContainerAlignItems  ? this.commentsContainerAlignItems:  'center' };
}

.comments {
flex-basis:  ${this.commentsFlexBasis ? this.commentsFlexBasis : '26.47058823529412%'};
font-size: ${this.commentsFontSize  ? this.commentsFontSize:  '0.875rem' };
font-family: ${this.commentsFontFamily  ? this.commentsFontFamily:  'Open Sans' };
font-weight: ${this.commentsFontWeight  ? this.commentsFontWeight:  '400' };
letter-spacing: ${this.commentsLetterSpacing  ? this.commentsLetterSpacing:  '0rem' };
text-align: ${this.commentsTextAlign  ? this.commentsTextAlign:  'left' };
line-height: ${this.commentsLineHeight  ? this.commentsLineHeight:  '1.125rem' };
}


            </style> 
            <div class="img">
<slot name="topImg">
</slot>
</div>
<div class="textBox">
<p class="title">
   ${this.titleText  ? this.titleText:  'Kan ny teknik lösa informationsutmaning – det ska sommarens internship undersöka'
            }
</p>
<div class="meta">
<p class="time">
   ${this.timeText  ? this.timeText:  'Idag 15:53'
            }
</p>
<div class="coworkers">
<slot name="channel">
</slot>
<p class="Medarbetare">
   ${this.MedarbetareText  ? this.MedarbetareText:  'Medarbetare'
            }
</p>
</div>
<div class="likesContainer">
<slot name="likes">
</slot>
<p class="likes">
   ${this.likesText  ? this.likesText:  '1'
            }
</p>
</div>
<div class="commentsContainer">
<slot name="comments">
</slot>
<p class="comments">
   ${this.commentsText  ? this.commentsText:  '0'
            }
</p>
</div>
</div>
</div>

        `;
    }    
}
 // NOT GENERATED CODE
