import { LitElement, html } from 'lit-element';

export class CardGroup2 extends LitElement {
  render() {
    return html`
    <style>
    @import "/src/css/cgroup2.css"
  </style>
    <h1>EXPERTOS EN EVENTOS</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card">
                <div class="card-body1">
                    <h5 class="card-title3">Salon Amarillo</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet. Asperiores magnam dolore,nihil quia dolorem odio minima pariatur! Ad?</p>
                    <a href="#" class="btn-mi btn btn-warning">Mas Info</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body1">
                    <h5 class="card-title4">Salon Amarillo</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet. Asperiores magnam dolore,nihil quia dolorem odio minima pariatur! Ad?</p>
                    <a href="#" class="btn-mi btn btn-warning">Mas Info</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body1">
                    <h5 class="card-title4">Salon Amarillo</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet. Asperiores magnam dolore,nihil quia dolorem odio minima pariatur! Ad?</p>
                    <a href="#" class="btn-mi btn btn-warning">Mas Info</a>
                </div>
            </div>
        </div>
    </div>
    
    <div class="card-group">
      <div class="card">
        <div class="card-body4">
          <div class="img-1">
            <img src="src/img/img1.png" class="card-img-top img-fluid" alt="...">
          </div>
          <div class="img-2">
            <img src="src/img/img1.png" class="card-img-top img-fluid" alt="...">          
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body5">
          <div class="img-3">
          <img src="src/img/Evemttum2.png" class="card-img-top img-fluid" alt="...">
        </div>
          <p class="card-text-a">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet. Asperiores magnam dolore,nihil quia dolorem odio minima pariatur! Ad?</p>
        </div>
      </div>
    </div>
    <br></br>
    `;
  }
}

customElements.define('my-cgroup2', CardGroup2);










