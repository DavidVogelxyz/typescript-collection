export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

	// the most simple base case, that requires 0 computation
	// NB: solve the simple problems first and simplify the recursion
	// a structural check
	if (a === null && b === null) {
		return true;
	}

	// next most simple that requires 0 computation - one is null and the other is not
	// a structural check
	if (a === null || b === null) {
		return false;
	}

	// next most simple: if any point, a != b
	// a value check
	if (a.value !== b.value) {
		return false;
	}

	return compare(a.left, b.left) && compare(a.right, b.right);
}
