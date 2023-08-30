import { LitElement, html } from 'lit-element';

export class Container extends LitElement {
  render() {
    return html`
    <style>
    @import "/src/css/container.css"
  </style>
<h1>EXPERTOS EN EVENTOS</h1>
<br>
<br>
<div class="container">
  <div class="inner-container">
    <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</label>
    <div class="circle"></div>
  </div>
</div>
<div class="container">
  <div class="inner-container">
    <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</label>
    <div class="circle"></div>
  </div>
</div>
    `;
  }
}

customElements.define('my-container', Container);


