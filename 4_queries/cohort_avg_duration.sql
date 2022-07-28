SELECT avg(total_duration)
FROM (
SELECT SUM(completed_at - started_at) as total_duration
FROM cohorts
JOIN students ON cohort_id = cohorts.id
JOIN assistance_requests ON student_id = students.id
GROUP BY cohorts.name
) as foo;