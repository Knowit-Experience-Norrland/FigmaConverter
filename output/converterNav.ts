import { LitElement, html, customElement, property } from 'lit-element';
@customElement('converter-nav')
export class converterNav extends LitElement { 
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


    render(){
        return html`
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            :host {
display: flex;
width: ${this.width  ? `calc(${this.width} - 58px)`:  '1387px' };
height: ${this.height  ? `calc(${this.height} - 46px)`:  '82px' };
gap: ${this.gap  ? this.gap:  '40px' };
flex-direction: ${this.flexDirection  ? this.flexDirection:  'row' };
background-color: ${this.backgroundColor  ? this.backgroundColor:  '#5da5aa' };
padding-top: ${this.paddingTop  ? this.paddingTop:  '23px' };
padding-left: ${this.paddingLeft  ? this.paddingLeft:  '29px' };
padding-bottom: ${this.paddingBottom  ? this.paddingBottom:  '23px' };
padding-right: ${this.paddingRight  ? this.paddingRight:  '29px' };
justify-content: ${this.justifyContent  ? this.justifyContent:  'flex-end' };
align-items: ${this.alignItems  ? this.alignItems:  'center' };
}


            </style> 
            <slot>
</slot>
<slot>
</slot>
<slot>
</slot>

        `;
    }    
}
 // NOT GENERATED CODE
