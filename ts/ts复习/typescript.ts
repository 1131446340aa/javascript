

 /// <reference path = "./test.ts" /> 
console.log(test.a);

let num: number = 3

let arr5: Array<number> = [1, 2, 3]

let strarr: string[] = ['1', '3']

let numorstrarr: (string | number)[] = [1, '3']
let numorstrarr1: ReadonlyArray<number | string> = [1, '3']
interface Obj {
    num: number,
    str: string
    select?: string
}
let interfaceObj: Obj = {
    num: 4,
    str: '4'
}
interfaceObj.select = '5'
// function select(a: number, b?: number): void {

// }
// select(4)

interface inter {
    readonly a: number
}
type number2 = number

class TestClass implements inter {
    a: number
    constructor(a: number) {
        this.a = a
    }
}
let interTest: inter = {
    a: 5
}


class Ani {
    readonly num = 4
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class Per extends Ani {
    age: number
    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }
}
new Per('1', 14)

enum Sex {
    Man = 3,
    Woman
}
console.log(Sex[4]);

interface otherInter {
    [other: string]: any
}
let inObj: otherInter = {

}
inObj.a = 4
inObj.name = 4

namespace huang {
    export let a = 4
}

console.log(huang.a);

abstract class Animal {
    abstract eat(): void
    constructor(name: string) {

    }
}

class Person extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {

    }
}

// class Num {
//     constructor(public num: number) {
//         this.num = num
//     }
// } let N = new Num(3)


// function test<T>(a: T): T {
//     return a
// }
// test<number>(5)
// test(6)

interface len {
    length: number
}

function test2<T extends number>(a: T): T {
    return a
}
test2(5)

function test3<T extends len>(a: T): T {
    return a
}
test3({
    length: 4,
    a: 5
})
function test4(a: len) {

}
test4([])

function test5<T extends len, U extends keyof T>(a: T, b?: U) {
    // return a[b]
}
test5({ length: 4 }, 'length')

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };

type number1 = number

let a1111: number1 = 4

let a2: string | number1 = 3


function rename(a: string) {

}
rename('4')


function playBasketball(name: string, age: string): string
function playBasketball(x: string, y: number): number
function playBasketball(name1, age1) {
    return age1
}
playBasketball('3', 5)
playBasketball('3', 'a')

interface ClassMoreParmas {
    [parma: string]: number
}

class Test {

    constructor(public name: string) {
        this.name = name
    }
}
let test1 = new Test('a')


let objx: ClassMoreParmas = {}

objx['a'] = 3

console.log(objx.a);


for (let i = 0; i < 10; i++) {
    objx[i] = i
}

// function foo (a: number):number {

//     return a + 1;

// }


// function GetValue(): void {
//     return this.value;
// }

// GetValue()



