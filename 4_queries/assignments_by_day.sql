SELECT day, COUNT(assignments), sum(duration)
FROM assignments
GROUP BY day
ORDER BY day;