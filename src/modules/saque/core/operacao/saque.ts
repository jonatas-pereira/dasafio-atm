import { Injectable, NotFoundException } from "@nestjs/common";
import { QtdNotas } from "../../interface/qtd-cedulas.interface";
import { MyAppError } from "src/utils/errors/app-erro";

@Injectable()
export class SaqueCalc {
  public calcQtdCedulas(valor: number): QtdNotas {
    const notas = [100, 50, 20, 10, 5, 2] as const
    const resultado: QtdNotas = {
      "100": 0,
      "50": 0,
      "20": 0,
      "10": 0,
      "5": 0,
      "2": 0,
    }
    for (const nota of notas) {
      const count = Math.floor(valor / nota)
      resultado[nota.toString() as keyof QtdNotas] = count
      valor = valor % nota
    }

    if(valor) throw new MyAppError("Valor inválido", 400)

    return resultado
  }
}