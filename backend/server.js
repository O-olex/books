const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookObjectModel = require('./models/BookObjectModel');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://olexiineiculov:N_n061977@cluster0.xhjpsvu.mongodb.net/BooksStorage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Обработчик для сохранения объектов в бд
app.post('/api/books', async (req, res) => {
    const dataArray = req.body.data;
    console.log(dataArray)
  try {
    for (const book of dataArray) {
        const newObject = new bookObjectModel(book);
        await newObject.save();
    }

    res.json({ message: 'Books saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving books' });
  }
});

app.get('/api/books', async (req, res) => {
    try {
      // Извлечение всех объектов из базы данных
      const data = await bookObjectModel.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});