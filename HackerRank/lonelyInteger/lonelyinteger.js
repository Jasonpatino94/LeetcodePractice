const lonelyinteger = (a) => {
    // Write your code here
    let allDigits = {}
    
    a.forEach((i) => {
        if (!allDigits[i]){
            allDigits[i] = 1
        } else {
            allDigits[i]+=1
        }
    })

    // for(let i = 0; i < a.length; i++){
    //     if(!allDigits[a[i]]){
    //         allDigits[a[i]] = 1
    //     } else {
    //         allDigits[a[i]]+=1
    //     }

    // }

    for (const [key, value] of Object.entries(allDigits)) {
        if(value === 1){
          console.log(key)
        }
    }

}

lonelyinteger([1,1,2,2,3,3,4])