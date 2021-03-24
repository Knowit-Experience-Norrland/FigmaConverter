import { LitElement, html, customElement, property } from 'lit-element';
@customElement('dark-card')
export class darkCard extends LitElement { 
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
Frame1Width = '';

@property({type: String})
Frame1Height = '';

@property({type: String})
Frame1BorderRadius = '';

@property({type: String})
Frame1Gap = '';

@property({type: String})
Frame1FlexDirection = '';

@property({type: String})
Frame1BackgroundColor = '';

@property({type: String})
Frame1PaddingTop = '';

@property({type: String})
Frame1PaddingLeft = '';

@property({type: String})
Frame1PaddingBottom = '';

@property({type: String})
Frame1PaddingRight = '';

@property({type: String})
Frame1JustifyContent = '';

@property({type: String})
Frame1AlignItems = '';

@property({type: String})
TodaytrainingtimeWidth = '';

@property({type: String})
TodaytrainingtimeHeight = '';

@property({type: String})
TodaytrainingtimeBorderRadius = '';

@property({type: String})
TodaytrainingtimeGap = '';

@property({type: String})
TodaytrainingtimeFlexDirection = '';

@property({type: String})
TodaytrainingtimeBackgroundColor = '';

@property({type: String})
TodaytrainingtimeFontSize = '';

@property({type: String})
TodaytrainingtimeFontFamily = '';

@property({type: String})
TodaytrainingtimeFontWeight = '';

@property({type: String})
TodaytrainingtimeLetterSpacing = '';

@property({type: String})
minutesWidth = '';

@property({type: String})
minutesHeight = '';

@property({type: String})
minutesBorderRadius = '';

@property({type: String})
minutesGap = '';

@property({type: String})
minutesFlexDirection = '';

@property({type: String})
minutesBackgroundColor = '';

@property({type: String})
minutesFontSize = '';

@property({type: String})
minutesFontFamily = '';

@property({type: String})
minutesFontWeight = '';

@property({type: String})
minutesLetterSpacing = '';

@property({type: String})
Rectangle22Width = '';

@property({type: String})
Rectangle22Height = '';

@property({type: String})
Rectangle22BorderRadius = '';

@property({type: String})
Rectangle22Gap = '';

@property({type: String})
Rectangle22FlexDirection = '';

@property({type: String})
Rectangle22BackgroundColor = '';

@property({type: String})
Rectangle22PaddingTop = '';

@property({type: String})
Rectangle22PaddingLeft = '';

@property({type: String})
Rectangle22PaddingBottom = '';

@property({type: String})
Rectangle22PaddingRight = '';

@property({type: String})
Rectangle22JustifyContent = '';

@property({type: String})
Rectangle22AlignItems = '';

@property({type: String})
TodaytrainingtimeText = '';

@property({type: String})
minutesText = '';


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 80px)`:  '594px' };
height: ${this.height  ? `calc(${this.height} - 70px)`:  '107px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  '16px' };
gap: ${this.gap  ? this.gap:  '84px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#431d1d' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '35px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '40px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '35px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '40px' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.Frame1 {
display: flex;
width: 100%;
flex-basis:44.27609427609428%;
height: 100%;
flex-direction: ${this.Frame1FlexDirection  ? this.Frame1FlexDirection:  'column' };
}

.Todaytrainingtime {
color: ${this.TodaytrainingtimeBackgroundColor ? this.TodaytrainingtimeBackgroundColor : '#ffffff'};
font-size: ${this.TodaytrainingtimeFontSize  ? this.TodaytrainingtimeFontSize:  '1.5rem' };
font-family: ${this.TodaytrainingtimeFontFamily  ? this.TodaytrainingtimeFontFamily:  'Open Sans' };
font-weight: ${this.TodaytrainingtimeFontWeight  ? this.TodaytrainingtimeFontWeight:  '400' };
letter-spacing: ${this.TodaytrainingtimeLetterSpacing  ? this.TodaytrainingtimeLetterSpacing:  '0' };
}

.minutes {
color: ${this.minutesBackgroundColor ? this.minutesBackgroundColor : '#ffffff'};
font-size: ${this.minutesFontSize  ? this.minutesFontSize:  '2rem' };
font-family: ${this.minutesFontFamily  ? this.minutesFontFamily:  'Open Sans' };
font-weight: ${this.minutesFontWeight  ? this.minutesFontWeight:  '600' };
letter-spacing: ${this.minutesLetterSpacing  ? this.minutesLetterSpacing:  '0' };
}

.Rectangle22 {
width: 100%;
flex-basis:41.582491582491585%;
height: 100%;
border-radius: ${this.Rectangle22BorderRadius  ? this.Rectangle22BorderRadius:  '28px' };
background-color: ${this.Rectangle22BackgroundColor  ? this.Rectangle22BackgroundColor:  '#446d52' };
}


            </style> 
            <div class="Frame1">
<p class="Todaytrainingtime">
   ${this.TodaytrainingtimeText  ? this.TodaytrainingtimeText:  'Today training time'
            }
</p>
<p class="minutes">
   ${this.minutesText  ? this.minutesText:  '01:33:58 minutes'
            }
</p>
</div>
<div class="Rectangle22">
</div>

        `;
    }    
}
 // NOT GENERATED CODE