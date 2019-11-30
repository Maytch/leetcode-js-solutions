# Write your MySQL query statement below
SELECT
	*
FROM
	stadium s
WHERE
	s.id IN (
		SELECT 
			s1.id
		FROM 
			stadium s1,
			stadium s2,
			stadium s3
		WHERE
			s2.id = s1.id + 1
		AND
			s3.id = s2.id + 1
		AND 
			s1.people > 99
		AND
			s2.people > 99
		AND 
			s3.people > 99
	)
OR
	s.id IN (
		SELECT 
			s2.id
		FROM 
			stadium s1,
			stadium s2,
			stadium s3
		WHERE
			s2.id = s1.id + 1
		AND
			s3.id = s2.id + 1
		AND 
			s1.people > 99
		AND
			s2.people > 99
		AND 
			s3.people > 99
	)
OR
	s.id IN (
		SELECT 
			s3.id
		FROM 
			stadium s1,
			stadium s2,
			stadium s3
		WHERE
			s2.id = s1.id + 1
		AND
			s3.id = s2.id + 1
		AND 
			s1.people > 99
		AND
			s2.people > 99
		AND 
			s3.people > 99
	)
  
# Write your MySQL query statement below
SELECT DISTINCT
    s1.*
FROM 
    stadium s1,
    stadium s2,
    stadium s3
WHERE
    s1.people > 99
AND
    s2.people > 99
AND 
    s3.people > 99
AND (
        (s1.id + 1 = s2.id AND s1.id + 2 = s3.id) # s1, s2, s3
    OR
        (s2.id + 1 = s1.id AND s2.id + 2 = s3.id) # s2, s1, s3
    OR
        (s3.id + 1 = s2.id AND s3.id + 2 = s1.id) # s3, s2, s1
)
ORDER BY s1.id;
  
