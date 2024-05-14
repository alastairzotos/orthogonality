import { Body, ConflictException, Controller, Get, Post } from "@nestjs/common";
import { CreateBusinessDto } from "src/features/businesses/business.dtos";
import { BusinessesService } from "src/features/businesses/businesses.service";

@Controller('businesses')
export class BusinessesController {
  constructor(
    private readonly businessService: BusinessesService,
  ) { }

  @Get()
  async getBusinesses() {
    return await this.businessService.getBusinesses();
  }

  @Post()
  async createBusiness(
    @Body() business: CreateBusinessDto,
  ) {
    try {
      await this.businessService.createBusiness(business);
    } catch (e) {
      if (e.constraint_name === 'name_idx') {
        throw new ConflictException(`Business already exists with this name`);
      } else {
        throw e;
      }
    }
  }
}
