const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual Railway credentials
const db = mysql.createConnection({
  host: 'yamanote.proxy.rlwy.net',
  user: 'root',
  password: '${{MYSQL_ROOT_PASSWORD}}',
  database: 'YOUR_${{MYSQL_DATABASE}}',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('❌ Failed to connect to MySQL:', err);
    return;
  }
  console.log('✅ MySQL connected');
});

// Test route
app.get('/api/servers', (req, res) => {
  db.query('SELECT * FROM servers', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Query failed' });
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('🌐 Server running at http://localhost:3000');
});

