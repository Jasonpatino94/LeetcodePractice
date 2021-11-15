const diagonalDifference = (arr) => {
    // Write your code here
    // let firstDiag = arr[0][0] + arr[1][1] + arr[2][2];
    // let secondDiag = arr[0][2] + arr[1][1] + arr[2][0]
    // let ans = firstDiag - secondDiag;

    const length = arr.length
    let firstDiag = 0
    let secondDiag = 0
    let ans = 0


    for (let i = 0, j = (length - 1); i < length, j > -1 ; i++, j--) {
        firstDiag += arr[i][i]
        secondDiag += arr[i][j]
    }

    ans = firstDiag - secondDiag

    return Math.abs(ans)

}

diagonalDifference([11, 2, 4], [4, 5, 6], [10, 8, -12])