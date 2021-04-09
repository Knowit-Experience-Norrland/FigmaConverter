var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
var topNewsimgMap = new Map();
var imgMap = new Map();
var textBoxMap = new Map();
var titleMap = new Map();
var metaMap = new Map();
var timeMap = new Map();
var coworkersMap = new Map();
var SLOTchannelMap = new Map();
var MedarbetareMap = new Map();
var likesContainerMap = new Map();
var SLOTlikesMap = new Map();
var likesMap = new Map();
var commentsContainerMap = new Map();
var SLOTcommentsMap = new Map();
var commentsMap = new Map();
topNewsimgMap.set('display', 'flex');
topNewsimgMap.set('width', '395px');
topNewsimgMap.set('height', '390px');
topNewsimgMap.set('flex-direction', 'column');
topNewsimgMap.set('background-color', '#ffffff');
imgMap.set('flex-basis', '50%');
imgMap.set('width', '100%');
imgMap.set('height', '50%');
imgMap.set('border-radius', ' 3px 3px 0px 0px');
imgMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/8491/4d75/835822ba7ed023436a57574a6578ed9a?Expires=1618790400&Signature=WbjWbcDBF51aVviyFRgZ~D5cbBDh6cfctourm7av-05u51efQzn0ct17YcSapwuwoVsr0VPJiON9TwwMNRPc3TvxjK0MHBSAtoik7Ti7wTGxPX4oZfTzENIa~82r8VyeOoO0NvYgpFxfxOpc8WwHG-PH-CsJJsrQi9unzYHjT5hNdnRztlsE4p1i3stNy6o2TMQkGfOfZGW1VFEGnnqrHriFKQURDXfY~gZeimSnN6bNo5JNqAggJ2WJZo3h05TYHrp7Np~hYp2q44sXJtn1d9aBwOFwY7zMoVRMcvnA6Ikrpf0uaFRKC-dKJUUNUiu3Tn4nFW-uwJhtg7Mdrq7CSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
imgMap.set('background-size', 'cover');
imgMap.set('background-repeat', 'no-repeat');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '50%');
textBoxMap.set('width', 'calc(100% - 48px)');
textBoxMap.set('height', 'calc(50% - 32px)');
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('padding-top', '16px');
textBoxMap.set('padding-left', '24px');
textBoxMap.set('padding-bottom', '16px');
textBoxMap.set('padding-right', '24px');
titleMap.set('flex-basis', '74.35897435897436%');
titleMap.set('color', '#000000');
titleMap.set('font-size', '1.5rem');
titleMap.set('font-family', 'Montserrat');
titleMap.set('font-weight', '400');
titleMap.set('text-align', 'left');
metaMap.set('display', 'flex');
metaMap.set('flex-basis', '9.230769230769232%');
metaMap.set('width', '88%');
metaMap.set('height', '9%');
metaMap.set('gap', '16px');
metaMap.set('flex-direction', 'row');
metaMap.set('align-items', 'center');
timeMap.set('flex-basis', '19.30835734870317%');
timeMap.set('color', '#717070');
timeMap.set('font-size', '0.875rem');
timeMap.set('font-family', 'Montserrat');
timeMap.set('font-weight', '400');
timeMap.set('text-align', 'left');
coworkersMap.set('display', 'flex');
coworkersMap.set('flex-basis', '32.85302593659942%');
coworkersMap.set('width', '33%');
coworkersMap.set('height', '100%');
coworkersMap.set('gap', '5.5px');
coworkersMap.set('flex-direction', 'row');
coworkersMap.set('align-items', 'center');
SLOTchannelMap.set('flex-basis', '15.789473684210526%');
SLOTchannelMap.set('width', '16%');
SLOTchannelMap.set('height', '100%');
SLOTchannelMap.set('background-color', '#c5c5c5');
MedarbetareMap.set('flex-basis', '79.82456140350878%');
MedarbetareMap.set('color', '#717070');
MedarbetareMap.set('font-size', '0.875rem');
MedarbetareMap.set('font-family', 'Montserrat');
MedarbetareMap.set('font-weight', '400');
MedarbetareMap.set('text-align', 'left');
likesContainerMap.set('display', 'flex');
likesContainerMap.set('flex-basis', '9.221902017291066%');
likesContainerMap.set('width', '9%');
likesContainerMap.set('height', '100%');
likesContainerMap.set('gap', '5.5px');
likesContainerMap.set('flex-direction', 'row');
likesContainerMap.set('align-items', 'center');
SLOTlikesMap.set('flex-basis', '56.25%');
SLOTlikesMap.set('width', '56%');
SLOTlikesMap.set('height', '100%');
SLOTlikesMap.set('background-color', '#c5c5c5');
likesMap.set('flex-basis', '28.125%');
likesMap.set('font-size', '0.875rem');
likesMap.set('font-family', 'Open Sans');
likesMap.set('font-weight', '400');
likesMap.set('text-align', 'left');
commentsContainerMap.set('display', 'flex');
commentsContainerMap.set('flex-basis', '9.798270893371757%');
commentsContainerMap.set('width', '10%');
commentsContainerMap.set('height', '100%');
commentsContainerMap.set('gap', '7px');
commentsContainerMap.set('flex-direction', 'row');
commentsContainerMap.set('align-items', 'center');
SLOTcommentsMap.set('flex-basis', '52.94117647058824%');
SLOTcommentsMap.set('width', '53%');
SLOTcommentsMap.set('height', '100%');
SLOTcommentsMap.set('background-color', '#c5c5c5');
commentsMap.set('flex-basis', '26.47058823529412%');
commentsMap.set('font-size', '0.875rem');
commentsMap.set('font-family', 'Open Sans');
commentsMap.set('font-weight', '400');
commentsMap.set('text-align', 'left');
let topNewsimg = class topNewsimg extends LitElement {
    constructor() {
        super(...arguments);
        this.topNewsimg = '';
        this.img = '';
        this.textBox = '';
        this.title = '';
        this.meta = '';
        this.time = '';
        this.coworkers = '';
        this.SLOTchannel = '';
        this.Medarbetare = '';
        this.likesContainer = '';
        this.SLOTlikes = '';
        this.likes = '';
        this.commentsContainer = '';
        this.SLOTcomments = '';
        this.comments = '';
        this.titleText = '';
        this.timeText = '';
        this.MedarbetareText = '';
        this.likesText = '';
        this.commentsText = '';
        this.propertyToMap = (cssRules, property) => {
            var rules = property.split(';');
            rules.forEach((rule) => {
                // removes all whitespaces that is more than one whitespace
                rule = rule.replace(/ss+/g, ' ');
                var key = rule.split(': ')[0];
                var value = rule.split(': ')[1];
                key = key.trim();
                if (cssRules.has(key)) {
                    cssRules.delete(key);
                }
                cssRules.set(key, value);
            });
        };
        this.renderCssString = (cssRules, property) => {
            if (property) {
                var mapCopy = new Map();
                for (let [key, value] of cssRules) {
                    mapCopy.set(key, value);
                }
                this.propertyToMap(mapCopy, property);
                var cssString = '';
                for (let [key, value] of mapCopy.entries()) {
                    cssString += `${key}: ${value};\n`;
                }
                return cssString;
            }
            var cssString = '';
            for (let [key, value] of cssRules.entries()) {
                cssString += `${key}: ${value};\n`;
            }
            return cssString;
        };
    }
    render() {
        return html `
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            
            :host {
${this.renderCssString(topNewsimgMap, this.topNewsimg)};
}
.img {
${this.renderCssString(imgMap, this.img)};
}
.textBox {
${this.renderCssString(textBoxMap, this.textBox)};
}
.title {
${this.renderCssString(titleMap, this.title)};
}
.meta {
${this.renderCssString(metaMap, this.meta)};
}
.time {
${this.renderCssString(timeMap, this.time)};
}
.coworkers {
${this.renderCssString(coworkersMap, this.coworkers)};
}
.SLOTchannel {
${this.renderCssString(SLOTchannelMap, this.SLOTchannel)};
}
.Medarbetare {
${this.renderCssString(MedarbetareMap, this.Medarbetare)};
}
.likesContainer {
${this.renderCssString(likesContainerMap, this.likesContainer)};
}
.SLOTlikes {
${this.renderCssString(SLOTlikesMap, this.SLOTlikes)};
}
.likes {
${this.renderCssString(likesMap, this.likes)};
}
.commentsContainer {
${this.renderCssString(commentsContainerMap, this.commentsContainer)};
}
.SLOTcomments {
${this.renderCssString(SLOTcommentsMap, this.SLOTcomments)};
}
.comments {
${this.renderCssString(commentsMap, this.comments)};
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
], topNewsimg.prototype, "topNewsimg", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "img", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "textBox", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "title", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "meta", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "time", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "coworkers", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "SLOTchannel", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "Medarbetare", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likesContainer", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "SLOTlikes", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "likes", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "commentsContainer", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "SLOTcomments", void 0);
__decorate([
    property({ type: String })
], topNewsimg.prototype, "comments", void 0);
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
