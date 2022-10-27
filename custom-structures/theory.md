# Stack

- stack is sequential collection of elements that follows the principle of Last In First Out (LIFO)
- the last element inserted into stack is the first element to be removed
- stack is an abstracjt data type
- it is defined by its behavior rather than being a mathematical model
- stack data structure supports two main operaions:
  - push, wich adds an element to the collection
  - pop wich removes the most recently added element from the collection
- usage:
  - browser history tracking
  - undo operation when typing
  - expression converions
  - call stack in JavaScript runtime

# Queue

- the queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
- queue is an abstract data type and it is defined by its behavior rather than being a mathematical model
- the queue data structure supports two main operations:
  - enqueue, wich adds an element to the rear/tail of the collection
  - dequeue, wich removes an elemet from the front/head of the collection
- usage:
  - printers
  - CPU task scheduling
  - callback queue in JavaScript runtime

# Circular Queue

- the size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
- also referred to as circular or ring buffer and followe the FIFO principle
- a circular queue will reuse the empty block created during the dequeue operation
- when working with queues of fixed maximm size, a circular queue is a great implementation choice
- the circular queue data structure supports two main operations:
  - enqueue, wich adds an element to the rear/tail of the collection
  - dequeue, wich removes an element from the front/head of the collection
- usage:
  - clock
  - streaming
  - traffic lights

# Linked List

- a linked list is a linear data structure that includes a series of connected nodes
- each node consists of a data value and a pointer that points to the next node
- the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
- random access of elements is not feasible and accessing an element has linear time complexity
- the linked list data structure supports three main operations:
  - insertion - to add an element at the beginning, end or at a given index in the list
  - deletion -to remove an item gien its index or value
  - search - to find an element given its value
- usage:
  - all applications of both stacks and queues are applications of linked list
  - image viewer

# Hash Table

- a hash table, also known as hash map, is a data structure that is used to store key-value pairs
- given a key, you can associate a value with that key for very fast lookup
- JavaScript Object is a special implementation of the hash table data strucutre. However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties
- Maps wich were introduced in 2015 allow you to store key-value pairs
- usage:
  - database indexing
  - caches
