import { LitElement, html, customElement, property } from 'lit-element';
@customElement('flex-comp')
export class flexComp extends LitElement { 
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
leftFlexBasis = '';

@property({type: String})
leftWidth = '';

@property({type: String})
leftHeight = '';

@property({type: String})
leftBorderRadius = '';

@property({type: String})
leftGap = '';

@property({type: String})
leftFlexDirection = '';

@property({type: String})
leftBackgroundColor = '';

@property({type: String})
leftBackgroundImage = '';

@property({type: String})
leftBackgroundSize = '';

@property({type: String})
leftBackgroundRepeat = '';

@property({type: String})
leftPaddingTop = '';

@property({type: String})
leftPaddingLeft = '';

@property({type: String})
leftPaddingBottom = '';

@property({type: String})
leftPaddingRight = '';

@property({type: String})
leftJustifyContent = '';

@property({type: String})
leftAlignItems = '';

@property({type: String})
middleFlexBasis = '';

@property({type: String})
middleWidth = '';

@property({type: String})
middleHeight = '';

@property({type: String})
middleBorderRadius = '';

@property({type: String})
middleGap = '';

@property({type: String})
middleFlexDirection = '';

@property({type: String})
middleBackgroundColor = '';

@property({type: String})
middleBackgroundImage = '';

@property({type: String})
middleBackgroundSize = '';

@property({type: String})
middleBackgroundRepeat = '';

@property({type: String})
middlePaddingTop = '';

@property({type: String})
middlePaddingLeft = '';

@property({type: String})
middlePaddingBottom = '';

@property({type: String})
middlePaddingRight = '';

@property({type: String})
middleJustifyContent = '';

@property({type: String})
middleAlignItems = '';

@property({type: String})
rightFlexBasis = '';

@property({type: String})
rightWidth = '';

@property({type: String})
rightHeight = '';

@property({type: String})
rightBorderRadius = '';

@property({type: String})
rightGap = '';

@property({type: String})
rightFlexDirection = '';

@property({type: String})
rightBackgroundColor = '';

@property({type: String})
rightBackgroundImage = '';

@property({type: String})
rightBackgroundSize = '';

@property({type: String})
rightBackgroundRepeat = '';

@property({type: String})
rightPaddingTop = '';

@property({type: String})
rightPaddingLeft = '';

@property({type: String})
rightPaddingBottom = '';

@property({type: String})
rightPaddingRight = '';

@property({type: String})
rightJustifyContent = '';

@property({type: String})
rightAlignItems = '';


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 60px)`:  '757px' };
height: ${this.height  ? `calc(${this.height} - 60px)`:  '209px' };
border-radius: ${this.borderRadius  ? this.borderRadius:  '35px' };
gap: ${this.gap  ? this.gap:  '30px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#0e359a' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '30px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '30px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '30px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '30px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'center' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.left {
flex-basis:  ${this.leftFlexBasis ? this.leftFlexBasis : '30.647291941875825%'};
width: 100%;
height: 100%;
background-color: ${this.leftBackgroundColor  ? this.leftBackgroundColor:  '#e1e1e1' };
}

.middle {
flex-basis:  ${this.middleFlexBasis ? this.middleFlexBasis : '30.647291941875825%'};
width: 100%;
height: 100%;
background-color: ${this.middleBackgroundColor  ? this.middleBackgroundColor:  '#447d50' };
}

.right {
flex-basis:  ${this.rightFlexBasis ? this.rightFlexBasis : '30.647291941875825%'};
width: 100%;
height: 100%;
background-color: ${this.rightBackgroundColor  ? this.rightBackgroundColor:  '#66e983' };
}


            </style> 
            <div class="left">
</div>
<div class="middle">
</div>
<div class="right">
</div>

        `;
    }    
}
 // NOT GENERATED CODE