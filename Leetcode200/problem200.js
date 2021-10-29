const numIslands = (grid) => {
    let islands = 0
    
    for (let row in grid){
        for (let column in grid[row]){
            if (grid[row][column] === '1'){
                islands++
                console.log(typeof(parseInt(row)))
                turnToWater(parseInt(row), parseInt(column), grid)
            }
        }
    }

    console.log(islands)
};

const turnToWater = (row, column, grid) => {
    if (grid[row] === undefined || grid[row][column] === undefined || grid[row][column] === '0') return;
    
    grid[row][column] = '0'
    
    turnToWater(row+1, column, grid)
    turnToWater(row-1, column, grid)
    turnToWater(row, column+1, grid)
    turnToWater(row, column-1, grid)
}

numIslands([
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]])