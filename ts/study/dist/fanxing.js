"use strict";
class mysql {
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        return true;
    }
    delete(id) {
        return true;
    }
    get(id) {
        return [];
    }
}
class USER {
}
var u = new USER();
u.username = "lisi";
u.password = '123456';
var omysql = new mysql();
omysql.add(u);
//# sourceMappingURL=fanxing.js.map