const twoSum = (nums, target) => {
    const arr = []
    for (let i = 0; i < nums.length; i++)
        for (let j = i+1; j < nums.length; j++){
            let first = nums[i]
            let second = nums[j]

            if (first + second === target){
             arr.push(i)
             arr.push(j)
                console.log(arr)
            }
        }
}

twoSum([3,2,4], 6)
//output = [0,1]