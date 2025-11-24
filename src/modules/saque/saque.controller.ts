import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { SaqueDto } from "./dto/saque.dto";
import { SaqueService } from "./saque.service";

@Controller('saque')
export class SaqueController {
  constructor(private readonly saqueService: SaqueService) { }

  @Post()
  @HttpCode(200)
  public calcQtdCedulas(@Body() { valor }: SaqueDto) {
    return this.saqueService.calcQtdCedulas(valor)
  }
}