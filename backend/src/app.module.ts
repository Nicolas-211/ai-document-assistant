import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './document/document.module';
@Module({
  imports: [AuthModule, PrismaModule,ConfigModule.forRoot({ isGlobal: true }), DocumentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
