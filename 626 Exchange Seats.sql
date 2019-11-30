# Write your MySQL query statement below
SELECT
    (CASE WHEN s2.id IS NULL THEN s1.id ELSE s2.id END) as id,
    s1.student
FROM
    seat s1
LEFT JOIN
	seat s2	ON (CASE WHEN s1.id % 2 = 1 THEN s1.id + 1 = s2.id  ELSE s1.id - 1 = s2.id END)
