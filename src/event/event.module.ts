import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EventController],
  providers: [EventService, PrismaService],
})
export class EventModule {}
