/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let skylineRow = [];
    let skylineCol = [];
    
    for (let row = 0; row < grid.length; row++) {
        const gridRow = grid[row];
        skylineRow.push(Math.max(...gridRow));
        
        for (let col = 0; col < gridRow.length; col++) {
            const gridItem = gridRow[col];
            if (!skylineCol[col] || gridItem > skylineCol[col]) skylineCol[col] = gridItem;
        }
    }
    
    let heightIncrease = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            heightIncrease += Math.min(skylineRow[row], skylineCol[col]) - grid[row][col];
        }
    }
    
    return heightIncrease;
};
