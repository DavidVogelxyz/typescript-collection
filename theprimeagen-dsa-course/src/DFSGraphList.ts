// from ./src/global.d.ts
declare type AdjacencyList = number[];
declare type AdjacencyMatrix = number[]; // a 1 means 'connected'
declare type CompleteGraphEdge = { from: number; to: number; weight: number };
declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][]; // a number means 'weight'

declare type BinaryNode<T> = {
	value: T;
	left: BinaryNode<T> | null;
	right: BinaryNode<T> | null;
};

function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {

	// seen
	if (seen[curr]) {
		return false;
	}

	seen[curr] = true;


	// recurse
	// pre
	path.push(curr);

	// if found a needle
	if (curr === needle) {
		return true;
	}


	// recurse
	const list = graph.[curr];
	for (let i = 0; i < list.length; ++i) {
		const edge = list[i];

		if (walk(graph, edge.to, needle, seen, path)) {
			return true;
		}
	}

	// post
	path.pop();

	return false;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number [] | null {

	const seen: boolean[] = newArray(graph.length).fill(false);
	const path: number[] = [];

	walk(graph, source, needle, seen, path);

	if (path.length === 0) {
		return null;
	}

	return path;
}
