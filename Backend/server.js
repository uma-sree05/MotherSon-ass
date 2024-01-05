const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Um@sree05",
  database:"test"
})

app.get('/api/projects', (req, res) => {
  db.query('SELECT * FROM test.projects', (err, results) => {
    if (err) {
      console.error('Error fetching projects:', err);
      res.status(500).send('Error fetching projects');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/projects', (req, res) => {
  const { ProjectName, ProjectLink, description } = req.body;
  const INSERT_PROJECT_QUERY = `INSERT INTO projects (ProjectName, ProjectLink, description) VALUES (?, ?, ?)`;

  db.query(
    INSERT_PROJECT_QUERY,
    [ProjectName, ProjectLink, description],
    (err, results) => {
      if (err) {
        console.error('Error adding project:', err);
        res.status(500).send('Error adding project');
      } else {
        console.log('Project added:', results);
        res.status(201).send('Project added successfully');
      }
    }
  );
});

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});