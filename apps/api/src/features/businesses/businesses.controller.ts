import { Controller, Get } from "@nestjs/common";
import { BusinessesService } from "src/features/businesses/businesses.service";

@Controller('businesses')
export class BusinessesController {
  constructor(
    private readonly businessService: BusinessesService,
  ) {}

  @Get()
  async getBusinesses() {
    return await this.businessService.getBusinesses();
  }
}
