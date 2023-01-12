function sum (num1, num2) {
    return num1+num2;
}

function restar(num1,num2) {
    return num1 - num2;
}

function calc(num1, num2, cb) {
    return cb(num1,num2)
}

console.log(calc(1,8,sum))

////////////////

