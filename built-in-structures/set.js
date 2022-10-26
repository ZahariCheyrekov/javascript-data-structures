const set = new Set([1, 2, 3]);  // declare set

set.add(4);  // add value to set
set.add(4);  // value is not added to the set

set.has(4);  // check if value is contained in the set

set.delete(3);  // delete value from set

console.log(set.size);  // returns set size

for (const item of set) {  // iterating and printing set elements
    console.log(item)
}

set.clear();  // deletes all of the set values

console.log(set);