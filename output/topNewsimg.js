var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let topNewsimg = class topNewsimg extends LitElement {
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
flex-basis:  ${this.imgFlexBasis ? this.imgFlexBasis : '50%'};
width: ${this.imgWidth ? this.imgWidth : '100%'};
height: ${this.imgHeight ? this.imgHeight : '50%'};
border-radius: ${this.imgBorderRadius ? this.imgBorderRadius : ' 3px 3px 0px 0px'};
background-image: ${this.imgBackgroundImage ? this.imgBackgroundImage : 'url(https://s3-alpha-sig.figma.com/img/8491/4d75/835822ba7ed023436a57574a6578ed9a?Expires=1618185600&Signature=LDy6vHPm-QiDFQNELH5W9qwZi-2JwAYbUzLo5noNX-lwTN8WsBkBrFwnqXy5UTGL1Qx5hUXfXfUp60vz-VmI7PRwXn1DrncGypgl6HdGD37aA361J8uSoB79tfy8vANPVSaDH~OOl-UIF6LKrzgf6awDNCm3Ms8xy61KB1-~eOMMoAtXLX40Lt9bKa8Zkz1AHgX9fjZjDO~GCg8ae8gKfi6Jc29KhaGK0t2VUWTdXt8~aY7ZoNAQFkselydKlI4sAz8wCGepnNTEscsD~BhmvXuTxEzTp7G5LF1Qm5sxBrHLdg50x5uR13sCYh6FMs-zXSzkU61An69GFd1aunMuhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'};
background-size: ${this.imgBackgroundSize ? this.imgBackgroundSize : 'cover'};
background-repeat: ${this.imgBackgroundRepeat ? this.imgBackgroundRepeat : 'no-repeat'};
}

.textBox {
display: flex;
flex-basis:  ${this.textBoxFlexBasis ? this.textBoxFlexBasis : '41.794871794871796%'};
width: ${this.textBoxWidth ? this.textBoxWidth : '88%'};
height: ${this.textBoxHeight ? this.textBoxHeight : '42%'};
flex-direction: ${this.textBoxFlexDirection ? this.textBoxFlexDirection : 'column'};
padding-top: ${this.textBoxPaddingTop ? this.textBoxPaddingTop : '16px'};
padding-left: ${this.textBoxPaddingLeft ? this.textBoxPaddingLeft : '24px'};
padding-bottom: ${this.textBoxPaddingBottom ? this.textBoxPaddingBottom : '16px'};
padding-right: ${this.textBoxPaddingRight ? this.textBoxPaddingRight : '24px'};
}

.title {
flex-basis:  ${this.titleFlexBasis ? this.titleFlexBasis : '88.95705521472392%'};
color: ${this.titleBackgroundColor ? this.titleBackgroundColor : '#000000'};
font-size: ${this.titleFontSize ? this.titleFontSize : '1.5rem'};
font-family: ${this.titleFontFamily ? this.titleFontFamily : 'Montserrat'};
font-weight: ${this.titleFontWeight ? this.titleFontWeight : '400'};
letter-spacing: ${this.titleLetterSpacing ? this.titleLetterSpacing : '0rem'};
text-align: ${this.titleTextAlign ? this.titleTextAlign : 'left'};
line-height: ${this.titleLineHeight ? this.titleLineHeight : '1.8125rem'};
}

.meta {
display: flex;
flex-basis:  ${this.metaFlexBasis ? this.metaFlexBasis : '11.042944785276074%'};
width: ${this.metaWidth ? this.metaWidth : '100%'};
height: ${this.metaHeight ? this.metaHeight : '11%'};
gap: ${this.metaGap ? this.metaGap : '16px'};
flex-direction: ${this.metaFlexDirection ? this.metaFlexDirection : 'row'};
align-items: ${this.metaAlignItems ? this.metaAlignItems : 'center'};
}

.time {
flex-basis:  ${this.timeFlexBasis ? this.timeFlexBasis : '19.30835734870317%'};
color: ${this.timeBackgroundColor ? this.timeBackgroundColor : '#717070'};
font-size: ${this.timeFontSize ? this.timeFontSize : '0.875rem'};
font-family: ${this.timeFontFamily ? this.timeFontFamily : 'Montserrat'};
font-weight: ${this.timeFontWeight ? this.timeFontWeight : '400'};
letter-spacing: ${this.timeLetterSpacing ? this.timeLetterSpacing : '0rem'};
text-align: ${this.timeTextAlign ? this.timeTextAlign : 'left'};
line-height: ${this.timeLineHeight ? this.timeLineHeight : '1.125rem'};
}

.coworkers {
display: flex;
flex-basis:  ${this.coworkersFlexBasis ? this.coworkersFlexBasis : '32.85302593659942%'};
width: ${this.coworkersWidth ? this.coworkersWidth : '33%'};
height: ${this.coworkersHeight ? this.coworkersHeight : '100%'};
gap: ${this.coworkersGap ? this.coworkersGap : '5.5px'};
flex-direction: ${this.coworkersFlexDirection ? this.coworkersFlexDirection : 'row'};
align-items: ${this.coworkersAlignItems ? this.coworkersAlignItems : 'center'};
}

.Medarbetare {
flex-basis:  ${this.MedarbetareFlexBasis ? this.MedarbetareFlexBasis : '79.82456140350878%'};
color: ${this.MedarbetareBackgroundColor ? this.MedarbetareBackgroundColor : '#717070'};
font-size: ${this.MedarbetareFontSize ? this.MedarbetareFontSize : '0.875rem'};
font-family: ${this.MedarbetareFontFamily ? this.MedarbetareFontFamily : 'Montserrat'};
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
], topNewsimg.prototype, "externalStyleSheet", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "width", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "height", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "borderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "gap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "flexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "backgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "backgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "paddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "paddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "paddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "paddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "imgAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBoxAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleFontSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleFontFamily", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleFontWeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleTextAlign", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleLineHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "metaAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeFontSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeFontFamily", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeFontWeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeTextAlign", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeLineHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkersAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareFontSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareFontFamily", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareFontWeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareTextAlign", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareLineHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainerAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesFontSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesFontFamily", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesFontWeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesTextAlign", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesLineHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainerAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsFlexBasis", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsWidth", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsBorderRadius", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsGap", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsFlexDirection", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsBackgroundColor", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsBackgroundImage", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsBackgroundSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsBackgroundRepeat", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsPaddingTop", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsPaddingLeft", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsPaddingBottom", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsPaddingRight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsJustifyContent", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsAlignItems", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsFontSize", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsFontFamily", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsFontWeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsLetterSpacing", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsTextAlign", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsLineHeight", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "titleText", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "timeText", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "MedarbetareText", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesText", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsText", void 0);
topNewsimg = __decorate([
    customElement('top-newsimg')
], topNewsimg);
export { topNewsimg };
// NOT GENERATED CODE
