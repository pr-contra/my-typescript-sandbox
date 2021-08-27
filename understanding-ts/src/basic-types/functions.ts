function addFunc(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void): void {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// printResult(addFunc(2, 7));

// let combineValues: Function;
// let combineValues: (a: number, b: number) => number;

// combineValues = addFunc;
// combineValues = printResult;

// printResult(combineValues(8, 8));
