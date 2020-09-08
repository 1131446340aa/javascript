let Stack1 = []
let Stack2 = []

function push(value){
    while(Stack2.length){
        Stack1.push(Stack2.pop())
    }
    Stack1.push(value)
}


function shift(){
    while(Stack1.length){
        Stack2.push(Stack1.pop())
    }
    return Stack2.pop()
}
push(1)
push(2)
push(3)
shift()
shift()
push(4)
console.log(Stack1)