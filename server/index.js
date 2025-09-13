const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.post('/api/students', async (req, res) => {
  const {
    first_name,
    last_name,
    student_id,
    email,
    date_of_birth,
    contact_number,
    enrollment_date,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !student_id ||
    !email ||
    !date_of_birth ||
    !contact_number ||
    !enrollment_date
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO students (first_name, last_name, student_id, email, date_of_birth, contact_number, enrollment_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [
        first_name,
        last_name,
        student_id,
        email,
        date_of_birth,
        contact_number,
        enrollment_date,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === '23505') {
      // Unique constraint violation
      return res.status(409).json({ error: 'Duplicate record detected' });
    }
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/students', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const countResult = await db.query('SELECT COUNT(*) FROM students');
    const totalStudents = parseInt(countResult.rows[0].count);

    const result = await db.query('SELECT * FROM students ORDER BY id ASC LIMIT $1 OFFSET $2', [limit, offset]);

    res.json({
      totalStudents,
      totalPages: Math.ceil(totalStudents / limit),
      currentPage: page,
      students: result.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM students WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    student_id,
    email,
    date_of_birth,
    contact_number,
    enrollment_date,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !student_id ||
    !email ||
    !date_of_birth ||
    !contact_number ||
    !enrollment_date
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await db.query(
      'UPDATE students SET first_name = $1, last_name = $2, student_id = $3, email = $4, date_of_birth = $5, contact_number = $6, enrollment_date = $7 WHERE id = $8 RETURNING *',
      [
        first_name,
        last_name,
        student_id,
        email,
        date_of_birth,
        contact_number,
        enrollment_date,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === '23505') {
      // Unique constraint violation
      return res.status(409).json({ error: 'Duplicate record detected' });
    }
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/students/search', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    const result = await db.query(
      'SELECT * FROM students WHERE first_name ILIKE $1 OR last_name ILIKE $1 ORDER BY id ASC',
      [`%${name}%`]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/students/search', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    const result = await db.query(
      'SELECT * FROM students WHERE first_name ILIKE $1 OR last_name ILIKE $1 ORDER BY id ASC',
      [`%${name}%`]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});