/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    var width = grid[0].length;
    var height = grid.length;
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            if (!grid[y][x]) continue;
            
            // left
            if (x === 0 || !grid[y][x - 1]) {
                perimeter++;
            }
            // up
            if (y === 0 || !grid[y - 1][x]) {
                perimeter++;
            }
            // right
            if (x === width - 1 || !grid[y][x + 1]) {
                perimeter++;
            }
            // down
            if (y === height - 1 || !grid[y + 1][x]) {
                perimeter++;
            }
        }
    }
    
    return perimeter;
};
