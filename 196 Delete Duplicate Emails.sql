# Write your MySQL query statement below
DELETE 
    p1
FROM
    Person p1,
    Person p2
WHERE
    p1.Id > p2.Id
AND
    p1.Email = p2.Email;

SELECT 
    *
FROM
    Person;



# Write your MySQL query statement below
DELETE FROM
    Person
WHERE
    Id NOT IN (
        SELECT
            Id
        FROM (
            SELECT
                MIN(Id) as Id
            FROM
                Person
            GROUP BY
                Email
        ) p
    );
    
SELECT 
    *
FROM
    Person;
