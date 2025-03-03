import { Controller, Get, Post, Delete, Body, Param, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { BlogPost } from './interfaces/blog-post.interface';

@Controller('api/posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllPosts(): Promise<BlogPost[]> {
    return this.blogService.getAllBlogPosts();
  }

  @Post('generate')
  async generatePost(@Body() createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    return this.blogService.generateBlogPost(createBlogPostDto.topic);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<{ success: boolean }> {
    return this.blogService.deleteBlogPost(id);
  }

  @Get('search')
  async searchPosts(@Query('query') query: string): Promise<BlogPost[]> {
    return this.blogService.searchBlogPosts(query);
  }
  @Get('/health-check')
  healthCheck() {
    return this.blogService.healthCheck();
  }
}