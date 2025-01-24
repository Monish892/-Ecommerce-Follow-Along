const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = { name, email, password: hashedPassword };
    users.push(user);

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user account' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
