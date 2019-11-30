# Write your MySQL query statement below
SELECT 
	Request_at as `Day`,
    ROUND((
		SUM(CASE WHEN Status="cancelled_by_client" THEN 1 ELSE 0 END) + 
        SUM(CASE WHEN Status="cancelled_by_driver" THEN 1 ELSE 0 END)
	) / COUNT(*), 2) as `Cancellation Rate`
FROM
	Trips t
LEFT JOIN Users c ON t.Client_Id = c.Users_Id
LEFT JOIN Users d ON t.Driver_Id = d.Users_Id
WHERE
	c.Banned = "No"
AND
	d.Banned = "No"
And
	Request_at >= '2013-10-01'
AND
	Request_at <= '2013-10-03'
GROUP BY
	Request_at;
