import { Injectable } from "@nestjs/common";
import { CreateBusinessDto, UpdateBusinessDto } from "@repo/types";
import { BusinessesRepository } from "src/features/businesses/businesses.repository";

@Injectable()
export class BusinessesService {
  constructor(
    private readonly businessRepo: BusinessesRepository,
  ) {}

  async getBusinesses() {
    return await this.businessRepo.getBusinesses();
  }

  async getBusinessById(id: string) {
    return await this.businessRepo.getBusinessById(id);
  }

  async createBusiness(business: CreateBusinessDto) {
    await this.businessRepo.createBusiness(business);
  }

  async updateBusiness(id: string, business: UpdateBusinessDto) {
    await this.businessRepo.updateBusiness(id, business);
  }
}
