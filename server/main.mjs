import express from 'express';
import cors from 'cors';
import pg from 'pg';

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse incoming JSON data

const { Pool } = pg;
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'chalec',
  database: 'test',
  port: 5432,
});

app.get('/chalec', async (req, res) => {
  const chalce = await pool.query('SELECT * FROM Chalce');
  res.json(chalce.rows);
});

// Add the POST route
app.post('/chalec', async (req, res) => {
  try {
    const { nazev, cena, popis } = req.body;
    const newChalec = await pool.query(
      'INSERT INTO Chalce (nazev, cena, popis) VALUES ($1, $2, $3) RETURNING *',
      [nazev, cena, popis]
    );
    res.status(201).json(newChalec.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add the DELETE route
app.delete('/chalec/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChalec = await pool.query('DELETE FROM Chalce WHERE chalec_id = $1 RETURNING *', [id]);
    
    if (deletedChalec.rowCount === 0) {
      res.status(404).json({ message: `Chalec with ID ${id} not found` });
    } else {
      res.status(200).json(deletedChalec.rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3001, () => {
  console.log('server jede na portu 3001 lol :O');
});
