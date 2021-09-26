import { Module } from "@nestjs/common";
import { VillesController } from "./villes.controller";
import { VillesService } from "./villes.service";

@Module({
    controllers: [VillesController],
    providers: [VillesService],
})
export class VillesModule{}