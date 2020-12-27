console.log('-----');
console.log('big o example 1');
console.log('what is the runtime of this algo? ');
// samples for testing
const a = [2,3,4];
const b = [5,5,5,1];
const c = [10,10];



function foo(arr=[2,3,4]) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i<arr.length; i++) {
    sum += arr[i];
  }

  for (let i = 0; i<arr.length; i++) {
    product *= arr[i];
  }
  return ['algo has run with sum and product of...', sum,product]
}





console.log('__\n',
foo(a),
'__\n',
foo(b),
'__\n',
foo(c));

/*
even though we iterate through this array twice, it doesn't matter.
for big O, we wouldn't call this O(2n)..
you would just call it O(n)

 */
