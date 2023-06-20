import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    GatewayModule,
    MongooseModule.forRoot('mongodb://localhost:27017/pple_chat'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
