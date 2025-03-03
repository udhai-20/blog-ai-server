import { BlogService } from './blog.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { BlogPost } from './interfaces/blog-post.interface';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAllPosts(): Promise<BlogPost[]>;
    generatePost(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost>;
    deletePost(id: string): Promise<{
        success: boolean;
    }>;
    searchPosts(query: string): Promise<BlogPost[]>;
    healthCheck(): Promise<{
        status: string;
        timestamp: string;
    }>;
}
