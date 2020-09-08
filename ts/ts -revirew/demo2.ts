
// /// <reference path="./demo1.ts" />
// console.log(space);


interface Person {
    name: string,
    age: number,
    sex: string
}
num = '1234'

console.log(num);

function person<T extends Person, U extends keyof T>(p1: T, p2: U): T[U] {
    return p1[p2]
}
console.log(person({ name: "huang", age: 18, sex: 'man' }, 'age'));



// type x = number | string
// let a: x = 3

abstract class Test {
    abstract age(): number
}
class Test1 extends Test {
    constructor() {
        super()
    }
    age() {
        return 3
    }
}

class Person1 implements Person {

    constructor(public name: string, public sex: string, public age: number) {

    }
}
new Person1('1', '2', 3)


interface Per extends Person {
    x: string
}

let obj2: Per = {
    name: "3",
    sex: "a",
    age: 18,
    x: 'e'
}

class Animail {
    constructor(public age: number) {

    }
}

class Person3 extends Animail {
    constructor(age: number, public name: string) {
        super(age)
        this.name = name
    }
    run() {
        console.log(this.age, this.name);

    }
}

let p2 = new Person3(3, "huang")
p2.run()


class Mixin {
    test: () => void
}

class Mi implements Mixin {
    test() {

    }
}