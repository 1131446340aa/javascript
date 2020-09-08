

//定义接口
interface interPar {
    name: string
    age: number
    sex?: string
    eat(): void
    run(): void
    sum(a: number, b: number): number
}


class Parents implements interPar {
    constructor(public name: string, public age: number, public sex?: string) {
    }
    eat = () => console.log('eat')
    run = () => console.log('run')
    sum = (a: number, b: number) => a + b
}

class Child extends Parents {
    constructor(public name: string, public age: number, public read: string, public height: string) {
        super(name, age)
    }
    run = () => {
        console.log('run----child');
    }
}
let C = new Child('xioawang', 18, 'english', '1.88m')
C.eat()
C.run()

class Child2 extends Parents {
    constructor(public name: string, public age: number, public sex: string, public read: string, public height: string) {
        super(name, age, sex)
    }

    eat = () => console.log('eat-----child');

}
let time: number = Date.now();
for (let i = 0; i < 10000; i++) {
    window.requestAnimationFrame(() => {
        console.log(12);
        
        if (i === 9999) {
            console.log(Date.now() - time);
        }
    })

}

// let p= new Promise(res => {
//     setTimeout(() => {
//         console.log(1234);
//         res(3 as number)

//     }, 2000);
// })
// p.then(res=>{
//     console.log(res);
// })

interface Obj111 {
    names: string
    age: number
}


function Obj<T extends Obj111, U extends keyof T>(obj: T, key: string): U {
    console.log(key);

    return obj[key]
}

let obj1 = {
    names: "xioa",
    age: 18
}

console.log(Obj(obj1, 'names'));


function rest(...parmas: [number, string, number]) {
    let [a, b, c] = parmas
    return a + b + c
}
rest(3, '4', 5)



