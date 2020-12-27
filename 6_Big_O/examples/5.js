console.log('-----');
console.log('big o example 5');
console.log('what is the runtime of this algo? ');
// samples for testing
const a = [2,3,4];
const b = [5,5,5,1];
const c = [10,10];



function foo(input1, input2) {
  for (let i = 0; i<input1.length; i++;) {
    for (let j = 0; j<input2.length; j++;) {
      for(let k = 0; k<10000; k++;) {
        //constant work here
      }
    }
  }

}





console.log('__\n',foo());

/*
agcb notes

 - this is the same O(ab) as before
 - the added constant work isn't important
 */
