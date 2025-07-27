import { Signal, signal } from '@angular/core';

export class storeItem<T> {
  private readonly _state = signal<T>(null as unknown as T);

  protected constructor(initialState: T) {
    this._state.set(initialState);
  }

  protected setValue(newValue: T): void {
    this._state.set(newValue);
  }

  protected get Value(): T {
    return this._state();
  }

  protected get value$(): Signal<T> {
    return this._state.asReadonly();
  }
}
