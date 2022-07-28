const { Pool } = require('pg');

const pool = new Pool({
  user: 'max',
  // password: 'boyfriendo',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];

const values = [ cohortName ];
const myQuery = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`;

pool.query(myQuery, values)
.then(res => {
  console.log('\n ✨ 𝐶𝑂𝑁𝑁𝐸𝐶𝑇𝐸𝐷 ✨')
  console.log(res.rows);
  res.rows.forEach(user => {
    console.log(user.cohort + ": " + user.teacher);
    // console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  });
});


