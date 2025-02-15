const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function foo(arr, count) {
  const res = [];
  for (let i = 0; i < arr.length; i += count) {
    const a = arr.slice(i, i + count);
    res.push(a);
  }
  return res;
}

console.log(foo(data, 3));
