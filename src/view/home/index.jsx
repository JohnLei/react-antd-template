import React from 'react';

const Home = () => {
    return (
        <div>主页</div>
    )
}
export default Home
//数组去重
// let arr = [1,2,3,3,4,5,6,6,7,7,8,9,10,0,10,0]
// let obj = {}
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//    if(!obj[arr[index]]) {
//        newArr.push(arr[index])
//        obj[arr[index]] = true
//    }
    
// }
// console.log(newArr);

//找出数组中元素出现最多的并且记录次数
// let indexa
// let sum =0
// let newobj = {}
// let arr1 = [1,3,7,3,1,8,1,10,6,1]
// for (let i = 0; i < arr1.length; i++) {
//     if(newobj[arr1[i]]) {
//         newobj[arr1[i]] += 1
//     } else {
//         newobj[arr1[i]] = true
//     }
    
// }
// for (let j in newobj) {
//    if(newobj[j] > sum) {
//        sum = newobj[j]
//        indexa =j
//    }
// }
// console.log(sum);
// console.log(indexa);

//找出字符串出现最多的并且记录次数
// function getMaxstrCount (str) {
//   let newObj = {}
//   let maxCount = 0
//   let maxStr = ''
//   for (let i = 0; i < str.length; i++) {
//     if (!newObj[str.charAt(i)]) {
//       newObj[str.charAt(i)] = 1
//     } else {
//       newObj[str.charAt(i)] +=1
//     }
//   }
//   for (const key in newObj) {
//     if (newObj[key] > maxCount) {
//       maxCount = newObj[key]
//       maxStr = key
//     }
//   }
//   return `出现最多的字符为${maxStr},一共出现了${maxCount}次`
// }
// console.log(getMaxstrCount('javascriptjavacaas'));
//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// const isValid = (s) => {
//     if (s.length % 2 === 1) {
//         return false
//     }
//     //定义一个对象
//     const regObj = {
//         "{": "}",
//         "(": ")",
//         "[": "]",
//     }
//     //定义一个数组
//     let stack = []
//     for (let i = 0; i < s.length; i++) {
//        if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
//            //进栈
//            stack.push(s[i])
//        } else {
//            //出栈
//            const current = stack.pop()
//            if (s[i] !== regObj[current]) {
//                return false
//            }
//        }
//     }
//     if (stack.length) {
//         return false
//     }
//     return true
// }
// console.log(isValid("()"));