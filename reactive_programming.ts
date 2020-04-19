interface Observable<T> {
  subscribe: (o: Subscriber<T>) => Subscription;
}

interface Subscription {
  unsubscribe: () => void;
}

interface Subscriber<T> {
  onNext?: (value: T) => void;
  onComplete?: () => void;
}

interface Observer<T> {
  next: (value: T) => void;
  complete: () => void;
}

export function create<T>(f: (o: Observer<T>) => void): Observable<T> {
  return {
    subscribe: s => {
      return { unsubscribe: () => console.log('') };
    }
  };
}

// Tests
const numbers: number[] = [];
const number$ = create<number>(function(observer) {
  observer.next(1);
  observer.next(2);
  setTimeout(() => {
    observer.next(3);
  }, 10);
  setTimeout(() => {
    observer.next(4);
  }, 50);
});

const subscription = number$.subscribe({ onNext: v => numbers.push(v) });

setTimeout(() => {
  subscription.unsubscribe();
}, 30);

setTimeout(() => {
  // numbers === [1, 2, 3];
}, 100);
