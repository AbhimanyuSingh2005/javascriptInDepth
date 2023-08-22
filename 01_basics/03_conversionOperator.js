let a = 33;
let c = '33abc';
let e = true ;
console.log(typeof a);
console.log(a);//


let b = Number(a);

console.log(typeof b);// number
console.log(b);// 33


let d = Number(c);

console.log(typeof d);// number
console.log(d);//NaN (Not in Number)

let f = Number(e);

console.log(typeof f);// number
console.log(f);//1 $ false => 0


// Boolean Conversion 

let num = -23;

let bool = Boolean(num)
console.log(typeof bool);// boolean
console.log(bool);//true
// 1 =>true & 0=> false & "" => false & "ads" =>  true