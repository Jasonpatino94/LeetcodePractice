// const twoSum = (nums, target) => {
//     const arr = []
//     for (let i = 0; i < nums.length; i++)
//         for (let j = i+1; j < nums.length; j++){
//             let first = nums[i]
//             let second = nums[j]

//             if (first + second === target){
//              arr.push(i)
//              arr.push(j)
//                 console.log(arr)
//             }
//         }
// }



//more efficient way
const twoSum = (nums, target) => {
    let stored = {}

    for(let [index, num] of nums.entries()){
        if (stored[num] !== undefined) console.log([stored[num], index])
        

        stored[target - num] = index
    }
}

twoSum([3,2,4,8,2], 6)
//output = [0,1]