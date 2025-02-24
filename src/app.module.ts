import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/infrastructure/nestjs/comments.module';

@Module({
  imports: [CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
