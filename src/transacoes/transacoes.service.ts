import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transacao, TransacaoDocument } from './schemas/transacao.schema';
import { CreateTransacaoDto } from './dto/create-transacao.dto';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectModel(Transacao.name)
    private transacaoModel: Model<TransacaoDocument>,
  ) {}

  async criar(createTransacaoDto: CreateTransacaoDto): Promise<Transacao> {
    const novaTransacao = new this.transacaoModel(createTransacaoDto);
    return novaTransacao.save();
  }

  async listarComMetricas() {
    const historico = await this.transacaoModel.find().exec();

    let totalReceitas = 0;
    let totalDespesas = 0;
    let totalGastoImpulso = 0;

    for (const item of historico) {
      if (item.tipo === 'receita') {
        totalReceitas += item.valor;
      } else if (item.tipo === 'despesa') {
        totalDespesas += item.valor;
        if (item.consumoConsciente === false) {
          totalGastoImpulso += item.valor;
        }
      }
    }

    const saldoTotal = totalReceitas - totalDespesas;

    return {
      historico,
      metricas: {
        saldoTotal: Number(saldoTotal.toFixed(2)),
        totalDespesas: Number(totalDespesas.toFixed(2)),
        totalGastoImpulso: Number(totalGastoImpulso.toFixed(2)),
      },
    };
  }
}