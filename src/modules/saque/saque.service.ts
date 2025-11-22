import { ConflictException, Injectable } from "@nestjs/common";
import { QtdNotas } from "./interface/qtd-cedulas.interface";
import { SaqueCalc } from "./core/operacao/saque";

@Injectable()
export class SaqueService {
  constructor(private readonly saqueCalc: SaqueCalc) { }

  public calcQtdCedulas(valor: number): QtdNotas {
    return this.saqueCalc.calcQtdCedulas(valor)
  }
}