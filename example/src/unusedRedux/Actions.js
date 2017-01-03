export function increment() {
  this.getState().counter.count++;
}

export function decrement() {
  this.getState().counter.count--;
}

