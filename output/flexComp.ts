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

@property({type: String})
Rectangle23Width = '';

@property({type: String})
Rectangle23Height = '';

@property({type: String})
Rectangle23BorderRadius = '';

@property({type: String})
Rectangle23Gap = '';

@property({type: String})
Rectangle23FlexDirection = '';

@property({type: String})
Rectangle23BackgroundColor = '';

@property({type: String})
Rectangle23PaddingTop = '';

@property({type: String})
Rectangle23PaddingLeft = '';

@property({type: String})
Rectangle23PaddingBottom = '';

@property({type: String})
Rectangle23PaddingRight = '';

@property({type: String})
Rectangle23JustifyContent = '';

@property({type: String})
Rectangle23AlignItems = '';


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
height: ${this.height  ? `calc(${this.height} - 60px)`:  '233px' };
gap: ${this.gap  ? this.gap:  '30px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#b8c0d6' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '30px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '30px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '30px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '30px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'center' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}

.left {
width: 100%;
flex-basis:19.815059445178335%;
height: 100%;
background-color: ${this.leftBackgroundColor  ? this.leftBackgroundColor:  '#e1e1e1' };
}

.right {
width: 100%;
flex-basis:39.63011889035667%;
height: 100%;
background-color: ${this.rightBackgroundColor  ? this.rightBackgroundColor:  '#762525' };
}

.Rectangle23 {
width: 100%;
flex-basis:19.815059445178335%;
height: 100%;
background-color: ${this.Rectangle23BackgroundColor  ? this.Rectangle23BackgroundColor:  '#447d50' };
}


            </style> 
            <div class="left">
</div>
<div class="right">
</div>
<div class="Rectangle23">
</div>

        `;
    }    
}
 // NOT GENERATED CODE