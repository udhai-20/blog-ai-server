import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { CorsMiddleware } from './middleware/corsMiddleware';

@Module({
  imports: [BlogModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}