const express = require('express');
const cors = require('cors');
const { 
  getAllBlogPosts, 
  generateBlogPost, 
  deleteBlogPost,
  searchBlogPosts
} = require('./blogService');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await getAllBlogPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

app.post('/api/posts/generate', async (req, res) => {
  try {
    const { topic } = req.body;
    
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }
    
    const newPost = await generateBlogPost(topic);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate blog post' });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBlogPost(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

app.get('/api/posts/search', async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const results = await searchBlogPosts(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search blog posts' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});