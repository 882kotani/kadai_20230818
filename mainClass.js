class Counter {
  constructor(counter = 0) {
    this.count = counter;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  getCount() {
    return this.count;
  }
}
