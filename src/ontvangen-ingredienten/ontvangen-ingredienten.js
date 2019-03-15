import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class OntvangenIngredienten extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        #Tabel{
          border: 1px black solid;
        }
      </style>

      <table id="Tabel">
        <tr>
          <th>Test</th>
          <th>Test</th>
          <th>Test</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
        </tr>
      </table>

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ontvangen-ingredienten'
      }
    };
  }
}

window.customElements.define('ontvangen-ingredienten', OntvangenIngredienten);
