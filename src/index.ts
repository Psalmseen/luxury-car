import { html } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement } from 'lit/decorators.js';
import { store } from './store/store';
import { service } from './services/services';
import { indexStyles } from './index.styles';
import './components/car-card/car-card';
import { classMap } from 'lit/directives/class-map.js';

@customElement('car-app')
export class CarApp extends MobxLitElement {
  firstUpdated() {
    service.fetchCars();
  }
  static styles = indexStyles;
  handlePrevious() {
    if (!store.currentPage) return;
    service.fetchCars(store.currentPage - 1);
  }
  handleNext() {
    service.fetchCars(store.currentPage + 1);
  }
  protected render(): unknown {
    return html` <h1 class="index-title">Luxury Cars</h1>
      <div class="index">
        <div class="car-view">
          ${store.cars.length > 0
            ? store.cars.map((car) => html`<car-card .car=${car}></car-card>`)
            : 'No car to display'}
        </div>
        <div class="navigations">
          <div
            @click=${this.handlePrevious}
            class=${classMap({ prev: true, inactive: !store.currentPage })}
          >
            &larr; Prev
          </div>
          <div @click=${this.handleNext} class="next">Next &rarr;</div>
        </div>
      </div>`;
  }
}
