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

    removeEdge(vertexOne, vertexTwo) {
        this.adjacencyList[vertexOne].delete(vertexTwo);
        this.adjacencyList[vertexTwo].delete(vertexOne);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }

        for (const adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
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
graph.removeVertex('B');
graph.display();