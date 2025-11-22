import { ConflictException, Injectable } from "@nestjs/common";
import { QtdNotas } from "./interface/qtd-cedulas.interface";
import { SaqueCalc } from "./core/operacao/saque";
import { MyAppError } from "src/utils/errors/app-erro";

@Injectable()
export class SaqueService {
  constructor(private readonly saqueCalc: SaqueCalc) { }

  public calcQtdCedulas(valor: number): QtdNotas {
    const result = this.saqueCalc.calcQtdCedulas(valor)
    if(!result) throw new MyAppError("Valor inválido", 400)
    return result
  }
}