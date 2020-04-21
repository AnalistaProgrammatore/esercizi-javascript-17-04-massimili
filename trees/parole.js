function Node(data, left, right, contatore) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.contatore = contatore
    this.show = show;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.conta = conta
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
function conta(data) {
    var n = new Node(data, null, null, 1);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data == current.data) {
                current.contatore++
                break
            }
            else
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
        console.log(node.data + " " + node.contatore)
        inOrder(node.right);
    }
}
var nums = new BST();
var testo = "a quei tempi era sempre festa bastava uscire di casa e traversare la strada per diventare come matte "
    + "e tutto era cosí bello specialmente di notte che tornando stanche morte speravano ancora che qualcosa succedesse "
    + "che scoppiasse un incendio che in casa nascesse un bambino "
    + "e magari venisse giorno all'improvviso e tutta la gente uscisse in strada e si potesse continuare a camminare "
    + "camminare fino ai prati e fin dietro le colline siete sane siete giovani dicevano siete ragazze non avete pensieri "
    + "si capisce eppure una di loro quella Tina che era uscita zoppa dall'ospedale e in casa non aveva da mangiare "
    + "anche lei rideva per niente e una sera trottando dietro gli altri "
    + "si era fermata e si era messa a piangere perché dormire era una stupidaggine e rubava tempo all'allegria"
var parola = testo.split(" ")
for (i = 0; i < parola.length; i++) {
    nums.conta(parola[i]);
}
console.log("Inorder traversal: ");
inOrder(nums.root)

