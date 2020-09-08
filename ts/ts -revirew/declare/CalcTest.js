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
function test(number) {
    return number;
}
test(3);
var numArr = [1, '4'];
test('a');
function e(x) {
    return x;
}
var Per = /** @class */ (function () {
    function Per(number, x) {
        this.number = number;
        this.x = x;
        this.sex = '3';
        this.number = number;
        this.x = '1';
    }
    Per.prototype.run = function () {
        console.log(this.x, this.number, this.sex);
    };
    return Per;
}());
var P = /** @class */ (function (_super) {
    __extends(P, _super);
    function P(number, x) {
        return _super.call(this, number, x) || this;
    }
    return P;
}(Per));
var x = new Per(3, '4');
x.run();
var p = new P(3, '5');
p.run();


