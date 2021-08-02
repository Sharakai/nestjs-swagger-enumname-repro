import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

export enum MyExampleEnum {
  THIS = 'THIS',
  IS = 'IS',
  AN = 'AN',
  EXAMPLE = 'EXAMPLE',
}

@Controller()
export class AppController {
  @Get('/repeat')
  @ApiParam({
    name: 'type',
    enum: MyExampleEnum,
    enumName: 'MyExampleEnum',
  })
  repeat(@Param('type') type: MyExampleEnum): MyExampleEnum {
    return type;
  }

  @Get('/speak')
  @ApiParam({
    name: 'type',
    enum: MyExampleEnum,
    enumName: 'MyExampleEnum',
  })
  speak(@Param('type') type: MyExampleEnum): void {
    console.log(type);
  }
}
