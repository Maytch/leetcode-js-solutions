# Write your MySQL query statement below
SELECT 
    Score,
    (
        SELECT 
            count(*) 
        FROM (
            SELECT DISTINCT 
                Score unqiueScore 
            FROM Scores
        ) uniqueScores 
        WHERE unqiueScore >= Score
    ) Rank
FROM Scores
ORDER BY Score DESC
