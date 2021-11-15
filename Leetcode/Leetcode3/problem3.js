// const lengthOfLongestSubstring = (s) => {
//     let ans = new Set()
    
//     for(char of s){
//         ans.add(char)
//     }

//     console.log(ans.size)
// };
// top failed


// const lengthOfLongestSubstring = (s) => {
//     let arr = []
//     let compareArr= []
//     for(char of s){
//         if(!compareArr.includes(char)){
//             compareArr.push(char)
//         }else{
//             if(compareArr.length > arr.length){
//                 arr = compareArr
//             }
//                compareArr = []
//                compareArr.push(char)
//         }
//     }

//     if(compareArr.length >arr.length) {
//         arr = compareArr
//     }

//     console.log(arr)
// };
// did not work again

// const lengthOfLongestSubstring = (s) => {
//     let count = 0
//     for (let i = 0 ; i < s.length ; i++){
//         let char = s[i]
//         let set = new Set(char)

//         for (let j = i+1 ; j < s.length ; j++){
//             let char = s[j]
//             if (set.has(char)){
//                 break;
//             } else {
//                 set.add(char)
//             }
//         } 
//         if (set.size > count) {
//             count = set.size
//         }
//     }
//     console.log(count)
// }

const lengthOfLongestSubstring = (s) => {
    let count = 0
 
    let i = 0
    let j = 0
    let n = s.length
    let set = new Set()

    while (i<n && j<n){
        let char = s[j]
        if (!set.has(char)){
            set.add(char)
            j++
            if (count < j-i){
                count = j-i 
            }
        }else{
            set.delete(s[i])
            i++
        }
    }
    console.log(count)
}

lengthOfLongestSubstring("aababb")