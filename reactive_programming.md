These kata series aim to show the possibilities of reactive programming.

For this we are going to implement part of the functionality of the magnificent RxJS library.

In this first part we have no choice but to start with a theoretical part but in the next katas the theoretical part will be minimal.

First things first:
What reactive programming is?

If the functional programming is the programming with pure functions, the reactive programming would be the programming with observables.
What is an observable?

An observable is a powerful pattern that enables non-deterministic and lazy pull computations.

Let's clarify each of the terms.

    Non-deterministic

    By this we mean that observables can return multiple values in contrast to functions that only return a single value. An EventEmitter would be in this sense as an observable since it emits several values, while a promise would be like a function by issuing a single value.

    Lazy

    Lazy means that observables do not emit until there is a subscription. Oservables resemble functions since they do not perform any computation until they are invoked.

    Pull

    In Pull systems, the Consumer determines when it receives data from the data Producer. The Producer itself is unaware of when the data will be delivered to the Consumer.

    In Push systems, the Producer determines when to send data to the Consumer. The Consumer is unaware of when it will receive that data.

    Promises and EventEmitters are types of Push systems. In both (Producer) delivers a resolved value to registered callbacks (Consumers), but unlike functions, they determine precisely when that value is "pushed" to callbacks.

In a practical way, we could say that an observable is a function that emits values over time and to which we can apply transformation functions, such as mapping, filtering or reducing.

Ok, enough of theory. Let's start!
Observable creation
create function

Your task is implement the create function defined as follows:
```ts
 declare function create<T>(f: (o: Observer<T>) => void): Observable<T>;

 interface Observer<T> {
  next: (value: T) => void;
  complete: () => void;
}

interface Observable<T> {
  subscribe: (o: Subscriber<T>) => Subscription;
}

interface Subscriber<T> {
  onNext?: (value: T) => void;
  onComplete?: () => void;
}

interface Subscription {
  unsubscribe: () => void;
}
```
    create function receives a function, which will receive an observer, and returns an observable.

    A observer is a collection of callbacks, next and complete, who knows how to listen to values delivered by the observable. When the observer "sees" a new value, it calls the next method and when it "knows" that there will be no more values it calls complete.

    The observable returned by create is an object with a subscribe function. Remember that observable is lazy and does not do any work until someone does not subscribe to it.

    The subscribe function receives a subscription. This object has two keys, onNext and onComplete. They are invoked when the observer calls next and complete respectively.

    RxJS library can manage errors that we omitted in this kata for simplicity.

Let's see it with an example.
```ts
const observable = create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
    observer.next(5); // observable is completed. 5 is never emitted.
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  onNext: x => console.log('got value ' + x),
  onComplete: () => console.log('done'),
});
console.log('just after subscribe');
```
```cmd
just before subscribe
got value 1
got value 2
got value 3
just after subscribe
#after one second
got value 4
done
```

Note that the first three calls to next are synchronous and the fourth is asynchronous. The calls after completing are omitted.

If you subscribe multiple times, the observable sends all the values to each subscriber:
```ts
const observable = create(function(observer) {
  observer.next(1);
  observer.next(2);
  observer.complete();
});

observable.subscribe({
  onNext: x => console.log("from first subscriber got value " + x)
});

observable.subscribe({
  onNext: x => console.log("from second subscriber got value " + x)
});
```
```cmd
from first subscriber got value 1
from first subscriber got value 2
from second subscriber got value 1
from second subscriber got value 2
```
The result would be the same even if the subscription is asynchronous.
```ts
observable.subscribe({
  onNext: x => console.log("from first subscriber got value " + x)
});

setTimeout(() => {
  observable.subscribe({
    onNext: x => console.log("from second subscriber got value " + x)
  });
});
```
As soon as you unsubscribe you stop receiving notifications:
```ts
const observable = create(function(observer) {
  observer.next(1);
  observer.next(2);
  setTimeout(() => {
    observer.next(3);
  }, 1000);
});

const subscription = observable.subscribe({
  onNext: x => console.log("got value " + x),
  onComplete: () => console.log("done")
});

setTimeout(() => {
  subscription.unsubscribe();
}, 500);
```
```cmd
got value 1
got value 2
```

This is all. You must implement the create function. The tests can guide you.

When you are finished, you can continue with #2 Basic observables creation
