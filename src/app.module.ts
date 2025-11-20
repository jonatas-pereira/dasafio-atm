import { Module } from '@nestjs/common';
import { SaqueModule } from './modules/saque/saque.module';

@Module({
  imports: [SaqueModule],
})
export class AppModule { }
