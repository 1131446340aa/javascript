function test(number: string): string

function test(number: number): number

function test(number: number | string): number | string {
    return number
}
test(3)
let numArr: ReadonlyArray<number | string> = [1, '4']
test('a')

function e(x: string) {
    return x
}
class Per {
    private sex: string = '3'
    constructor(public readonly number: number, protected x: string) {
        this.number = number

        this.x = '1'
    }
    run() {
        console.log(this.x, this.number, this.sex);
    }
}


class P extends Per {
    constructor(number: number, x: string) {
        super(number, x)
    }

}
let x = new Per(3, '4')

x.run()

let p = new P(3, '5')
p.run()

function AAA<T>(num: T): T {
    return num

}
AAA<number>(7)
AAA<string>('3')

