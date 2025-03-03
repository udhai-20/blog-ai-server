import { BlogPost } from './interfaces/blog-post.interface';
export declare class BlogService {
    private blogPosts;
    private generateId;
    private getCurrentDate;
    private sampleContent;
    onModuleInit(): void;
    private keepAlive;
    getAllBlogPosts(): Promise<BlogPost[]>;
    healthCheck(): Promise<{
        status: string;
        timestamp: string;
    }>;
    generateBlogPost(topic: string): Promise<BlogPost>;
    deleteBlogPost(id: string): Promise<{
        success: boolean;
    }>;
    searchBlogPosts(query: string): Promise<BlogPost[]>;
}
