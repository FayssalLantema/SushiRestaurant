import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';


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

        #tabel{
          border
        }

        #trH{
          background-color: #9E9E9E;
        }

        #trO{
          background-color: #E6E6E6;
        }
        #trE{
          background-color: #FFFFFF;
        }

        #td0{
          width: 10em;
        }

        #td1{
          width: 25em;
        }

        #td2{
          width: 65em;
        }
      </style>

      <table id="tabel">
        <tr id="trH">
          <th id="td0"></th>
          <th id="td1">Ingrediënt</th>
          <th id="td2">Hoeveelheid</th>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1">[[ingredient.0]]</td>
          <td id="td2">35<paper-input value="{{aantal-Zalm}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1">[[ingredient.1]]</td>
          <td id="td2">20<paper-input value="{{aantal-Tonijn}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1">[[ingredient.2]]</td>
          <td id="td2">15<paper-input value="{{aantal-Kip}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1">[[ingredient.3]]</td>
          <td id="td2">10<paper-input value="{{aantal-Komkommer}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1">[[ingredient.4]]</td>
          <td id="td2">35<paper-input value="{{aantal-Krab}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1">[[ingredient.5]]</td>
          <td id="td2">24<paper-input value="{{aantal-Wortel}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1">[[ingredient.6]]</td>
          <td id="td2">23<paper-input value="{{aantal-Ui}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1">[[ingredient.7]]</td>
          <td id="td2">12<paper-input value="{{aantal-Sla}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1">[[ingredient.8]]</td>
          <td id="td2">45<paper-input value="{{aantal-Zeewierbladen}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1">[[ingredient.9]]</td>
          <td id="td2">21<paper-input value="{{aantal-Tomaat}}"></paper-input><button id="but1">Toevoegen</td>
        </tr>
      </table>

    `;
  }
  static get properties() {
    return {
      ingredient: {
        type: Array,
        value: [
          "Zalm",
          "Tonijn",
          "Kip",
          "Krab",
          "Komkommer",
          "Wortel",
          "Ui",
          "Sla",
          "Zeewierbladen",
          "Tomaat"
        ]
      }
    };
  }
}

window.customElements.define('ontvangen-ingredienten', OntvangenIngredienten);
