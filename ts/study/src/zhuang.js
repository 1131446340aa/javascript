// function log3(target: any, attr: any) {
// target.url=5
// target[attr]()
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function test(num) {
    console.log(num);
    return function (Per, name, obj) {
        console.log(Per);
        console.log(name);
        console.log(obj);
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () { };
    __decorate([
        test(8)
    ], Person.prototype, "run");
    return Person;
}());
var a = new Person();
