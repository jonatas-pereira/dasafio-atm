import { Injectable, NotFoundException } from "@nestjs/common";
import { QtdNotas } from "../../interface/qtd-cedulas.interface";
import { MyAppError } from "src/utils/errors/app-erro";
import { ISaque } from "../interfaces/ISaque";

@Injectable()
export class SaqueCalc implements ISaque {
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
      const contador = Math.floor(valor / nota)
      resultado[nota.toString() as keyof QtdNotas] = contador
      valor = valor % nota
    }

    if(valor !== 0) throw new MyAppError("Valor inválido", 400)

    return resultado
  }
}