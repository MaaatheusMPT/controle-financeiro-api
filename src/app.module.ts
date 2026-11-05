import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransacoesModule } from './transacoes/transacoes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://matheusmartins154_db_user:Senha123456@cluster0.d5scir9.mongodb.net/controle-financeiro?retryWrites=true&w=majority',
    ),
    TransacoesModule,
  ],
})
export class AppModule {}