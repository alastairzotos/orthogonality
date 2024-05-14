import { Injectable } from "@nestjs/common";
import { BusinessesRepository } from "src/features/businesses/businesses.repository";

@Injectable()
export class BusinessesService {
  constructor(
    private readonly businessRepo: BusinessesRepository,
  ) {}

  async getBusinesses() {
    return await this.businessRepo.getBusinesses();
  }
}
