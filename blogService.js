// In-memory storage for blog posts
let blogPosts = [
  {
    id: 'post-1',
    title: 'The Future of Artificial Intelligence',
    topic: 'Artificial Intelligence',
    author: 'AI Assistant',
    date: 'November 10, 2023',
    readTime: '5 min read',
    content: sampleContent('The Future of Artificial Intelligence'),
    imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop'
  },
  {
    id: 'post-2',
    title: 'Sustainable Living in Modern Cities',
    topic: 'Sustainability',
    author: 'AI Assistant',
    date: 'November 9, 2023',
    readTime: '4 min read',
    content: sampleContent('Sustainable Living in Modern Cities'),
    imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop'
  },
  {
    id: 'post-3',
    title: 'The Psychology of Productivity',
    topic: 'Psychology',
    author: 'AI Assistant',
    date: 'November 8, 2023',
    readTime: '6 min read',
    content: sampleContent('The Psychology of Productivity'),
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'post-4',
    title: 'Exploring Space Tourism',
    topic: 'Space',
    author: 'AI Assistant',
    date: 'November 7, 2023',
    readTime: '7 min read',
    content: sampleContent('Exploring Space Tourism'),
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop'
  }
];

// Generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 15);

// Get current date formatted
const getCurrentDate = () => {
  const date = new Date();
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Sample blog post content
function sampleContent(topic) {
  return `
# ${topic}

## Introduction
This is an AI-generated blog post about ${topic}. The content is meant to demonstrate the layout and design of the blog post reader.

## Main Content
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.

### Key Points
- First important point about ${topic}
- Second crucial aspect to consider
- Third element that makes ${topic} interesting

## Benefits
When exploring ${topic}, we discover numerous advantages:

1. Improved understanding of the subject
2. Enhanced ability to discuss with others
3. Practical applications in daily life

## Conclusion
In conclusion, ${topic} represents an important area of knowledge that deserves attention and further exploration. The insights gained from studying this topic can be applied in various contexts and situations.
`;
}

// Get all blog posts
const getAllBlogPosts =  () => {
  
  return blogPosts;
};

// Generate a new blog post
const generateBlogPost =  (topic) => {
  
  // Generate a title based on the topic
  const title = `Exploring ${topic}: A Comprehensive Guide`;
  
  // Create a new blog post
  const newPost = {
    id: generateId(),
    title,
    topic,
    author: 'AI Assistant',
    date: getCurrentDate(),
    readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
    content: sampleContent(topic),
    imageUrl: `https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop`
  };
  
  // Add to our in-memory storage
  blogPosts.push(newPost);
  
  return newPost;
};

// Delete a blog post
const deleteBlogPost =  (id) => {

  // Filter out the post with the given ID
  const initialLength = blogPosts.length;
  blogPosts = blogPosts.filter(post => post.id !== id);
  
  // Check if a post was actually deleted
  const success = blogPosts.length < initialLength;
  
  return { success };
};

// Search/filter blog posts
const searchBlogPosts = async (query) => {
  
  // Convert query to lowercase for case-insensitive search
  // already done in frontend //ot is optional
  const searchQuery = query.toLowerCase();
  
  // Filter posts that match the query in title, topic, or content
  const results = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery) ||
    post.topic.toLowerCase().includes(searchQuery) ||
    post.content.toLowerCase().includes(searchQuery)
  );
  
  return results;
};

module.exports = {
  getAllBlogPosts,
  generateBlogPost,
  deleteBlogPost,
  searchBlogPosts
};