const obj = {  // decalre object with literal
    name: 'ABC',
    age: 25,
    sayMyName() {
        console.log('My name is:', this.name);
    }
};

obj.hobby = 'fitness';  // adding key-value pair to object
obj['country'] = 'BG';

console.log(obj);  // print object to the console

delete obj.hobby;  // remove key-value pair from object

console.log(obj.name);  // accessing elements in object
console.log(obj['age']);

obj.sayMyName();  // invoking object function

console.log(obj);

// Object.keys(), .values(), .entries()

/* 
    Object - Big O time complexity

    Insert / remove - O(1)
    Access - O(1)
    Search - O(n)
    Object.keys() / .values(), .entries() - O(n)
*/