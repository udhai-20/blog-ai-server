import { Injectable } from '@nestjs/common';
import { BlogPost } from './interfaces/blog-post.interface';
import axios from 'axios';

@Injectable()
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'The Future of Artificial Intelligence',
      topic: 'Artificial Intelligence',
      author: 'AI Assistant',
      date: 'November 10, 2023',
      readTime: '5 min read',
      content: this.sampleContent('The Future of Artificial Intelligence'),
      imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop'
    },
    {
      id: 'post-2',
      title: 'Sustainable Living in Modern Cities',
      topic: 'Sustainability',
      author: 'AI Assistant',
      date: 'November 9, 2023',
      readTime: '4 min read',
      content: this.sampleContent('Sustainable Living in Modern Cities'),
      imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop'
    },
    {
      id: 'post-3',
      title: 'The Psychology of Productivity',
      topic: 'Psychology',
      author: 'AI Assistant',
      date: 'November 8, 2023',
      readTime: '6 min read',
      content: this.sampleContent('The Psychology of Productivity'),
      imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'post-4',
      title: 'Exploring Space Tourism',
      topic: 'Space',
      author: 'AI Assistant',
      date: 'November 7, 2023',
      readTime: '7 min read',
      content: this.sampleContent('Exploring Space Tourism'),
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop'
    }
  ];

  // Generate a unique ID
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  // Get current date formatted
  private getCurrentDate(): string {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Sample blog post content
  private sampleContent(topic: string): string {
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


  onModuleInit() {
    this.keepAlive();
  }
  private keepAlive() {
    setInterval(async () => {
      console.log('⏰ Running Keep Alive Function...');
      try {
        await axios.get('https://your-deployment-url.com/health-check');
        console.log('✅ Keep Alive Request Successful');
      } catch (error) {
        console.error('❌ Keep Alive Request Failed:', error.message);
      }
    }, 60 * 60 * 1000); // Every 1 hour
  }
  // Get all blog posts
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return this.blogPosts;
  }
  async healthCheck() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  // Generate a new blog post
  async generateBlogPost(topic: string): Promise<BlogPost> {
    // Generate a title based on the topic
    const title = `Exploring ${topic}: A Comprehensive Guide`;
    
    // Create a new blog post
    const newPost: BlogPost = {
      id: this.generateId(),
      title,
      topic,
      author: 'AI Assistant',
      date: this.getCurrentDate(),
      readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
      content: this.sampleContent(topic),
      imageUrl: `https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop`
    };
    
    // Add to our in-memory storage
    this.blogPosts.push(newPost);
    
    return newPost;
  }

  // Delete a blog post
  async deleteBlogPost(id: string): Promise<{ success: boolean }> {
    // Filter out the post with the given ID
    const initialLength = this.blogPosts.length;
    this.blogPosts = this.blogPosts.filter(post => post.id !== id);
    
    // Check if a post was actually deleted
    const success = this.blogPosts.length < initialLength;
    
    return { success };
  }

  // Search/filter blog posts
  async searchBlogPosts(query: string): Promise<BlogPost[]> {
    // Convert query to lowercase for case-insensitive search
    const searchQuery = query.toLowerCase();
    
    // Filter posts that match the query in title, topic, or content
    const results = this.blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery) ||
      post.topic.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery)
    );
    
    return results;
  }
}