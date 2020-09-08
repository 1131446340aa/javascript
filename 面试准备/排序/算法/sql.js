let predicate = function (row) {
    return row.age < 30
}
const users = [
    { id: 0, name: 'wxj', age: 18, sex: 'male' },
    { id: 1, name: 'john', age: 28, sex: 'male' },
    { id: 2, name: 'bob', age: 33, sex: 'male' },
    { id: 3, name: 'tom', age: 22, sex: 'male' },
    { id: 4, name: 'alice', age: 18, sex: 'female' },
    { id: 5, name: 'rihana', age: 35, sex: 'female' },
    { id: 6, name: 'sara', age: 20, sex: 'female' }
];
class Sql {
    constructor(data) {
        this.data = data
    }
    groupBy(type) {
        let obj = this.data.reduce((all, item) => {
            all[item[type]] || (all[item[type]] = [])
            all[item[type]].push(item)
            return all
        }, {})
        return new Sql(obj)
    }
    where(callback) {
        let obj = Object.keys(this.data).reduce((obj, ArrayItem) => {
            obj[ArrayItem] = this.data[ArrayItem].filter(item => {
                return callback(item)
            })
            return obj
        }, {})
        return new Sql(obj)
    }
    getResult() {
        return this.data
    }
}

let sql = new Sql(users)

var result = sql
    .groupBy('sex') // 链式调用
    .where(predicate)
    .getResult();

    console.log(result)