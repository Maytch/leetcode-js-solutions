# Write your MySQL query statement below
SELECT
    d.Name as Department,
    e.Name as Employee,
    e.Salary
FROM
    Employee e, Department d
WHERE
    e.DepartmentId = d.Id
AND
    e.Salary = (
        SELECT
            MAX(Salary)
        FROM
            Employee
        WHERE
            DepartmentId = e.DepartmentId
    );
