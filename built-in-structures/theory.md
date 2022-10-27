# Array

- data structure that can hold a collection of values
- arrays can store mix of different data types (not a good practice)
- array are resizable, you don't have to declare the size when creating it
- JavaScript arrays are zero-indexed (first element is at index 0)
- arrays are iterable and can be used with loops

# Object

- object is an unordered collection of key-value pairs
- the key must either be a string or symbol data type where as the value can be of any data type
- to retrieve a valu, you can use the corresponding key - use the dot notation or bracket notation
- an object is not iterable, you cannot use it with a loop

# Set

- data structure that can hold collection of values
- values must be unique
- set can contain a mix of different data types (not good practice)
- sets are dinamically sized, don't need to declare size when creating it
- sets don't maintain an insertion order
- sets are iterable, they can be used with loop

# Set vs Array

- arrays can contain duplicate values whereas sets can't
- insertion order is maintained in arrays, but is not in the sets
- searching and deleting an element in the set is faster compared to arrays

# Map

- map is an unordered collection of key-value pairs
- both keys and values can be of any data type (not a good practice)
- maps are iterable and can be used with a loop

# Map vs Object

- objects are unordered whereas maps are ordered
- keys in objects can only be string or symbol type whereas in maps, they can be of any type
- an object has a prototype and may contain a few default keys wich may collide with your own keys if you're not careful, but a map does not contain any keys by default
- objects are not iterable whereas maps are iterable
- apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data
