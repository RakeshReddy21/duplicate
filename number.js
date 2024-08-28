// // [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()
// // ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()
// // [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()
// // ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()
// // [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()
// // generate random otp 5 digit num using math.random

// arr= [12.345, 67.890, 34.567]
// console.log("Round each element to 2 decimal places using toFixed()")
// console.log(arr.map(x=>x.toFixed(2)))


// arr=['123abc', '456def', '789ghi']
// console.log("Convert each element to an integer using parseInt()")
// console.log(arr.map(x=>parseInt(x)))

// arr = [12, 34.56, 78, 90.12]
// console.log("Check if each element is an integer using isInteger()")
// console.log(arr.map(x=>Number.isInteger(x)))

// arr=['abc', 123, 'def', 456]
// console.log("Check if each element is NaN (Not a Number) using isNaN()")
// console.log(arr.map(a=>isNaN(a)))

// arr=[123.456, 789.012, 345.678]
// console.log("Format each element to have a precision of 4 significant digits using toPrecision()")
// console.log(arr.map(x=>x.toPrecision(4)))

// x=Math.random()*100000
// console.log("generate random otp 5 digit num using math.random")
// console.log(Math.round(x))


arr=prompt("Enter the number: ").split("").map(Number)
emp =[], unq=0;dup=0
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0;
    for(j of arr){
        if(i==j){
            c++
        }
        }
        if(c==1){
            unq=unq+i+" "
            // console.log(i)
        }
        else{
            dup=dup+i+" "
        }
}

if(unq.length==2){
    console.log("The Unique number is: ",unq)
    
}else{
    console.log("The unique numbers are: ",unq)
}
if(dup.length==2){
    console.log("The Duplicate number is: ",dup)
    
}else{
    console.log("The Duplicate numbers are: ",dup)
} 




arr=prompt("Enter the number: ").split("").map(Number)
emp =[], unq=0;dup=0
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0;
    for(j of arr){
        if(i==j){
            c++;
        }
        }
        if(c==1){
            console.log(i + "->" + c)
            // unq=unq+i+" "
        }
        else{
            // dup=dup+i+" "
            console.log(i + "->" + c)
        }
} 