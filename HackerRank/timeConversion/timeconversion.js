function timeConversion(s) {
    // Write your code here
    let arr = s.split(':')
    
    if (arr[2].includes('PM')){
        if(arr[0] != 12){
            arr[0]= parseInt(arr[0])
            arr[0] += 12
        }
        arr[2] = arr[2].substr(0, 2)
    } else {
        if(arr[0] == 12){
            arr[0] = '00'
        }
        arr[2] = arr[2].substr(0,2)
    }
    
    console.log(arr.join(":"))
}

timeConversion('12:45:54PM')