const arr = [1, 2, 3, 'String']; // not a good practice
console.log(arr[0]); // 1

arr.push(4);      // add element to the end of the array
arr.unshift(0);   // add element to the beginning of the array

arr.pop();        // remove item from the end of the array
arr.shift();      // remove item from the beginning of the array

for (const item of array) {  // iterate over array
    console.log(item);
}

// map, filter, reduce, concat, slice and splice

/* 
    Array - Big O time complexity

    Insert / remove from end - O(1)
    Insert / remove from beginning - O(n)
    Access - O(1)
    Search - O(n)
    Push / pop - O(1)
    Shift / unshift / concat / slice / splice - O(n)
    Map / filter / reduce / forEach- O(n)
*/