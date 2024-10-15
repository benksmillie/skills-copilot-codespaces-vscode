// Create web server
const app = express();

// Add a route to handle incoming webhook requests
app.post('/webhook', (req, res) => {
  res.json({ message: 'Hello from GitHub Actions!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

