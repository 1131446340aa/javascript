var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// namespace aaaa {
//     export let a = 4
// }
var test;
(function (test) {
    test.a = "3";
})(test || (test = {}));
/// <reference path = "./test.ts" /> 
console.log(test.a);
var num = 3;
var arr5 = [1, 2, 3];
var strarr = ['1', '3'];
var numorstrarr = [1, '3'];
var numorstrarr1 = [1, '3'];
var interfaceObj = {
    num: 4,
    str: '4'
};
interfaceObj.select = '5';
var TestClass = /** @class */ (function () {
    function TestClass(a) {
        this.a = a;
    }
    return TestClass;
}());
var interTest = {
    a: 5
};
var Ani = /** @class */ (function () {
    function Ani(name) {
        this.num = 4;
        this.name = name;
    }
    return Ani;
}());
var Per = /** @class */ (function (_super) {
    __extends(Per, _super);
    function Per(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    return Per;
}(Ani));
new Per('1', 14);
var Sex;
(function (Sex) {
    Sex[Sex["Man"] = 3] = "Man";
    Sex[Sex["Woman"] = 4] = "Woman";
})(Sex || (Sex = {}));
console.log(Sex[4]);
var inObj = {};
inObj.a = 4;
inObj.name = 4;
var huang;
(function (huang) {
    huang.a = 4;
})(huang || (huang = {}));
console.log(huang.a);
var Animal = /** @class */ (function () {
    function Animal(name) {
    }
    return Animal;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name) {
        return _super.call(this, name) || this;
    }
    Person.prototype.eat = function () {
    };
    return Person;
}(Animal));
function test2(a) {
    return a;
}
test2(5);
function test3(a) {
    return a;
}
test3({
    length: 4,
    a: 5
});
function test4(a) {
}
test4([]);
function test5(a, b) {
    // return a[b]
}
test5({ length: 4 }, 'length');
var box = { height: 5, width: 6, scale: 10 };
var a1111 = 4;
var a2 = 3;
function rename(a) {
}
rename('4');
function playBasketball(name1, age1) {
    return age1;
}
playBasketball('3', 5);
playBasketball('3', 'a');
var Test = /** @class */ (function () {
    function Test(name) {
        this.name = name;
        this.name = name;
    }
    return Test;
}());
var test1 = new Test('a');
var objx = {};
objx['a'] = 3;
console.log(objx.a);
for (var i = 0; i < 10; i++) {
    objx[i] = i;
}
// function foo (a: number):number {
//     return a + 1;
// }
// function GetValue(): void {
//     return this.value;
// }
// GetValue()

