"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let BlogService = class BlogService {
    constructor() {
        this.blogPosts = [
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
    }
    generateId() {
        return Math.random().toString(36).substring(2, 15);
    }
    getCurrentDate() {
        const date = new Date();
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    sampleContent(topic) {
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
    keepAlive() {
        setInterval(async () => {
            console.log('⏰ Running Keep Alive Function...');
            try {
                await axios_1.default.get('https://your-deployment-url.com/health-check');
                console.log('✅ Keep Alive Request Successful');
            }
            catch (error) {
                console.error('❌ Keep Alive Request Failed:', error.message);
            }
        }, 60 * 60 * 1000);
    }
    async getAllBlogPosts() {
        return this.blogPosts;
    }
    async healthCheck() {
        return { status: 'ok', timestamp: new Date().toISOString() };
    }
    async generateBlogPost(topic) {
        const title = `Exploring ${topic}: A Comprehensive Guide`;
        const newPost = {
            id: this.generateId(),
            title,
            topic,
            author: 'AI Assistant',
            date: this.getCurrentDate(),
            readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
            content: this.sampleContent(topic),
            imageUrl: `https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop`
        };
        this.blogPosts.push(newPost);
        return newPost;
    }
    async deleteBlogPost(id) {
        const initialLength = this.blogPosts.length;
        this.blogPosts = this.blogPosts.filter(post => post.id !== id);
        const success = this.blogPosts.length < initialLength;
        return { success };
    }
    async searchBlogPosts(query) {
        const searchQuery = query.toLowerCase();
        const results = this.blogPosts.filter(post => post.title.toLowerCase().includes(searchQuery) ||
            post.topic.toLowerCase().includes(searchQuery) ||
            post.content.toLowerCase().includes(searchQuery));
        return results;
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)()
], BlogService);
//# sourceMappingURL=blog.service.js.map