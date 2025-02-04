import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("user-interface")
export class UserInterface extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/style.css" />
      <div id="ui">
        <button
          toggle="main__menu"
          class="inline-block cursor-pointer bg-pink-500 px-4 py-2 rounded-lg text-white"
        >
          Open Menu
        </button>
      </div>

      <div id="main__menu" class="menu__full hidden">
        <h1 class="">Cube Master</h1>
        <p>Click the cube to get points!</p>
        <button id="start">Start</button>
      </div>
    `;
  }
}
