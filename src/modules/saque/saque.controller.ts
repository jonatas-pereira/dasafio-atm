import { Body, ConflictException, Controller, Post } from "@nestjs/common";
import { SaqueDto } from "./dto/saque.dto";
import { SaqueService } from "./saque.service";

@Controller('saque')
export class SaqueController {
  constructor(private readonly saqueService: SaqueService) { }

  @Post()
  calcQtdCedulas(@Body() { valor }: SaqueDto) {
    return this.saqueService.calcQtdCedulas(valor)
  }
}