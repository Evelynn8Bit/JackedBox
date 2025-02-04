class CardInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        input {
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 8px;
          width: 100%;
        }
      </style>
      <input type="text" placeholder="Enter card number">
    `;
  }
}
