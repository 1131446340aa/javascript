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
var Parents = /** @class */ (function () {
    function Parents(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.eat = function () { return console.log('eat'); };
        this.run = function () { return console.log('run'); };
        this.sum = function (a, b) { return a + b; };
    }
    return Parents;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, read, height) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.read = read;
        _this.height = height;
        _this.run = function () {
            console.log('run----child');
        };
        return _this;
    }
    return Child;
}(Parents));
var C = new Child('xioawang', 18, 'english', '1.88m');
C.eat();
C.run();
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2(name, age, sex, read, height) {
        var _this = _super.call(this, name, age, sex) || this;
        _this.name = name;
        _this.age = age;
        _this.sex = sex;
        _this.read = read;
        _this.height = height;
        _this.eat = function () { return console.log('eat-----child'); };
        return _this;
    }
    return Child2;
}(Parents));
var time = Date.now();
var _loop_1 = function (i) {
    window.requestAnimationFrame(function () {
        console.log(12);
        if (i === 9999) {
            console.log(Date.now() - time);
        }
    });
};
for (var i = 0; i < 10000; i++) {
    _loop_1(i);
}
function Obj(obj, key) {
    console.log(key);
    return obj[key];
}
var obj1 = {
    names: "xioa",
    age: 18
};
console.log(Obj(obj1, 'names'));
function rest() {
    var parmas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parmas[_i] = arguments[_i];
    }
    var a = parmas[0], b = parmas[1], c = parmas[2];
    return a + b + c;
}
rest(3, '4', 5);
//# sourceMappingURL=lianxi.js.map