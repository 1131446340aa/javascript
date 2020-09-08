// function log3(target: any, attr: any) {
// target.url=5
// target[attr]()
// }

// class http {

//     public url?: string
//     constructor() {
//         // this.url = "dasdfas"
//     }
//     @log3
//     setdata() {
//         console.log(this.url);
//     }
// }
// var http1 = new http()
// http1.setdata()



function test(num: number): Function {
    console.log(num);
    return function (Per: Person, name: string,obj:object): void {
        console.log(Per);
        console.log(name);
        console.log(obj);
    }
}

class Person {
    @test(8)
    run() { }

}


// let a = new Person()


