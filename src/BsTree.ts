/* 二叉树 */
class ENode {
    data: any;
    left: ENode | null;
    right: ENode | null;
    count: number;
    constructor(data: any) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}



class BSTree {
    root: ENode | null;
    constructor() {
        this.root = null;
    }
    insert(data: any) {
        let newNode = new ENode(data)
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node: ENode, newNode: ENode) {
        if (node.data > newNode.data) {
            if (!node.left) {

                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
        node.count++
    }
    preview() {
        let res: any = []
        const previewNode = (root: ENode | null) => {
            if (root) {
                res.push(root.data);
                previewNode(root.left)
                previewNode(root.right)
            }

        }
        if (!this.root) return
        previewNode(this.root)
        return res
    }
}


const tree = new BSTree();
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(-1)
tree.insert(-2)
tree.insert(-3)
// console.log(tree);
const res = tree.preview();
console.log(res);


