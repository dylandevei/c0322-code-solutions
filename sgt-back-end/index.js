const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  const params = sql.body;

  db.query(sql, params)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const sql = `
    insert into grades
           ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;

  const params = [req.body.name, req.body.course, req.body.score];

  if (!req.body.name) {
    res.status(400).json({
      error: 'name is a required field'
    });
  } else if (!req.body.course) {
    res.status(400).json({
      error: 'course is a required field'
    });
  } else if (!req.body.score) {
    res.status(400).json({
      error: 'score is a required field'
    });
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'score must be an integer between 0 to 100'
    });
  } else {
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      }
      )
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *
    `;

  const params = [req.body.name, req.body.course, req.body.score, gradeId];

  if (!req.body.name) {
    res.status(400).json({
      error: 'name is a required field'
    });
  } else if (!req.body.course) {
    res.status(400).json({
      error: 'course is a required field'
    });
  } else if (!req.body.score) {
    res.status(400).json({
      error: 'score is a required field'
    });
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'score must be an integer between 0 to 100'
    });
  } else if (!gradeId) {
    res.status(404).json({
      error: `cannot find grade with "gradeId" ${gradeId}`
    });
  } else {
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `cannot find grade with "gradeId" ${gradeId}`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
    `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on Port 3000!');
});
