// 1. Create an array with three elements and print out the second element.
// let arr = [1,2,3]
// console.log(arr[1]);

// Question 2
// Create an array with five elements and print out the length of the array.
// let arr = [1,2,3,4,5]
// console.log(arr.length);

//3. Create an array with four elements and print out each element using a for loop.
// let arr = [1,2,3,4]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


//4. Create an array with six elements and print out each element using a forEach loop.
// let arr = [1,2,3,4,5,6]
// let ans = arr.forEach((value)=>{
//     console.log(value);
// })

//5. Create an array with three elements and add a fourth element to the end of 
// the array.
// let arr = [1,2,3]
// let ans = arr.push(4)
// console.log(arr);

//6. Create an array with four elements and remove the second element.
// let arr = [1,2,3,4]
// arr.splice(1,1)
// console.log(arr);

//7. Create an array with five elements and remove the last element.
// let arr = [1,2,3,4,5]
// arr.pop()
// console.log(arr);

//8. Create an array with three elements and check if the array includes a 
// specific value.
// let arr = [1,2,3]
// let value = 2
// if(arr.includes(value)){
//     console.log("Yes inculdes");
// }
// else{
//     console.log("No");
// }

//9.Create an array with five elements and sort the array in ascending order.
// let arr = [1,4,3,2,5]
// let ans = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(ans);

//10. Create an array with five elements and sort the array in descending order.
// let arr = [1,4,5,3,2]
// let ans = arr.sort((a,b)=>{
//     return b-a
// })
// console.log(ans);

//11. Create two arrays, concatenate them and print out the resulting array.
// let arr = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// let concatarr = arr.concat(arr2)
// console.log(concatarr);

//12. Create an array with three elements and convert it to a string.
// let arr = [1,2,3]
// let ans = arr.toString()
// console.log(ans);

//13. Create an array with four elements and reverse the order of the elements.
// let arr = [1,2,3,4]
// arr.reverse()
// console.log(arr);

//14. Create an array with five elements and find the index of a specific value.
// let arr = [1,2,3,4,5]
// let ans = arr.findIndex((value)=>{
//     return value === 4
// })
// console.log(ans);
// console.log(arr.indexOf(3));

//15. Create an array with six elements and slice the array to create a new 
// array with the first three elements.
// let arr = [1,2,3,4,5,6]
// let ans = arr.slice(0,3)
// console.log(ans);

//16. Create an array with six elements and use the map method to double each 
// element.
// let arr = [1,2,3,4,5,6]
// let ans = arr.map((value)=>{
//     return value * 2
// })
// console.log(ans);

//17. Create an array with four elements and use the while loop to calculate 
// the sum of all elements.
// let arr = [1,2,3,4]
// let sum = 0
// let i = 0
// while(i < arr.length){
//     sum = sum + arr[i]
//     i++
// }
// console.log(sum);

//18. Create an array with five elements and use the filter method to return
//  only the even numbers.
// let arr = [1,2,3,4,5]
// let ans = arr.filter((value)=>{
//     return value % 2 === 0
// })
// console.log(ans);

//19. Create an array with three elements and use the join method to concatenate 
// the elements with a dash (-) separator.
// let arr = [1,2,3]
// console.log(arr.join("-"));

//20. Create two arrays with three elements each and use the concat method to 
// combine them into a new array.
// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let combinearr = arr.concat(arr2)
// console.log(combinearr);

//New excercise Questions

//21. Create an array called fruits that contains the following elements: 
// "apple", "banana", "orange". Now check if "orange" is in the fruits array.
// let fruits = ["apple","banana","orange"]
// if(fruits.includes("orange")){
//     console.log("Yes");
// }else{
//     console.log("No");
// }


//22. Given an array of numbers, write a function that returns the sum of all 
// the even numbers in the array.
// function numberofSum(number){
//     let sum = 0
//     for(let i = 0; i < number.length; i++){
//         if(number[i] % 2 === 0){
//             sum = sum + number[i]
//         }
//     }
//     return sum
// }
// let number = [1,2,3,4,5,6,7,8]
// let result = numberofSum(number)
// console.log(result);

//23.Given two arrays of numbers, write a function that returns a new array that 
// contains only the unique elements from both arrays.
// ?????????


//24. Given an array of strings, write a function that returns the longest 
// string in the array.
// function findlongest(arr){
//     let longest = "";
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > longest.length){
//             longest = arr[i]
//         }
//     }
//     return longest
// }
// let arr = ["ab","abc","abcd","abcdef"]
// let result = findlongest(arr)
// console.log(result);

//25.Question 5: Write a function that takes an array of numbers and returns the 
// largest number in the array.


//26. Question 6: Write a function that takes an array of numbers and returns a 
// new array that only contains the even numbers from the original array.
// let arr = [1,2,3,45,6,7,8,9]
// let ans = arr.filter((value)=>{
//     if(value % 2 === 0){
//         return value
//     }
// })
// console.log(ans);


//27.Write a function that takes an array of strings and returns a new array 
// that only contains strings with more than 5 characters.
// let arr = ["banana","mango","apple","anwar mohammad","wecode","jaipur"]
// let ans = arr.filter((value)=>{
//     return value.length > 5
// })
// console.log(ans);

//28...?????

//29. Question 9: Write a function that takes an array of numbers and returns a 
// new array where each element is the square of the original element
// let arr = [1,2,3,4,5,6]
// let ans = arr.map((value)=>{
//     return value * value
// })
// console.log(ans);


//30. Question 10: Write a function that takes an array of numbers and returns 
// the average of all the numbers in the array.
// let arr = [2,3,4,5,1]
// let sum = arr.reduce((pre,curr)=>{
//     return pre + curr
// },0)

// let result = sum / arr.length
// console.log(result);

//31.Question 11: Write a function that takes an array of numbers and returns a 
// new array that only contains numbers that are greater than 5. Use filter 
// function

// let arr = [1,5,34,2,32,4,3,12,22]
// let ans = arr.filter((value)=>{
//     return value > 5
// })
// console.log(ans);

//32. Question 12: Write a function that takes an array of numbers and returns a 
// new array where each element is the original element plus 1. use map function
// let arr = [1,2,3,4,5,6,7]
// let ans = arr.map((value)=>{
//     return value + 1
// })
// console.log(ans);

//33. 


// let socre = [
//     {goals:22},
//     {goals:11}
// ]
// let final = socre.reduce((pre,curr)=>{
//     return pre + socre.goals,0
// })
// console.log(final);


















