console.log('-----');
console.log('big o example 6');
console.log('what is the runtime of this algo? ');
// samples for testing
const a = [2,3,4];
const b = [5,5,5,1];
const c = [10,10];



function foo(input1=a) {
  let array = input1; //local
  //
  for (let i=0; i < array.length/2; i++) {
    let other = array.length - i -1;
    let temp = array[i];
    array[i] = array[other];
  }
  return array;
}





console.log('__\n',foo(a));

/*
agcb notes

 - iterating through, even though we only go through half, we still consider the entire process 0(n)
 - Interesting recurring theme here about always taking the worst case scenario as our measurements.
 - " yeah but it was only half of the data", "nope you are still getting charged for the whole thing"
 -
 
 */
