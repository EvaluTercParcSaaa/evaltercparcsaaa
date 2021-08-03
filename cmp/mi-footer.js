class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Saldivar Avilez Angel Armando.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

