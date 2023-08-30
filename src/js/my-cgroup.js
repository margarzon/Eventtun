import { LitElement, html } from 'lit-element';

export class CardGroup extends LitElement {
  render() {
    return html`
    <style>
    @import "/src/css/cgroup.css"
  </style>
    <div class="card-group">
  <div class="card">
    <div class="card-body">
      <img src="img/Evemttum.png" class="card-img-top img-fluid" alt="...">
      <h5 class="card-title">Crea, sueña,realizalo</h5>
      <a href="#" class="btn-conocenos btn btn-warning">CONOCENOS</a>
    </div>
  </div>
  <div class="card">
    <div class="card-body2">
      <h5 class="card-title2">YA ERES CLIENTE?</h5>
      <a href="#" class="btn-ingresa btn btn-warning">INGRESA</a>
    </div>
  </div>
</div>
    `;
  }
}

customElements.define('my-cgroup', CardGroup);

