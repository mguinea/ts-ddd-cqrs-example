import { Module } from '@nestjs/common';
import { CommentQueryController } from '../ui/controllers/comment-query.controller';

@Module({
    controllers: [CommentQueryController],
})
export class CommentsModule {}
