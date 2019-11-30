# Write your MySQL query statement below
SELECT
    tomorrow.Id
FROM
    Weather tomorrow
LEFT JOIN
    Weather today ON Date_Sub(tomorrow.RecordDate, INTERVAL 1 DAY) = today.RecordDate
WHERE
    today.Temperature < tomorrow.Temperature;
