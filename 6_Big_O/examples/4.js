console.log('-----');
console.log('big o example 4');
console.log('what is the runtime of this algo? ');
// samples for testing
const a = [2,3,4];
const b = [5,5,5,1];
const c = [10,10];



function foo(input1, input2) {
  for (let i = 0; i<input1.length; i++;) {
    for (let j = 0; j<input2.length; j++;) {// notice our iteration is off of input2! not 1!
      // do some O(1) work here.
    }
  }

}





console.log('__\n',foo());

/*
agcb notes

 - common mistake is to see 2 inputs to a nested for loops and assume nSquared.
 - I prefer looking at it like ... inputs a and b....
   - a to the power of b.
   - if a is used for the inner loop as well as outer, then fine, a to the power of a.
   - but when the inner loop runs off of another var, it's a to the power of b.

   - correct would be to say O(ab)
 */
