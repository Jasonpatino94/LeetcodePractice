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

const lengthOfLongestSubstring = (s) => {
    let count = 0
    for (let i = 0 ; i < s.length ; i++){
        let char = s[i]
        let set = new Set(char)

        for (let j = i+1 ; j < s.length ; j++){
            let char = s[j]
            if (set.has(char)){
                break;
            } else {
                set.add(char)
            }
        } 
        if (set.size > count) {
            count = set.size
        }
    }
    console.log(count)
}

lengthOfLongestSubstring("aab")
//output : 3 
//Explanation: The answer is "abc", with the length of 3.