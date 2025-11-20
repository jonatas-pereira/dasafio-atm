import { Module } from "@nestjs/common";
import { SaqueController } from "./saque.controller";
import { SaqueService } from "./saque.service";
import { SaqueCalc } from "./core/operacao/saque";

@Module({
  controllers: [SaqueController],
  providers: [SaqueService, SaqueCalc],
})
export class SaqueModule { }