//1. Write a program to reverse a string.
// let str = "my name is anwar mohammad"
// let splitstr = str.split('')
// console.log(splitstr);


// let reversestr = splitstr.reverse()
// console.log(reversestr);

// let joinstr = reversestr.join('')
// console.log(joinstr);

// function reversestr(str){
//     let splitstr = str.split('')
//     let reversestrr = splitstr.reverse()
//     let joinstr = reversestrr.join('')

//     return joinstr
// }

// let inputstr = "my name is anwar mohammad"
// let result = reversestr(inputstr)
// console.log(result);

// 3.Count the number of vowels in a string.

// function countvowl(str){
//     let vowelinclud = /[aeiouAEIOU]/g;
//     let vowelmatch = str.match(vowelinclud)
//     if(!vowelmatch){
//         return 0
//     }
//     return vowelmatch.length
// }

// let strinput = "anwar mohamamd mokalpur merta city"
// let result = countvowl(strinput)
// console.log(result);



// 4. Convert a string to uppercase.

// let str = "anwar mohaMMad mokalpur"
// let result = str.toUpperCase()
// console.log(result);

// 5. Convert a string to lowercase.
// let str = "WECODE acaDEMY jaipur"
// let result = str.toLowerCase()
// console.log(result);


// 6.Find the length of a string without using the built-in length property.
// function findlength(str){
//     let count = 0
//     for(let i = 0; str[i] !== undefined; i++){
//         count++
//     }
//     return count
// }
// let inputstr = "wecode academy jaipur"
// let result = findlength(inputstr)
// console.log(result);


// 7. Remove all spaces from a string.
// let str = "we code aca demy jaipur"
// let result = str.split(' ').join('')
// console.log(result);


// 8. Concatenate two strings without using the + operator.
// let str1 = "wecode "
// let str2 = "academy!"
// let result = str1.concat(str2)
// console.log(result);


// 10. Replace all occurrences of a substring with another substring in a given string.

// let str = "hello anwar, hello wecode academy, hello sajid sir"
// let result = str.replaceAll("hello", "hi")
// console.log(result);


// 11. Remove all occurrences of a specified character from a string.
// function removeChar(inputstr,removeChrr){
//     return inputstr.split(removeChrr).join('')
// }
// let inputstr = "anwar mohammad mokalpur"
// let result = removeChar(inputstr, "a")
// console.log(result);

// let str = "anwarm mohammad"
// let strremove = str.split("a").join('')
// console.log(strremove);

// 12. Check if a string starts with a specific substring.
// let str = "hello anwar, hello mohammad"
// let strwish = str.startsWith("hello")
// console.log(strwish);

//13. Check if a string starts with a specific substring.
// let str = "anwar hello, mohammad hello"
// let result = str.endsWith("hello")
// console.log(result);


// 14. Count the number of words in a sentence.
//  let str = "hi anwar mohammad merta city"
//  let result = str.split(' ').length
//  console.log(result);

// 15. Remove duplicate characters from a string.

// let str = "anwar mohammad mokalpur"
// let result = [... new Set(str)].join('')
// console.log(result);


let str = "anwar mohamamd mokalpur"
let splitstr = str.split(' ')
// console.log(splitstr);
for(let i = 0; i < splitstr.length; i++){
    splitstr[i] = splitstr[i][0].toUpperCase()+ splitstr[i].toLowerCase()
}
let result = splitstr.join(' ')
console.log(result);
