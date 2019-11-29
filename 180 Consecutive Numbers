# Write your MySQL query statement below
SELECT DISTINCT
	Num as ConsecutiveNums
FROM
	Logs l
WHERE
	Num = (SELECT Num FROM Logs WHERE Id = l.Id - 1)
AND
	Num = (SELECT Num FROM Logs WHERE Id = l.Id + 1)
