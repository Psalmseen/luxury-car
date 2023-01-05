import { makeAutoObservable } from 'mobx';

import type { Car } from '../types';

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  cars: Car[] = [];
  currentPage = 0;

  setCurrentPage(pageNumber = 0) {
    this.currentPage = pageNumber;
  }
  setCars(cars: Car[]) {
    this.cars = cars;
  }
}

export const store = new Store();
