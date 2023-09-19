//console.log('Hi...')
//Expression function
let A = function fucn1(){
    console.log(111)
}

let B = function (){
    console.log(222)
}

let C = function (x, y){
    console.log(x + y)
}


A()
B()
C(10, 20)

//Arrow function
let d = ()=>{ console.log(222)}
let e = (x ,y)=>{
    console.log(x + y)
}

d()
e(100, 200)

let f = ()=> console.log(222)
let g = ()=> console.log(x + y)

let h = ()=> 'Hello...'

let i = ()=> {
    return 'Hello...'
}