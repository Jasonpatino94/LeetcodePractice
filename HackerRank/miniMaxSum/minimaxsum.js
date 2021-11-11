const miniMaxSum = (arr) => {
    let highestSum = arr[0]
    let smallestSum = arr[0]
    let sumTotal= 0

    for (let i = 0; i<arr.length; i++) {
        if( arr[i] > highestSum){
            highestSum = arr[i]
        }

        if(arr[i] < smallestSum){
            smallestSum = arr[i]
        }

        sumTotal += arr[i]
    }

    let maxSum = sumTotal - smallestSum
    let minSum = sumTotal - highestSum

    console.log(minSum, maxSum)
    
}

miniMaxSum([1,2,3,4,5])