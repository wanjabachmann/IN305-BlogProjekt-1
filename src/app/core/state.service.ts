import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Person {
  name?: string;
  surname?: string;
  address?: {
    street?: string;
    plz?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject: BehaviorSubject<Person>;
  state$: Observable<Person>;

  constructor() {
    // Initial state object
    const initialState: Person = {};
    this.stateSubject = new BehaviorSubject<Person>(initialState);
    this.state$ = this.stateSubject.asObservable();
  }

  setName(name: string) {
    // Get current state
    const currentState = this.stateSubject.getValue();
    const updatedState: Person = { ...currentState, name };
    // Emit the update
    this.stateSubject.next(updatedState);
  }

  setSurname(surname: string) {
    // Get current state
    const currentState = this.stateSubject.getValue();
    const updatedState: Person = { ...currentState, surname };
    // Emit the update
    this.stateSubject.next(updatedState);
  }
}
