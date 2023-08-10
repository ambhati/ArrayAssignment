// Distructring => uncpack ya chijo ko bahrar nikalna jisko hm bolte he distructure krna
 // jese cube hota he

// simple example 
//  const arr = [1,2,3,4,5]
//  const one = arr[0]
//  const two = arr[1]
//  console.log(one,two);

// easy way se kese kre
//array ka distructure
// const arr = [1,2,3,4,5,6,7,8,9,11,12,13,15]
// const [one,two,,four,,,,,,,,thirteen]= arr
// console.log(one,two,four,thirteen);


// ek array se dusre array me copy krna he
// let arr = [1,2,3,4,5]
// let arr1 = arr; //assigment // ek array me change krenge to dono me change hoga
// arr1.push(10)
// console.log(arr1,arr1);

// shallow copy => agar hamne shallow copy ki or obj me kuch bhi change kiya fir
//top lavel eliment me koi change nhi hoga nasted element me change hoga
// dono obj me change nhi hoga

// const arr = [1,2,3,4,[5,6],7,8]
// const arr2 = [...arr]  //shallow copy arr ki shallow copy arr2 me cli jayegi
// arr2.push(100)
// arr.push(500)
// arr[4].push(111)
// console.log(arr,arr2);

// deep copy => ye shallow ka jst ulta hota he isme kahi pr bhi change kro 
// dono me change nhi hoga  
// const arr = [1,2,[3,4],5]
// const ans = JSON.parse(JSON.stringify(arr))// array or obj ko agar deep copy krna he to 
// // sabse pehle string krna pdega string bnane ke bad wapas array me change krne ke 
// liye ek or function hota he JSON.parse(JSON.stringify(arr))
// obj ki deep copy bhi aese hi hogi lekin shallow copy alag hogi
// ans.push(20)
// console.log(ans,arr);

// Shallow copy => [...arr]
// deep copy => JSON.parse(JSON.stringify(arr))

// Default value
// const arr = [] // agar array ko khali krte he to undifined hoga or agar  
// array khali he or hme default value deni he to hm de sakte he
// agar array ke ander value he to vo value li jayegi nhi to default value li jayegi
// const [one=10,two=20,three=30,four=40] = arr
// console.log(one,two,three,four);


// Without concat function multiple array ko kese jode
// const arr = [1,2,3,4]
// const arr2 = [5,6,7,8]
// const arr3 = [...arr, ...arr2]
// console.log(arr3);


// Swapping / Replace
// let a = 10
// let b = 20
// let c = a //10
// a = b // 20
// b = c //10
// console.log(a,b);

// array distrctring se swap or replace krte he
// let a = 10;
// let b = 20;
// // console.log(a,b);
// [a,b] = [b,a];
// console.log(a,b);


//agar ek se jyada value return krni he function se to return value ko array me 
// dalna pdega

// function getdetail(){
//     return [1,2,3,4,5]
// }
// console.log(getdetail());


// Distructring in nasted array
// const arr = [1,2,3,4,[5,6,[7,8,9]]]
// const [one,,,,[five,,[,eight]]] = arr
// console.log(one,five,eight);

// easy way above this code
// const arr = [1,2,3,4,[5,6,[7,8,9]]]
// const [one,,,four,[five,,[,,nine]]] = arr
// console.log(arr);


// Distructring of obj
// let obj = {
//     name : "anwar mohammmad",
//     mobile : 999999999,
//     email : "ambhati54@gmail.com"
// }
// const {name,email} = obj
// console.log(name,email);


// Distructring of nasted obj
// let obj = {
//     name : "anwar mohammmad",
//     mobile : 999999999,
//     // email : "ambhati54@gmail.com",
//     address: {
//         pincode : 341510,
//         city : "merta city",
//     }
// }
// const {name,email,address: {city}} = obj
// console.log(name,email,city);

// default email kese de

// const {email ="bhati@gmail.com"} = obj 

// email variable name kese change kre re-naming

// const {email:mail ="bhati@gmail.com"} = obj 
// console.log(mail);


// function se obj detail print
// let obj = {
//     name : "anwar mohammmad",
//     mobile : 999999999,
//     email : "ambhati54@gmail.com",
//     address: {
//         pincode : 341510,
//         city : "merta city",
//     }
// }

// function getdetail(obj){
//     console.log(obj.name,obj.email);
// }
// getdetail(obj)


// function ke ander obj distructring
// function getdetail({name,mobile}){
//     console.log(name,mobile);
// }
// getdetail(obj)

// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8]
// let ans = [...arr3,...arr,...arr2]
// console.log(ans);

// let arr = [1,2,3,4]
// let [one = 50,two = 150,,,five = 200] = arr
// console.log(one,two,five);

// let obj = {
//     name : "anwar mohammmad",
//     mobile : 999999999,
//     email : "ambhati54@gmail.com",
//     address: {
//         pincode : 341510,
//         city : "merta city",
//     }
// }

// let {name : myName = "mohammad anwar",mobile: myMobile = 888888888,
// address:{pincode:myPin = 33333}} = obj

// console.log(obj);


