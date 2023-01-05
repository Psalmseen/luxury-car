import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Car } from '../../types';
import { carCardStyles } from './car-card.styles';

@customElement('car-card')
export class CarCards extends LitElement {
  @property({ type: Object }) car: Car = {
    id: 9582,
    year: 2008,
    make: 'Buick',
    model: 'Enclave',
    type: 'SUV',
  };
  static styles = carCardStyles;
  protected render(): unknown {
    const { year, model, make, type } = this.car;
    return html`<div class="car-card">
      <h1 class="car-model">${model}</h1>
      <p class="car-type">${type}</p>
      <div class="other-details">
        <p class="car-year">Year : ${year}</p>
        <p class="car-make">Make : ${make}</p>
      </div>
    </div>`;
  }
}
