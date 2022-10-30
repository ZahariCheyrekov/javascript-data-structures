class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertexOne, vertexTwo) {
        if (!this.adjacencyList[vertexOne]) {
            this.addVertex(vertexOne);
        }

        if (!this.adjacencyList[vertexTwo]) {
            this.addVertex(vertexTwo);
        }

        this.adjacencyList[vertexOne].add(vertexTwo);
        this.adjacencyList[vertexTwo].add(vertexOne);
    }

    hasEdge(vertexOne, vertexTwo) {
        return (
            this.adjacencyList[vertexOne].has(vertexTwo) &&
            this.adjacencyList[vertexTwo].has(vertexOne)
        )
    }

    display() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

graph.display();
console.log(graph.hasEdge('A', 'C'));