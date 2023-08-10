// Ek numbers ka Array bnana hai. Numbers me se jo max number hai vo find out 
// Krna hai but reduce function se Krna hai ye only

// let nums1 = [1, 2,120, 3, 5, 61, 115];
// let max = nums1.reduce((pre, curr) => {
//   if (pre > curr) {
//     return pre;
//   } else {
//     return curr;
//   }
// },0);
// console.log(max);

// let arr = ["hello world","my name is","wecode academy","anwar mohammad"]
// //arr ko split krna he space se
// let ans = []
// //blank arr me split word ko push krna he
// for(let value of arr){
//    let split = value.split(" ")
//    for(let val of split){
//     ans.push(val)
//    }
// }
// console.log(ans);

// let arr = ["123","456","789","876","543"]
// let ans = []
// for(let value of arr){
//     let split = value.split("")
//     for(let val of split){
//         ans.push(val)
//     }
// }
// console.log(ans);


// let ans = arr.map((value)=>{
//     let splits = value.split("")
 
//     let number = splits.map((data) => Number(data))
//     return number
// })
// console.log(ans.flat());





// let arr = [1,2,3,3,4,5,2,5,6]
// // let set = new Set(arr)
// // console.log(set);

// let arr2 = []
// for(let data of arr){
//     if(arr2.includes(data)){
//         continue
//     }
//     else{
//         arr2.push(data)
//     }
// }
// console.log(arr2);

// for(let i = 1; i<=5; i++){
//     let str = ""
//   for(let j = i; j<=5; j++){
//    str = str + j
//   }
//   console.log(str);
// }
function get(){
    return 1,2
}
