/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let seconds = 0;
    
    for (let i = 0; i < points.length - 1; i++) {
        const point = points[i];
        const nextPoint = points[i + 1];
        
        const diffX = Math.abs(point[0] - nextPoint[0]);
        const diffY = Math.abs(point[1] - nextPoint[1]);
        
        seconds += Math.max(diffX, diffY);
    }
    
    return seconds;
};
