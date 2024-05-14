import { Injectable } from "@nestjs/common";
import { CreateBusinessDto } from "@repo/types";
import { BusinessesRepository } from "src/features/businesses/businesses.repository";

@Injectable()
export class BusinessesService {
  constructor(
    private readonly businessRepo: BusinessesRepository,
  ) {}

  async getBusinesses() {
    return await this.businessRepo.getBusinesses();
  }

  async createBusiness(business: CreateBusinessDto) {
    await this.businessRepo.createBusiness(business);
  }
}
