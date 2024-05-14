import { Controller, Get } from "@nestjs/common";
import { BusinessService } from "src/features/business/business.service";

@Controller('business')
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
  ) {}

  @Get()
  async getBusinesses() {
    return await this.businessService.getBusinesses();
  }
}
