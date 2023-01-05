import type { Car } from '../types';
declare class Store {
    constructor();
    cars: Car[];
    currentPage: number;
    setCurrentPage(pageNumber?: number): void;
    setCars(cars: Car[]): void;
}
export declare const store: Store;
export {};
