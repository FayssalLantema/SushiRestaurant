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
          border: 2px solid black;
          border-collapse: collapse;
        }

        #pH{
          color: rgb(230,230,230);
        }

        #trH{
          background-color: #9E9E9E;
          border: 2px solid black;
          border-collapse: collapse;
        }

        #trE{
          background-color: #FFFFFF;
        }

        #th1{
          width: 15em;
          border: 2px solid black;
          border-collapse: collapse;
        }

        #td1{
          width: 15em;
          border: 2px solid black;
          border-collapse: collapse;

        }

        #td2{
          width: 10em;
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
          width: 6em;
          border-bottom: 2px solid black;
          border-collapse: collapse;
        }


        #td5{
          width: 8em;
          border-bottom: 2px solid black;
          border-collapse: collapse;
        }

        #paper{
          width: 20em;
          allign: right;
        }

        #but0{
          margin-left: 2em;
          border: 1px solid black;
          height: 3em;
          background-color: #9E9E9E;
        }

        #but1{
          margin-left: 2em;
          border: 1px solid black;
          height: 3em;
          background-color: #9E9E9E;
        }
      </style>

      <table id="tabel">
        <tr id="trH">
          <th id="th1"><p id="pH">ingredienten</p></th>
          <th colspan="4"><p id="pH">Hoeveelheid</p></th>
        </tr>
        <template is="dom-repeat" items="{{ingredient}}" as="item">
          <tr id="trE">
            <td id="td1"><center>[[item.naam]]</center></td>
            <td id="td2">{{item.aantal}}</td>
            <td id="td3"><paper-input prevent-invalid-input placeholder="0" value="{{aantalVoorraad}}" type="number"></paper-input></td>
            <td id="td4"><button  on-click="bevestigen" id="but0">Toevoegen</button></td>
            <td id="td5"><button id="but1">Annuleren</button></td>
          </tr>
        </template>
      </table>


      <!-- <table id="tabel">
        <tr id="trH">
          <th id="th1"><p id="pH">Ingrediënt</p></th>
          <th colspan="3" id="th2"><p id="pH">Hoeveelheid</p></th>
        </tr>
        <tr id="trO">
          <td id="td1"><center>[[ingredient.0.naam]]</center></td>
          <td id="td2">{{ingredient.0.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Zalm}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trE">
        <td id="td1"><center>[[ingredient.1.naam]]</center></td>
          <td id="td2">{{ingredient.1.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Tonijn}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trO">
          <td id="td1"><center>[[ingredient.2.naam]]</center></td>
          <td id="td2">{{ingredient.2.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Kip}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trE">
          <td id="td1"><center>[[ingredient.3.naam]]</center></td>
          <td id="td2">{{ingredient.3.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Krab}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trO">
          <td id="td1"><center>[[ingredient.4.naam]]</center></td>
          <td id="td2">{{ingredient.4.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-KomKommer}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trE">
          <td id="td1"><center>[[ingredient.5.naam]]</center></td>
          <td id="td2">{{ingredient.5.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Wortel}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trO">
          <td id="td1"><center>[[ingredient.6.naam]]</center></td>
          <td id="td2">{{ingredient.6.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Ui}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trE">
          <td id="td1"><center>[[ingredient.7.naam]]</center></td>
          <td id="td2">{{ingredient.7.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Sla}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trO">
          <td id="td1"><center>[[ingredient.8.naam]]</center></td>
          <td id="td2">{{ingredient.8.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantal-Zeewierbladen}}"></paper-input></td>
          <td id="td4"><button id="but0">Toevoegen<button id="but1">Annuleren</td>
        </tr>
        <tr id="trE">
          <td id="td1"><center>[[ingredient.9.naam]]</center></td>
          <td id="td2">{{ingredient.9.aantal}}</td>
          <td id="td3"><paper-input prevent-invalid-input placeholder="0" id="paper" type="number" value="{{aantalTomaat}}"></paper-input></td>
          <td id="td4"><button id="but0" on-click="bevestigen">Toevoegen<button id="but1">Annuleren</td>
        </tr>
      </table> -->
    `;
  }


  static get properties() {
    return {
      aantalTomaat: String,
      ingredient: {
        type: Array,
        value: [{ naam : "Zalm", aantal : 35},
                { naam : "Tonijn", aantal : 20},
                { naam : "Kip", aantal : 15},
                { naam : "Krab", aantal : 10},
                { naam : "Komkommer", aantal : 35},
                { naam : "Wortel", aantal : 24},
                { naam : "Ui", aantal : 23},
                { naam : "Sla", aantal : 12},
                { naam : "Zeewierbladen", aantal : 45},
                { naam : "Tomaat", aantal : 21}]
      }
    };
  }

  bevestigen() {
    console.log(aantalVoorraad);
  }
}

window.customElements.define('ontvangen-ingredienten', OntvangenIngredienten);
