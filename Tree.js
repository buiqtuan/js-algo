class TreeNode {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	//remove the previous-added node
	remove() {
		this.children.shift();
	}

	//remove the node that matches the input data
	remove(data) {
		this.children = this.children.filter(e => {
			return e === data;
		});
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const node = arr.shift();

			arr.push(...node.children);
			fn(node);
		}
	}

	traverseDF(fn) {
		const arr = [this.root];
		
		while (arr.length) {
			let node = arr.shift();

			arr.unshift(...node.children);

			fn(node);
		}
	}
}

function levelWidth(rootNode = new TreeNode(null)) {
	if (rootNode.children.length === 0) {
		return [];
	}

	let arr = [rootNode];
	let levelArr = [1];
	let childCounter = 0;
	while (arr.length) {
        let tempArr = [];
        for (let node in arr) {
            tempArr.push(...node.children);
            childCounter = childCounter + node.children.length;
        }
        levelArr.push(childCounter);
        arr = tempArr;
	}

	return levelArr;
}

class BinaryNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data > this.data && this.right) {
			this.right.insert(data);
		} else if (data > this.data) {
			this.right = new BinaryNode(data);
		} else if (data < this.data && this.left) {
			this.left.insert(data);
		} else if (data < this.data) {
			this.left = new BinaryNode(data);
		}
	}

	isContain(data) {
		let node = {
			data: this.data,
			left: this.left,
			right: this.right
		};

		while (true) {
			if (data < node.data) {
				if (!node.left) {
					break;
				}
				node.data = node.left.data;
				node.left = node.left.left;
				node.right = node.left.right;
			} else if (data > node.data) {
				if (!node.right) {
					break;
				}
				node.data = node.right.data;
				node.left = node.right.left;
				node.right = node.right.right;
			} else {
				return true;
			}
		}

		return false;
	}
}

function validateBST(node = new BinaryNode(), min = null, max = null) {
	if (!min && node.data < min) {
		return false;
	}

	if (!max && node.data > max) {
		return false;
	}

	if (node.left && !validateBST(node.left, min, node.data)) {
		return false;
	}

	if (node.right && !validateBST(node.right, node.data, max)) {
		return false;
	}

	return true;
}