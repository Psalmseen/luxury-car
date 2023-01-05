import { MobxLitElement } from '@adobe/lit-mobx';
import './components/car-card/car-card';
export declare class CarApp extends MobxLitElement {
    firstUpdated(): void;
    static styles: import("lit").CSSResult;
    handlePrevious(): void;
    handleNext(): void;
    protected render(): unknown;
}
