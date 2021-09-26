import { Controller, Get, Query } from '@nestjs/common';

import { VillesService } from './villes.service';

@Controller('villes')
export class VillesController {

    constructor(private villesService: VillesService) { }
    @Get('findByFilter')
    getVilles(@Query() searchPrams: string): any {
        return this.villesService.getVilles(searchPrams['name'].toLowerCase(), searchPrams['code'].toLowerCase())
    }
}