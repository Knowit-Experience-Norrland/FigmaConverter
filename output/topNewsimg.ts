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
imgMap.set('width','100%');
imgMap.set('height','50%');
imgMap.set('border-radius', ' 3px 3px 0px 0px');
imgMap.set('background-image', 'url(https://s3-alpha-sig.figma.com/img/8491/4d75/835822ba7ed023436a57574a6578ed9a?Expires=1619395200&Signature=NjsS-bNhxDKkgg-4woyd5o6GFuaGnkjQetPPs0H6eUPtmLeFRuDYTSVzuTaG8mf-xcp9hr4zO-CJbbzXbPPPNURc5ea-xlRyUYAMWv8zN74zTh9H4JgetHiYwTLR47CEMMu-8lTtiMU1WnVnfLDEGHtjxEcwEKfP2pHpFUqqNwElWBF3UI6ovlFfrhcz72qCKHyoBXZKThyb4df7wdbNa4sx-exicmVyDOCHdzK3G6ECvLJGcK4jbiNG7jwtj9ZEENqvWFHoskozdcd2NqCyM0cf7Zycmhs44YaER8kCptULq9IMYZEbq5EXkGUWRECdjeQhu02cww~umWyR83Gntg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)');
imgMap.set('background-size', 'cover');
imgMap.set('background-repeat', 'no-repeat');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '50%');
textBoxMap.set('width',
                        'calc(100% - 48px)'); 
textBoxMap.set('height',
                        'calc(50% - 32px)'); 
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('padding-top', '16px');
textBoxMap.set('padding-left', '24px');
textBoxMap.set('padding-bottom', '16px');
textBoxMap.set('padding-right', '24px');
titleMap.set('flex-basis', '74.35897435897436%');
titleMap.set('color', '#000000');
titleMap.set('font-size','1.5rem') ;
titleMap.set('font-family','Montserrat') ;
titleMap.set('font-weight','400') ;
titleMap.set('text-align','left') ;
metaMap.set('display', 'flex');
metaMap.set('flex-basis', '9.230769230769232%');
metaMap.set('width','88%');
metaMap.set('height','9%');
metaMap.set('gap', '16px');
metaMap.set('flex-direction', 'row');
metaMap.set('align-items', 'center');
timeMap.set('flex-basis', '19.30835734870317%');
timeMap.set('color', '#717070');
timeMap.set('font-size','0.875rem') ;
timeMap.set('font-family','Montserrat') ;
timeMap.set('font-weight','400') ;
timeMap.set('text-align','left') ;
coworkersMap.set('display', 'flex');
coworkersMap.set('flex-basis', '32.85302593659942%');
coworkersMap.set('width','33%');
coworkersMap.set('height','100%');
coworkersMap.set('gap', '5.5px');
coworkersMap.set('flex-direction', 'row');
coworkersMap.set('align-items', 'center');
SLOTchannelMap.set('flex-basis', '15.789473684210526%');
SLOTchannelMap.set('width','16%');
SLOTchannelMap.set('height','100%');
SLOTchannelMap.set('background-color', '#c5c5c5');
MedarbetareMap.set('flex-basis', '79.82456140350878%');
MedarbetareMap.set('color', '#717070');
MedarbetareMap.set('font-size','0.875rem') ;
MedarbetareMap.set('font-family','Montserrat') ;
MedarbetareMap.set('font-weight','400') ;
MedarbetareMap.set('text-align','left') ;
likesContainerMap.set('display', 'flex');
likesContainerMap.set('flex-basis', '9.221902017291066%');
likesContainerMap.set('width','9%');
likesContainerMap.set('height','100%');
likesContainerMap.set('gap', '5.5px');
likesContainerMap.set('flex-direction', 'row');
likesContainerMap.set('align-items', 'center');
SLOTlikesMap.set('flex-basis', '56.25%');
SLOTlikesMap.set('width','56%');
SLOTlikesMap.set('height','100%');
SLOTlikesMap.set('background-color', '#c5c5c5');
likesMap.set('flex-basis', '28.125%');
likesMap.set('font-size','0.875rem') ;
likesMap.set('font-family','Open Sans') ;
likesMap.set('font-weight','400') ;
likesMap.set('text-align','left') ;
commentsContainerMap.set('display', 'flex');
commentsContainerMap.set('flex-basis', '9.798270893371757%');
commentsContainerMap.set('width','10%');
commentsContainerMap.set('height','100%');
commentsContainerMap.set('gap', '7px');
commentsContainerMap.set('flex-direction', 'row');
commentsContainerMap.set('align-items', 'center');
SLOTcommentsMap.set('flex-basis', '52.94117647058824%');
SLOTcommentsMap.set('width','53%');
SLOTcommentsMap.set('height','100%');
SLOTcommentsMap.set('background-color', '#c5c5c5');
commentsMap.set('flex-basis', '26.47058823529412%');
commentsMap.set('font-size','0.875rem') ;
commentsMap.set('font-family','Open Sans') ;
commentsMap.set('font-weight','400') ;
commentsMap.set('text-align','left') ;
@customElement('top-newsimg')
export class topNewsimg extends LitElement { 
@property({type: String})
topNewsimg = '';

@property({type: String})
img = '';

@property({type: String})
textBox = '';

@property({type: String})
title = '';

@property({type: String})
meta = '';

@property({type: String})
time = '';

@property({type: String})
coworkers = '';

@property({type: String})
SLOTchannel = '';

@property({type: String})
Medarbetare = '';

@property({type: String})
likesContainer = '';

@property({type: String})
SLOTlikes = '';

@property({type: String})
likes = '';

@property({type: String})
commentsContainer = '';

@property({type: String})
SLOTcomments = '';

@property({type: String})
comments = '';

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



    propertyToMap = (cssRules: Map<string, string>, property: string) => {
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

    renderCssString = (cssRules: Map<string, string>, property: string): string => {
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

    render(){
        return html`
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
   ${this.titleText  ? this.titleText:  `Kan ny teknik lösa informationsutmaning – det ska sommarens internship undersöka`
            }
</p>
<div class="meta">
<p class="time">
   ${this.timeText  ? this.timeText:  `Idag 15:53`
            }
</p>
<div class="coworkers">
<slot name="channel">
</slot>
<p class="Medarbetare">
   ${this.MedarbetareText  ? this.MedarbetareText:  `Medarbetare`
            }
</p>
</div>
<div class="likesContainer">
<slot name="likes">
</slot>
<p class="likes">
   ${this.likesText  ? this.likesText:  `1`
            }
</p>
</div>
<div class="commentsContainer">
<slot name="comments">
</slot>
<p class="comments">
   ${this.commentsText  ? this.commentsText:  `0`
            }
</p>
</div>
</div>
</div>

        `;
    }    
    }
 // NOT GENERATED CODE