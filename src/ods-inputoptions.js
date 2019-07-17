// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';
// impot the processed CSS file into the scope of the component
import componentProperties from './tokens/componentShapeProperties-css.js';
import styleCss from "./style-css.js";

// build the component class
class OdsInputoptions extends LitElement {
  // constructor() {
  //   super();
  //   /*
  //     If the component requires a touch detection,
  //     please use this function to determine if a user is
  //     activelly touching a device, versus detecting if
  //     the device is touych enables or a handheld device.

  //     Also uncomment the touch detection lib above
  //   */
  //   this.addEventListener('touchstart', function() {
  //     this.classList.add('is-touching');
  //   });
  // }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      name:             { type: String },
      type:             { type: String },
      componentData:    { type: Array }
    };
  }

  getInputtype(type) {
    return type === "radio" ? "ods-inputLabel--radio" : 'ods-inputLabel--checkbox'
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${componentProperties}
      ${styleCss}

      ${this.componentData.map(i => html`
        <div class="ods-inputGroup">
          <input
            type="${this.type}"
            name="${this.name}"
            id="${i.id}"
            value="${i.value}"
            class="util_displayHiddenVisually ods-inputOption"
          />
          <label for="${i.id}" class="ods-inputLabel ${this.getInputtype(this.type)}">
            ${i.label}
          </label>
        </div>
      `)}
    `;
  }
}

// define the name of the custom component
customElements.define("ods-inputoptions", OdsInputoptions);
