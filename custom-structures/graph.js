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
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');