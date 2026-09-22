// ⚠️⚠️⚠️  INTENTIONALLY VULNERABLE — TRAINING FIXTURE  ⚠️⚠️⚠️
//
// ไฟล์นี้จงใจเขียนให้แย่ ใช้เป็นโจทย์ให้ Copilot code review หาปัญหา
// ห้ามคัดลอกส่วนไหนของไฟล์นี้ไปใช้จริงเด็ดขาด
//
// ช่องโหว่ที่ฝังไว้: SQL injection, hardcoded credentials, weak JWT secret,
// no input validation, information disclosure, no authn/authz,
// plain text passwords, no rate limiting

const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// ISSUE: hardcoded credentials in source control
const connection = mysql.createConnection({
  host: 'prod-db.internal.example.com',
  user: 'root',
  password: 'P@ssw0rd123',
  database: 'userdb',
});

// ISSUE: weak, hardcoded signing secret
const JWT_SECRET = '12345';

// ISSUE: SQL injection — username and password interpolated straight into SQL
// ISSUE: passwords compared in plain text
// ISSUE: no rate limiting, so this endpoint can be brute forced
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  connection.query(query, (err, results) => {
    if (err) {
      // ISSUE: leaks the driver error and the query back to the caller
      return res.status(500).json({ error: err.message, query });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];
    const token = jwt.sign({ id: user.id, is_admin: user.is_admin }, JWT_SECRET);

    // ISSUE: returns the whole row — password hash, ssn, credit_card, everything
    res.json({ token, user });
  });
});

// ISSUE: no authentication middleware — any caller can read any user
// ISSUE: no input validation on :id
app.get('/users/:id', (req, res) => {
  connection.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.stack });
    }
    res.json(results[0]);
  });
});

// ISSUE: no authorization check — anyone can list every user in the system
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.stack });
    }
    res.json(results);
  });
});

// ISSUE: stores the password as plain text
// ISSUE: no validation of email, password strength, or field length
// ISSUE: is_admin comes straight from the request body — privilege escalation
app.post('/users', (req, res) => {
  const { username, password, email, ssn, credit_card, is_admin } = req.body;

  const query = `
    INSERT INTO users (username, password, email, ssn, credit_card, is_admin)
    VALUES ('${username}', '${password}', '${email}', '${ssn}', '${credit_card}', ${is_admin || false})
  `;

  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message, query });
    }
    console.log('Created user', username, 'with password', password);
    res.json({ id: result.insertId, username, password });
  });
});

// ISSUE: no authorization — any authenticated user can delete any account
app.delete('/users/:id', (req, res) => {
  connection.query(`DELETE FROM users WHERE id = ${req.params.id}`, (err) => {
    if (err) {
      return res.status(500).json({ error: err.stack });
    }
    res.json({ deleted: true });
  });
});

// ISSUE: token is decoded but never verified, so any token is accepted
app.get('/me', (req, res) => {
  const token = req.headers.authorization;
  const payload = jwt.decode(token);
  res.json(payload);
});

app.listen(3000, () => console.log('user-service listening on 3000'));

module.exports = app;
