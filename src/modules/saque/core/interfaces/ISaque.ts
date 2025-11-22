import { QtdNotas } from "../../interface/qtd-cedulas.interface";

export interface ISaque {
  calcQtdCedulas: (valor: number) => QtdNotas | void;
}