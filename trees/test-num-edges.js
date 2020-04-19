function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.contaSpigoli = contaSpigoli
}
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.data)
        inOrder(node.right);
    }
}
function contaSpigoli(node) {
    if (!(node == null)) {
        if (node.left != null) contaSinistri++;
        contaSpigoli(node.left);
        if (node.right != null) contaDestri++;
        contaSpigoli(node.right);
    }
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root)
var contaDestri = 0
var contaSinistri = 0
contaSpigoli(nums.root)
var spigoliTotali = contaDestri + contaSinistri
console.log("Numero nodi a sinistra: " + contaSinistri + ", a destra: " + contaDestri + ". Totali: " + spigoliTotali)
