import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';

@WebSocketGateway({})
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.localAddress);
      console.log('Connected');
    });
  }

  @SubscribeMessage('newMssage')
  onNewMssage(@MessageBody() body: any) {
    console.log(body.message);
    this.server.emit('onMessage', {
      msg: 'New Mssage',
      content: body,
    });
  }
}
