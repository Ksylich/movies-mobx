import { observable } from "mobx";

export interface ICounterStore {
  counter: number;

  increment: () => void;
  decrement: () => void;
}

export const COUNTER_STORE = "COUNTER_STORE";

class CounterStore implements ICounterStore {
  @observable public counter = 0;

  public increment = () => {
    this.counter++;
  }

  public decrement = () => {
    this.counter--;
  }
}

export const counterStore = new CounterStore();
