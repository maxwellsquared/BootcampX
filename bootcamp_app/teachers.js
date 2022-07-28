
const { Pool } = require('pg');

const pool = new Pool({
  user: 'max',
  // password: 'boyfriendo',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const myQuery = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohortName}%'
ORDER BY teacher;
`;


pool.query(myQuery)
.then(res => {
  console.log('\n ✨ 𝐶𝑂𝑁𝑁𝐸𝐶𝑇𝐸𝐷 ✨')
  res.rows.forEach(user => {
    console.log(user.cohort + ": " + user.teacher);
    // console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
});


