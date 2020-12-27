console.log('-----');
console.log('big o example 2');
console.log('what is the runtime of this algo? ');
// samples for testing
const a = [2,3,4];
const b = [5,5,5,1];
const c = [10,10];



function foo(arr=a) {

  //nested for loops.
  for(let x = 0; x<arr.length; x++) {
    for(let y = 0; y<arr.length; y++) {
      console.log(`x and y values are currently...${x}/${y}`);
    }
  }
}





console.log('__\n',foo());

/*
agcb notes

- nested forLoops are O(n2).
- a as input has 3 elements, 9 instructions.

 */
