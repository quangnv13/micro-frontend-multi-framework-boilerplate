type TWindow = {
  counter$: Observable<number>;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  createSubscription: () => Subscription;
  tap: <T>(value: T) => void;
  initedStore: boolean;
} & globalThis.Window;

import { BehaviorSubject, Observable, Subscription, tap } from "rxjs";

const windowStore = window as unknown as TWindow;

if (!windowStore.initedStore) {
  windowStore.initedStore = true;
  const counterSubject = new BehaviorSubject<number>(0);
  windowStore.counter$ = counterSubject.asObservable();

  windowStore.increaseCounter = () => {
    const currentValue = counterSubject.value;
    counterSubject.next(currentValue + 1);
  };

  windowStore.decreaseCounter = () => {
    const currentValue = counterSubject.value;
    counterSubject.next(currentValue - 1);
  };

  windowStore.createSubscription = () => new Subscription();

  windowStore.tap = () => tap;
}

export default windowStore;
