var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let topNews = class topNews extends LitElement {
    constructor() {
        super(...arguments);
        this.externalStyleSheet = '';
        this.width = '';
        this.height = '';
        this.borderRadius = '';
        this.gap = '';
        this.flexDirection = '';
        this.backgroundColor = '';
        this.backgroundImage = '';
        this.backgroundSize = '';
        this.backgroundRepeat = '';
        this.paddingTop = '';
        this.paddingLeft = '';
        this.paddingBottom = '';
        this.paddingRight = '';
        this.justifyContent = '';
        this.alignItems = '';
        this.imgFlexBasis = '';
        this.imgWidth = '';
        this.imgHeight = '';
        this.imgBorderRadius = '';
        this.imgGap = '';
        this.imgFlexDirection = '';
        this.imgBackgroundColor = '';
        this.imgBackgroundImage = '';
        this.imgBackgroundSize = '';
        this.imgBackgroundRepeat = '';
        this.imgPaddingTop = '';
        this.imgPaddingLeft = '';
        this.imgPaddingBottom = '';
        this.imgPaddingRight = '';
        this.imgJustifyContent = '';
        this.imgAlignItems = '';
        this.textBoxFlexBasis = '';
        this.textBoxWidth = '';
        this.textBoxHeight = '';
        this.textBoxBorderRadius = '';
        this.textBoxGap = '';
        this.textBoxFlexDirection = '';
        this.textBoxBackgroundColor = '';
        this.textBoxBackgroundImage = '';
        this.textBoxBackgroundSize = '';
        this.textBoxBackgroundRepeat = '';
        this.textBoxPaddingTop = '';
        this.textBoxPaddingLeft = '';
        this.textBoxPaddingBottom = '';
        this.textBoxPaddingRight = '';
        this.textBoxJustifyContent = '';
        this.textBoxAlignItems = '';
        this.titleFlexBasis = '';
        this.titleWidth = '';
        this.titleHeight = '';
        this.titleBorderRadius = '';
        this.titleGap = '';
        this.titleFlexDirection = '';
        this.titleBackgroundColor = '';
        this.titleFontSize = '';
        this.titleFontFamily = '';
        this.titleFontWeight = '';
        this.titleLetterSpacing = '';
        this.titleTextAlign = '';
        this.titleLineHeight = '';
        this.metaFlexBasis = '';
        this.metaWidth = '';
        this.metaHeight = '';
        this.metaBorderRadius = '';
        this.metaGap = '';
        this.metaFlexDirection = '';
        this.metaBackgroundColor = '';
        this.metaBackgroundImage = '';
        this.metaBackgroundSize = '';
        this.metaBackgroundRepeat = '';
        this.metaPaddingTop = '';
        this.metaPaddingLeft = '';
        this.metaPaddingBottom = '';
        this.metaPaddingRight = '';
        this.metaJustifyContent = '';
        this.metaAlignItems = '';
        this.timeFlexBasis = '';
        this.timeWidth = '';
        this.timeHeight = '';
        this.timeBorderRadius = '';
        this.timeGap = '';
        this.timeFlexDirection = '';
        this.timeBackgroundColor = '';
        this.timeBackgroundImage = '';
        this.timeBackgroundSize = '';
        this.timeBackgroundRepeat = '';
        this.timePaddingTop = '';
        this.timePaddingLeft = '';
        this.timePaddingBottom = '';
        this.timePaddingRight = '';
        this.timeJustifyContent = '';
        this.timeAlignItems = '';
        this.timeFontSize = '';
        this.timeFontFamily = '';
        this.timeFontWeight = '';
        this.timeLetterSpacing = '';
        this.timeTextAlign = '';
        this.timeLineHeight = '';
        this.coworkersFlexBasis = '';
        this.coworkersWidth = '';
        this.coworkersHeight = '';
        this.coworkersBorderRadius = '';
        this.coworkersGap = '';
        this.coworkersFlexDirection = '';
        this.coworkersBackgroundColor = '';
        this.coworkersBackgroundImage = '';
        this.coworkersBackgroundSize = '';
        this.coworkersBackgroundRepeat = '';
        this.coworkersPaddingTop = '';
        this.coworkersPaddingLeft = '';
        this.coworkersPaddingBottom = '';
        this.coworkersPaddingRight = '';
        this.coworkersJustifyContent = '';
        this.coworkersAlignItems = '';
        this.MedarbetareFlexBasis = '';
        this.MedarbetareWidth = '';
        this.MedarbetareHeight = '';
        this.MedarbetareBorderRadius = '';
        this.MedarbetareGap = '';
        this.MedarbetareFlexDirection = '';
        this.MedarbetareBackgroundColor = '';
        this.MedarbetareBackgroundImage = '';
        this.MedarbetareBackgroundSize = '';
        this.MedarbetareBackgroundRepeat = '';
        this.MedarbetarePaddingTop = '';
        this.MedarbetarePaddingLeft = '';
        this.MedarbetarePaddingBottom = '';
        this.MedarbetarePaddingRight = '';
        this.MedarbetareJustifyContent = '';
        this.MedarbetareAlignItems = '';
        this.MedarbetareFontSize = '';
        this.MedarbetareFontFamily = '';
        this.MedarbetareFontWeight = '';
        this.MedarbetareLetterSpacing = '';
        this.MedarbetareTextAlign = '';
        this.MedarbetareLineHeight = '';
        this.likesContainerFlexBasis = '';
        this.likesContainerWidth = '';
        this.likesContainerHeight = '';
        this.likesContainerBorderRadius = '';
        this.likesContainerGap = '';
        this.likesContainerFlexDirection = '';
        this.likesContainerBackgroundColor = '';
        this.likesContainerBackgroundImage = '';
        this.likesContainerBackgroundSize = '';
        this.likesContainerBackgroundRepeat = '';
        this.likesContainerPaddingTop = '';
        this.likesContainerPaddingLeft = '';
        this.likesContainerPaddingBottom = '';
        this.likesContainerPaddingRight = '';
        this.likesContainerJustifyContent = '';
        this.likesContainerAlignItems = '';
        this.likesFlexBasis = '';
        this.likesWidth = '';
        this.likesHeight = '';
        this.likesBorderRadius = '';
        this.likesGap = '';
        this.likesFlexDirection = '';
        this.likesBackgroundColor = '';
        this.likesBackgroundImage = '';
        this.likesBackgroundSize = '';
        this.likesBackgroundRepeat = '';
        this.likesPaddingTop = '';
        this.likesPaddingLeft = '';
        this.likesPaddingBottom = '';
        this.likesPaddingRight = '';
        this.likesJustifyContent = '';
        this.likesAlignItems = '';
        this.likesFontSize = '';
        this.likesFontFamily = '';
        this.likesFontWeight = '';
        this.likesLetterSpacing = '';
        this.likesTextAlign = '';
        this.likesLineHeight = '';
        this.commentsContainerFlexBasis = '';
        this.commentsContainerWidth = '';
        this.commentsContainerHeight = '';
        this.commentsContainerBorderRadius = '';
        this.commentsContainerGap = '';
        this.commentsContainerFlexDirection = '';
        this.commentsContainerBackgroundColor = '';
        this.commentsContainerBackgroundImage = '';
        this.commentsContainerBackgroundSize = '';
        this.commentsContainerBackgroundRepeat = '';
        this.commentsContainerPaddingTop = '';
        this.commentsContainerPaddingLeft = '';
        this.commentsContainerPaddingBottom = '';
        this.commentsContainerPaddingRight = '';
        this.commentsContainerJustifyContent = '';
        this.commentsContainerAlignItems = '';
        this.commentsFlexBasis = '';
        this.commentsWidth = '';
        this.commentsHeight = '';
        this.commentsBorderRadius = '';
        this.commentsGap = '';
        this.commentsFlexDirection = '';
        this.commentsBackgroundColor = '';
        this.commentsBackgroundImage = '';
        this.commentsBackgroundSize = '';
        this.commentsBackgroundRepeat = '';
        this.commentsPaddingTop = '';
        this.commentsPaddingLeft = '';
        this.commentsPaddingBottom = '';
        this.commentsPaddingRight = '';
        this.commentsJustifyContent = '';
        this.commentsAlignItems = '';
        this.commentsFontSize = '';
        this.commentsFontFamily = '';
        this.commentsFontWeight = '';
        this.commentsLetterSpacing = '';
        this.commentsTextAlign = '';
        this.commentsLineHeight = '';
        this.titleText = '';
        this.timeText = '';
        this.MedarbetareText = '';
        this.likesText = '';
        this.commentsText = '';
    }
    render() {
        return html `
            <link rel="stylesheet" href="${this.externalStyleSheet}" />
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width ? this.width : '395px'};
height: ${this.height ? this.height : '390px'};
flex-direction: ${this.flexDirection ? this.flexDirection : 'column'};
background-color: ${this.backgroundColor ? this.backgroundColor : '#ffffff'};
}

.img {
display: flex;
flex-basis:  ${this.imgFlexBasis ? this.imgFlexBasis : '54.1025641025641%'};
width: ${this.imgWidth ? this.imgWidth : '100%'};
height: ${this.imgHeight ? this.imgHeight : '54%'};
flex-direction: ${this.imgFlexDirection ? this.imgFlexDirection : 'column'};
justify-content: ${this.imgJustifyContent ? this.imgJustifyContent : 'center'};
align-items: ${this.imgAlignItems ? this.imgAlignItems : 'center'};
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '37.69230769230769%'};
width: ${this.textBoxWidth ? this.textBoxWidth : '88%'};
height: ${this.textBoxHeight ? this.textBoxHeight : '38%'};
flex-direction: ${this.textBoxFlexDirection ? this.textBoxFlexDirection : 'column'};
padding-top: ${this.textBoxPaddingTop ? this.textBoxPaddingTop : '16px'};
padding-left: ${this.textBoxPaddingLeft ? this.textBoxPaddingLeft : '24px'};
padding-bottom: ${this.textBoxPaddingBottom ? this.textBoxPaddingBottom : '16px'};
padding-right: ${this.textBoxPaddingRight ? this.textBoxPaddingRight : '24px'};
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '87.75510204081633%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#000000'};
font-size: ${this.titleFontSize ? this.titleFontSize : '1.5rem'};
font-family: ${this.titleFontFamily ? this.titleFontFamily : 'Open Sans'};
font-weight: ${this.titleFontWeight ? this.titleFontWeight : '700'};
letter-spacing: ${this.titleLetterSpacing ? this.titleLetterSpacing : '0rem'};
text-align: ${this.titleTextAlign ? this.titleTextAlign : 'left'};
line-height: ${this.titleLineHeight ? this.titleLineHeight : '1.8125rem'};
}

.meta {
display: flex;
flex-basis:  ${this.metaFlexBasis ? this.metaFlexBasis : '12.244897959183673%'};
width: ${this.metaWidth ? this.metaWidth : '100%'};
height: ${this.metaHeight ? this.metaHeight : '12%'};
gap: ${this.metaGap ? this.metaGap : '16px'};
flex-direction: ${this.metaFlexDirection ? this.metaFlexDirection : 'row'};
align-items: ${this.metaAlignItems ? this.metaAlignItems : 'center'};
}

.time {
flex-basis:  ${this.timeFlexBasis ? this.timeFlexBasis : '19.596541786743515%'};
font-size: ${this.timeFontSize ? this.timeFontSize : '0.875rem'};
font-family: ${this.timeFontFamily ? this.timeFontFamily : 'Open Sans'};
font-weight: ${this.timeFontWeight ? this.timeFontWeight : '400'};
letter-spacing: ${this.timeLetterSpacing ? this.timeLetterSpacing : '0rem'};
text-align: ${this.timeTextAlign ? this.timeTextAlign : 'left'};
line-height: ${this.timeLineHeight ? this.timeLineHeight : '1.125rem'};
}

.coworkers {
display: flex;
flex-basis:  ${this.coworkersFlexBasis ? this.coworkersFlexBasis : '31.412103746397698%'};
width: ${this.coworkersWidth ? this.coworkersWidth : '31%'};
height: ${this.coworkersHeight ? this.coworkersHeight : '100%'};
gap: ${this.coworkersGap ? this.coworkersGap : '5.5px'};
flex-direction: ${this.coworkersFlexDirection ? this.coworkersFlexDirection : 'row'};
align-items: ${this.coworkersAlignItems ? this.coworkersAlignItems : 'center'};
}

.Medarbetare {
flex-basis:  ${this.MedarbetareFlexBasis ? this.MedarbetareFlexBasis : '78.89908256880734%'};
font-size: ${this.MedarbetareFontSize ? this.MedarbetareFontSize : '0.875rem'};
font-family: ${this.MedarbetareFontFamily ? this.MedarbetareFontFamily : 'Open Sans'};
font-weight: ${this.MedarbetareFontWeight ? this.MedarbetareFontWeight : '400'};
letter-spacing: ${this.MedarbetareLetterSpacing ? this.MedarbetareLetterSpacing : '0rem'};
text-align: ${this.MedarbetareTextAlign ? this.MedarbetareTextAlign : 'left'};
line-height: ${this.MedarbetareLineHeight ? this.MedarbetareLineHeight : '1.125rem'};
}

.likesContainer {
display: flex;
flex-basis:  ${this.likesContainerFlexBasis ? this.likesContainerFlexBasis : '9.221902017291066%'};
width: ${this.likesContainerWidth ? this.likesContainerWidth : '9%'};
height: ${this.likesContainerHeight ? this.likesContainerHeight : '100%'};
gap: ${this.likesContainerGap ? this.likesContainerGap : '5.5px'};
flex-direction: ${this.likesContainerFlexDirection ? this.likesContainerFlexDirection : 'row'};
align-items: ${this.likesContainerAlignItems ? this.likesContainerAlignItems : 'center'};
}

.likes {
flex-basis:  ${this.likesFlexBasis ? this.likesFlexBasis : '28.125%'};
font-size: ${this.likesFontSize ? this.likesFontSize : '0.875rem'};
font-family: ${this.likesFontFamily ? this.likesFontFamily : 'Open Sans'};
font-weight: ${this.likesFontWeight ? this.likesFontWeight : '400'};
letter-spacing: ${this.likesLetterSpacing ? this.likesLetterSpacing : '0rem'};
text-align: ${this.likesTextAlign ? this.likesTextAlign : 'left'};
line-height: ${this.likesLineHeight ? this.likesLineHeight : '1.125rem'};
}

.commentsContainer {
display: flex;
flex-basis:  ${this.commentsContainerFlexBasis ? this.commentsContainerFlexBasis : '9.798270893371757%'};
width: ${this.commentsContainerWidth ? this.commentsContainerWidth : '10%'};
height: ${this.commentsContainerHeight ? this.commentsContainerHeight : '100%'};
gap: ${this.commentsContainerGap ? this.commentsContainerGap : '7px'};
flex-direction: ${this.commentsContainerFlexDirection ? this.commentsContainerFlexDirection : 'row'};
align-items: ${this.commentsContainerAlignItems ? this.commentsContainerAlignItems : 'center'};
}

.comments {
flex-basis:  ${this.commentsFlexBasis ? this.commentsFlexBasis : '26.47058823529412%'};
font-size: ${this.commentsFontSize ? this.commentsFontSize : '0.875rem'};
font-family: ${this.commentsFontFamily ? this.commentsFontFamily : 'Open Sans'};
font-weight: ${this.commentsFontWeight ? this.commentsFontWeight : '400'};
letter-spacing: ${this.commentsLetterSpacing ? this.commentsLetterSpacing : '0rem'};
text-align: ${this.commentsTextAlign ? this.commentsTextAlign : 'left'};
line-height: ${this.commentsLineHeight ? this.commentsLineHeight : '1.125rem'};
}


            </style> 
            <div class="img">
<slot name="topImg">
</slot>
</div>
<div class="textBox">
<p class="title">
   ${this.titleText ? this.titleText : 'Kan ny teknik lösa informationsutmaning – det ska sommarens internship undersöka'}
</p>
<div class="meta">
<p class="time">
   ${this.timeText ? this.timeText : 'Idag 15:53'}
</p>
<div class="coworkers">
<slot name="channel">
</slot>
<p class="Medarbetare">
   ${this.MedarbetareText ? this.MedarbetareText : 'Medarbetare'}
</p>
</div>
<div class="likesContainer">
<slot name="likes">
</slot>
<p class="likes">
   ${this.likesText ? this.likesText : '1'}
</p>
</div>
<div class="commentsContainer">
<slot name="comments">
</slot>
<p class="comments">
   ${this.commentsText ? this.commentsText : '0'}
</p>
</div>
</div>
</div>

        `;
    }
};
__decorate([
    property({ type: String })
], topNews.prototype, "externalStyleSheet", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "width", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "height", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "imgAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "textBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleFontSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleFontFamily", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleFontWeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleTextAlign", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleLineHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "metaAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timePaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timePaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timePaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timePaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeFontSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeFontFamily", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeFontWeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeTextAlign", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeLineHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "coworkersAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetarePaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetarePaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetarePaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetarePaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareFontSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareFontFamily", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareFontWeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareTextAlign", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareLineHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesContainerAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesFontSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesFontFamily", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesFontWeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesTextAlign", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesLineHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsContainerAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsWidth", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsGap", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsAlignItems", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsFontSize", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsFontFamily", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsFontWeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsTextAlign", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsLineHeight", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "timeText", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "MedarbetareText", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "likesText", void 0);
__decorate([
    property({ type: String })
], topNews.prototype, "commentsText", void 0);
topNews = __decorate([
    customElement('top-news')
], topNews);
export { topNews };
// NOT GENERATED CODE
