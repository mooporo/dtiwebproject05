console.log("SAU......")
//ตัวแปร var >> global, let >> local, const >> local แต่เปลี่ยนค่าไม่ได้
//Block scope {....}
//Operator

//COntroll FLow >> if, if-else, if-else-if, switch, while, do-while, for

//function ***
//no parameter/ no returns
//have parameter/ no return
//no parameter/has return
//have parameter/has return

//expression function / anonymosu function
//function -> default parameter

function funcA(){
    console.log("A....")
}

function funcB(x, y){
    console.log(x)
    console.log(y)
}
funcA()
funcB(10, 20 )

function funcC(){
    console.log("C....")
    return "Hi....."
}

function funcD(x, y){
    return x + y
    
}

console.log(funcC())
let wow = funcD(100, 200)

function funcE(a, b, c = 100 ){
    console.log(a + b + c)
}

function funcF(x='Hi', y = 100, z = 'WoW Wow Wow'){
    return x + y + z
}

funcE(10, 20)
funcE(10, 20, 30)
console.log( funcF())
console.log( funcF('Hello'))

console.log(10 + 10 + '10')
console.log(10 + 10 + 10)
let info1 = 100
let info2 = 200

//Alt + 9 6
console.log(info1 + " + " + info2 + " = " + (info1+info2))

console.log(`${info1} + ${info2} = ${info1+info2}`)

//Operator -> Ternary Operator -> _เงื่อนไข_?_Ture_:_False_

console.log(10 > 200 ? 'Hi...' : 'Hey...')
let x = 'Bangna'
let y = 'Bangpoo'
z = x > y ? 'Wow...' : 'Woo........'
console.log(z)
console.log(x > y)
console.log(x == y)
console.log(x < y)