import { LitElement, html, customElement, property } from 'lit-element';
var topNewsMap = new Map(); 
var imgMap = new Map(); 
var SLOTtopImgMap = new Map(); 
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
topNewsMap.set('display', 'flex');
topNewsMap.set('width', '395px');
topNewsMap.set('height', '390px');
topNewsMap.set('flex-direction', 'column');
topNewsMap.set('background-color', '#ffffff');
imgMap.set('display', 'flex');
imgMap.set('flex-basis', '54.1025641025641%');
imgMap.set('width','100%');
imgMap.set('height','54%');
imgMap.set('flex-direction', 'column');
imgMap.set('justify-content', 'center');
imgMap.set('align-items', 'center');
SLOTtopImgMap.set('flex-basis', '21.80094786729858%');
SLOTtopImgMap.set('width','27%');
SLOTtopImgMap.set('height','22%');
SLOTtopImgMap.set('background-color', '#c5c5c5');
textBoxMap.set('display', 'flex');
textBoxMap.set('flex-basis', '45.8974358974359%');
textBoxMap.set('width',
                        'calc(100% - 48px)'); 
textBoxMap.set('height',
                        'calc(46% - 32px)'); 
textBoxMap.set('flex-direction', 'column');
textBoxMap.set('padding-top', '16px');
textBoxMap.set('padding-left', '24px');
textBoxMap.set('padding-bottom', '16px');
textBoxMap.set('padding-right', '24px');
titleMap.set('flex-basis', '72.06703910614524%');
titleMap.set('color', '#000000');
titleMap.set('font-size','1.5rem') ;
titleMap.set('font-family','Open Sans') ;
titleMap.set('font-weight','700') ;
titleMap.set('text-align','left') ;
metaMap.set('display', 'flex');
metaMap.set('flex-basis', '10.05586592178771%');
metaMap.set('width','88%');
metaMap.set('height','10%');
metaMap.set('gap', '16px');
metaMap.set('flex-direction', 'row');
metaMap.set('align-items', 'center');
timeMap.set('flex-basis', '19.596541786743515%');
timeMap.set('font-size','0.875rem') ;
timeMap.set('font-family','Open Sans') ;
timeMap.set('font-weight','400') ;
timeMap.set('text-align','left') ;
coworkersMap.set('display', 'flex');
coworkersMap.set('flex-basis', '31.412103746397698%');
coworkersMap.set('width','31%');
coworkersMap.set('height','100%');
coworkersMap.set('gap', '5.5px');
coworkersMap.set('flex-direction', 'row');
coworkersMap.set('align-items', 'center');
SLOTchannelMap.set('flex-basis', '16.51376146788991%');
SLOTchannelMap.set('width','17%');
SLOTchannelMap.set('height','100%');
SLOTchannelMap.set('background-color', '#c5c5c5');
MedarbetareMap.set('flex-basis', '78.89908256880734%');
MedarbetareMap.set('font-size','0.875rem') ;
MedarbetareMap.set('font-family','Open Sans') ;
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
@customElement('top-news')
export class topNews extends LitElement { 
@property({type: String})
topNews = '';

@property({type: String})
img = '';

@property({type: String})
SLOTtopImg = '';

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
${this.renderCssString(topNewsMap, this.topNews)};
}
.img {
${this.renderCssString(imgMap, this.img)};
}
.SLOTtopImg {
${this.renderCssString(SLOTtopImgMap, this.SLOTtopImg)};
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
