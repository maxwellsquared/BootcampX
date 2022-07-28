const { Pool } = require('pg');

const pool = new Pool({
  user: 'max',
  // password: 'boyfriendo',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const maxResults = process.argv[3];
const values = [ cohortName, `${maxResults || 5}` ];
const myQuery = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
`;




pool.query(myQuery, values)
.then(res => {
  console.log('\n ✨ 𝐶𝑂𝑁𝑁𝐸𝐶𝑇𝐸𝐷 ✨');
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
});