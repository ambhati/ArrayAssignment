// 1. Write a function that takes a string and returns a new string with all the
//  words reversed using the spread operator.

// let strarr = "anwar mohammad mokalpur"
// let strsplit = strarr.split(' ')
// let reverseword = strsplit.map(word => [...word].reverse().join(''))
// console.log(reverseword);



// 2. Create a function that takes in an array and uses the rest operator to remove 
// the first element from the array and finally return the array without first element.

// const arr = [1,2,3,4,5,6]
// const [,...other] = arr
// console.log(other);


// 3. Create a function that takes in an unknown number of arrays and uses the rest
//  operator to flatten them into a single array

// function flatten(...arr){
//     console.log(arr);
// }
// flatten(1,2,3,4,5,6)

// function flatten(...arrays){
//     let arrflattn = arrays.flat()
//     return arrflattn
// }
// let array1 = [1,2,3]
// let array2 = [4,5,6]
// let array3 = [7,8,9]
// let result = flatten(array1,array2,array3)
// console.log(result);


// 5. Write a function which takes in an array and create two separate arrays for odd 
// numbers and even numbers and finally merge them in the order that all odd numbers
//  will move to the left of the array and all even numbers to right of the array.

// let arr = [1,2,3,4,5,6,7,8,9,11,12,13,14]
// let evenArr = []
// let oddArr = []
// for(let value of arr){
//     if(value % 2 === 0){
//         evenArr.push(value)
//     }else{
//         oddArr.push(value)
//     }
// }
// let result = [...evenArr,...oddArr]
// console.log(result);

// function printDetails(arr){
//     let evenarr = []
//     let oddarr = []
//     for(let num of arr){
//         if(num % 2 === 0){
//             evenarr.push(num)
//         }else
//         {
//             oddarr.push(num)
//         }
//     }
//     return [...evenarr,...oddarr]
// }
// let value = [1,2,3,4,5,6,7,8,11,12,13,14,22]
// let result = printDetails(value)
// console.log(result);


// 7. Ask user below questions 
// ```
// What is your age  : 12
// What is your mobile : 9581894461
// What is your address : Jaipur
// ```

// Now create an object and use enhanced object literal property computation to create below object 
// ```
// {
//     age12 : 12
//     9581894461 : 'Mobile',
//     Jaipur12Address : 'Jaipur'
// }
// ```


// let value = {}
// let age = prompt("What is your age")
// let mobile = prompt("What is your mobile")
// let address = prompt("What is your address")

// value [`age${age}`] = Number(age)
// value [mobile] = 'mobile'
// value [`address${address}`] = address
// console.log(value);


// 8. Using enhanced object literal function, create a function sum which takes an 
// array as parameter and return sum of all the numbers in the array.
// let sum = {
//     calculate(arr){
//     return arr.reduce((total,value) => total + value ,0);
// }
// };
// let num = [1,2,3,4,5,6,7]
// let result = sum.calculate(num)
// console.log(result);


// 9. Take a number and check if number is greater than 80 or not. If yes then assign
//  100 to number else assign 200. Use short circuiting whereever possible. 

// let number = prompt("Enter number")
// number = number > 80 ? 100 : 200
// console.log(number); 


// 10. Create an array of 10 numbers. Now create a new array of 0 and 1 using Array 
// destructring based on if number is odd then 1 else 0
// ```
// Array : [1,2,3,4,5,6,7,8,9]
// Output: [1,0,1,0,1,0,1,0,1,0]

// let arr = [1,2,3,4,5,6,7,8,9]
// let ans = arr.map((value)=> value % 2 === 1 ? 1 : 0)
// console.log(ans);


// 11. Given an array of price, use map function to return a new array where each 
// price is converted to new price including tax, which is the price with a 10% tax 
// added.

// let arr = [10,20,30,100,200,60]
// let ans = arr.map((value) => value + (value / 100 * 10))
// console.log(ans);


// 12. Given an array of strings, use reduce to return the total number of
//  characters in all the strings.

// let arr = ["apple","banana","anwar","jaipur","merta"]
// let ans = arr.reduce((total,str) => total + str.length,0 )
// console.log(ans);

// 13. Given an array of strings, use map and reduce to return the total number of
//  characters in all the strings with a length less than 5.
// let arr = ["anwar","jaipur","merta","tree","one","five"]
// let ans = arr.map((ste) => ste.length )
// // console.log(ans)
// .filter((length) => length < 5)
// // console.log(ans);
// .reduce((total,length) => total + length , 0)
// console.log(ans);


// 14. Given an array of numbers, use map, filter, and reduce to return the sum of 
// all the odd numbers multiplied by 3

// let arr = [1,2,3,4,5,6,7,8,9]
// let ans = arr.filter((odd) => odd % 2 === 1)
// // console.log(ans);
// .map((multiple) => multiple * 3)
// // console.log(ans);
// .reduce((total,multiple) => total + multiple , 0)
// console.log(ans);


// 15. Given a string, reverse the order of the words in the string. For example, 
// "the quick brown fox" becomes "fox brown quick the".

// let str = "the quick brown fox"
// let strsplit = str.split(" ")
// console.log(strsplit);
// let strReverse = strsplit.reverse()
// console.log(strReverse);




