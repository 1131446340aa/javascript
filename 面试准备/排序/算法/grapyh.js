class Graphy {
    constructor() {
        this.root = null
        this.length = 0
        this.index = 0
    }
    appendNode(node) {
        if (!this.root) {
            this.root = node


        } else {
            node.parent = this.root
            this.append(node)

        }
        this.length++
    }
    append(node) {
        // console.log(node.parent.value);
        
        if (!node.parent.left) {
            node.parent.left = node
            // console.log(1);
            
        }
        else if (!node.parent.middle) {
            node.parent.middle = node
            // console.log(2);
            
        }
        else if (!node.parent.right) {
            node.parent.right = node
            // console.log(3);
            
        } else {
            this.index++
            // if(this.index===2){
            //     console.log(node.value);
                
            // }
            // console.log(this.index);
            
            if (this.index < 4) {
                // console.log(4);
                // console.log(this.index+"");
                while(node.parent.left && node.parent.middle){
                    node.parent=node.parent.left
                    // console.log(1);
                    
                }
                             
                this.append(node)
            }
            // else if (this.index > 3 && this.index < 7) {
            //     // node.parent = node.parent.middle
            //     // this.append(node)
            // }
            else {
                if (this.index === 9) {
                    this.index = 0
                }
                // node.parent = node.parent.right
                // this.append(node)
               
            }

        }

    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.middle = null
        this.right = null
    }
}

let g = new Graphy()


for (let i = 0; i < 15; i++) {
    g.appendNode(new Node(i))
}
console.log(g.root.left.left.middle.value);






