import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/v1/comments')
export class CommentQueryController {
    @Get()
    findAll() {
        return 'This action returns all comments';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns comment #${id}`;
    }
}
