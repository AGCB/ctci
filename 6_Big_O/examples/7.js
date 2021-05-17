console.log('-----');
console.log('big o example 7');

/*
all of these examples reduce to O(n)
except for the last one..

O(n+p) where p < n/2..
  - In this case we know that P can be dropped as non-dominant

O(2n)
  - drop constants

O(n + log n)
  - n dominates so we can drop log n.

O(n + m)
  - since we don't have a relationship established, we can't reduce any further.

-
 */
