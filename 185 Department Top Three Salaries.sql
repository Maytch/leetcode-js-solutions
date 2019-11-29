# Write your MySQL query statement below
SELECT
    d.Name as Department,
    e.Name as Employee,
    e.Salary
FROM
    Employee e,
    Department d
WHERE
	e.DepartmentId = d.Id
AND
	(
		SELECT
			COUNT(DISTINCT(Salary))
		FROM
			Employee
		WHERE
			DepartmentId = e.DepartmentId
		AND
			Salary > e.Salary
    ) < 3;
