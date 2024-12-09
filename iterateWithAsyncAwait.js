const arr = [1, 2, 3, 4, 5];

async function iterateWithAsyncAwait(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((value) => setTimeout(value, 1000));
    console.log(arr[i]);
  }
}

iterateWithAsyncAwait(arr);
