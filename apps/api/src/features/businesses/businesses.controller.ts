import { Body, ConflictException, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateBusinessDto, UpdateBusinessDto } from "src/features/businesses/business.dtos";
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

  @Get(':id')
  async getBusinessById(@Param('id') id: string) {
    return await this.businessService.getBusinessById(id);
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

  @Put(':id')
  async updateBusiness(
    @Param('id') id: string,
    @Body() body: UpdateBusinessDto,
  ) {
    await this.businessService.updateBusiness(id, body);
  }
}
