const map = new Map([['a', 1], ['b', 2]]);  // declare map

map.set('c', 3);  // add element to map

console.log(map.has('c'));  // check if element is in the map 

map.delete('b');  // delete value from map

console.log(map.size);  // find what map size is

for (const [key, value] of map) {  // iterate and print map elements
    console.log(`${key}: ${value}`);
}

map.clear();  // clear map elements

console.log(map);
