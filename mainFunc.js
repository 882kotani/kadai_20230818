// カウンターを操作する関数を返す関数の例
function createCounter(count) {
  // let count = 0;

  function increment() {
    count++;
    console.log("カウントが増加しました。現在の値: " + count);
  }

  function decrement() {
    count--;
    console.log("カウントが減少しました。現在の値: " + count);
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}
