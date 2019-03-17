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
          border: 1px solid black;
          border-collapse: collapse;
        }

        #pH{
          color: rgb(230,230,230);
        }

        #pI{
          allign: center;
        }

        #trH{
          background-color: #9E9E9E;
          border: 2px solid black;
          border-collapse: collapse;
        }

        #trO{
          background-color: #E6E6E6;
        }
        #trE{
          background-color: #FFFFFF;
        }

        #th0{
          width: 12.5em;
          border: 2px solid black;
          border-collapse: collapse;
          height: 2.5em;
        }

        #th1{
          width: 20em;
          border: 2px solid black;
          border-collapse: collapse;
        }

        #th2{
          width: 67.5em;
        }

        #td0{
          width: 10em;
          border: 2px solid black;
          border-collapse: collapse;
        }

        #td1{
          width: 15em;
          border: 2px solid black;
          border-collapse: collapse;

        }

        #td2{
          width: 15em;
          padding-left: 0.5em;
          border-bottom: 2px solid black;
          border-collapse: collapse;
        }

        #td3{
          width: 15em;
          border-bottom: 2px solid black;
          border-collapse: collapse;
        }

        #td4{
          width: 12.5em;
          border-bottom: 2px solid black;
          border-collapse: collapse;
        }

        #paper{
          width: 20em;
          allign: right;
        }

        #but{
          margin-left: 3em;
          border: 1px solid black;
          height: 3em;
          background-color: #9E9E9E;
        }
      </style>

      <table id="tabel">
        <tr id="trH">
          <th id="th0"></th>
          <th id="th1"><p id="pH">Ingrediënt</p></th>
          <th colspan="3" id="th2"><p id="pH">Hoeveelheid</p></th>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.0]]</center></td>
          <td id="td2">35</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Zalm}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.1]]</center></td>
          <td id="td2">20</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Tonijn}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.2]]</center></td>
          <td id="td2">15</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Kip}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.3]]</center></td>
          <td id="td2">10</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Krab}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.4]]</center></td>
          <td id="td2">35</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-KomKommer}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.5]]</center></td>
          <td id="td2">24</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Wortel}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.6]]</center></td>
          <td id="td2">23</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Ui}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.7]]</center></td>
          <td id="td2">12</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Sla}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trO">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.8]]</center></td>
          <td id="td2">45</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Zeewierbladen}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
        </tr>
        <tr id="trE">
          <td id="td0"></td>
          <td id="td1"><center>[[ingredient.9]]</center></td>
          <td id="td2">21</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Tomaat}}"></paper-input></td>
          <td id="td4"><button id="but">Toevoegen</td>
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
