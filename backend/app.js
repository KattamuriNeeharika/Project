import express from 'express';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import cors from 'cors'; 
const app = express();
const port = 3006;

app.use(express.json());
app.use(cors());

const dbUri = 'mongodb://localhost:27017/wedding'; 
mongoose.connect(dbUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


app.post(
  '/register',
  [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'), // Validate email
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
      // Check if the user or email already exists
      const userExists = await User.findOne({ $or: [{ username }, { email }] });
      if (userExists) {
        return res.status(400).json({ error: 'User or email already exists' });
      }
      // Create new user with plain password
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


app.post(
  '/login',
  [
    body('username').notEmpty().withMessage('Username is required'), 
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
   
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
      
      if (user.password !== password) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      res.json({ message: 'Login successful' });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
