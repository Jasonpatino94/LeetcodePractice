arr = [1, 2, 3, -1, -2, -3, 0, 0]

function plusMinus(arr) {
    // Write your code here
    // Write your code here
     let positive = 0
     let negative = 0
     let zero = 0
     let number = .5
     let newArr = []
     for(let i = 0 ; i < arr.length ; i++){
         if(arr[i] > 0){
             positive++
         } else if(arr[i] < 0){
             negative++
         } else{
             zero++
         }
     }
     let posAns = positive/arr.length
     let negAns = negative/arr.length
     let zeroAns = zero/arr.length

    

    console.log(posAns.toFixed(6))
    console.log(negAns.toFixed(6))
    console.log(zeroAns.toFixed(6))
}

plusMinus((arr))


