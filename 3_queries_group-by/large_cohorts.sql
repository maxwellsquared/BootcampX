SELECT cohorts.name, count(students.*) as student_count
FROM cohorts
JOIN students
ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING count(students.*) > 17
ORDER BY count(students.*);