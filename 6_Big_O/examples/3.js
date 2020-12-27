console.log('-----');
console.log('big o example 3');
console.log('what is the runtime of this algo? ');
// samples for testing
const a = [2,3,4];
const b = [5,5,5,1];
const c = [10,10];



function foo(arr=a) {

  // nested for loop with inner loop starting at +1 incremented value
  for(let x = 0; x<arr.length; x++) {
    for( let y= x+1; y<arr.length; y++) {
      console.log('from within the inner loop we read', x,y);
    }
  }
}





console.log('__\n',foo());

/*
agcb notes

- here we have a nested for loop where the inner iteration starts at n+1
- this is smaller count by 1 of total steps.
-
- Gayle spends a few paragraphs looking at this different ways.
- its not until her visualization that this starts to click for me.
- every iteration, the inner loop runs 1 less time...
- and visualizing this is a nxn matrix shows that you get half of the runs...
- so that helps understand the following equation...
- ( N(N-1) )/2 gets shortened to O(n2).
- do we drop the "-1" and the "/2" for being non-dominant terms

- so for now its safe to say that a nested forloop is just O(n2).
  - lowering inner loops increment count doesn't matter.
 */
