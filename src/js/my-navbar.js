import { LitElement, html } from 'lit-element';

export class Navbar extends LitElement {
  render() {
    return html`
    <nav class="navbar navbar-black bg-black fixed-top">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="img/Logo.png" alt="Bootstrap" width="39" height="40"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
</nav>
<br>
<br>
    `;
  }
}

customElements.define('my-navbar', Navbar);