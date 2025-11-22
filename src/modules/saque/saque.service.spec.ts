import { SaqueService } from './saque.service'
import { SaqueCalc } from './core/operacao/saque'
import { MyAppError } from '../../utils/errors/app-erro'
import { QtdNotas } from './interface/qtd-cedulas.interface'

describe('SaqueService', () => {
  let service: SaqueService
  let saqueCalcMock: jest.Mocked<SaqueCalc>

  beforeEach(() => {
    saqueCalcMock = {
      calcQtdCedulas: jest.fn()
    } as unknown as jest.Mocked<SaqueCalc>

    service = new SaqueService(saqueCalcMock)
  });

  it('deve retornar o resultado quando o SaqueCalc retornar um QtdNotas válido', () => {
    const esperado: QtdNotas = {
      "100": 3,
      "50": 1,
      "20": 1,
      "10": 1,
      "5": 0,
      "2": 0
    }

    saqueCalcMock.calcQtdCedulas.mockReturnValue(esperado)

    const resultado = service.calcQtdCedulas(380)

    expect(resultado).toEqual(esperado)
    expect(saqueCalcMock.calcQtdCedulas).toHaveBeenCalledWith(380)
  })

  it('deve lançar MyAppError quando SaqueCalc retornar undefined', () => {
    saqueCalcMock.calcQtdCedulas.mockReturnValue(undefined)

    expect(() => service.calcQtdCedulas(3)).toThrow(MyAppError)
    expect(() => service.calcQtdCedulas(3)).toThrow("My App Error")
  });
});
