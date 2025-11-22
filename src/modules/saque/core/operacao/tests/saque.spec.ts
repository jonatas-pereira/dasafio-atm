import { SaqueCalc } from '../saque'
import { QtdNotas } from 'src/modules/saque/interface/qtd-cedulas.interface'

describe('calcQtdCedulas', () => {
  let service: SaqueCalc

  beforeEach(() => {
    service = new SaqueCalc
  })

  it('deve retornar a quantidade correta de cédulas para um valor válido', () => {
    const resultado = service.calcQtdCedulas(380)

    const esperado: QtdNotas = {
      "100": 3,
      "50": 1,
      "20": 1,
      "10": 1,
      "5": 0,
      "2": 0
    }

    expect(resultado).toEqual(esperado)
  });

  it('deve retornar undefined quando o valor não pode ser sacado (ex: 3)', () => {
    const resultado = service.calcQtdCedulas(3)

    expect(resultado).toBeUndefined()
  })
})
