import { Injectable } from "@nestjs/common";
import { BusinessRepository } from "src/features/business/business.repository";

@Injectable()
export class BusinessService {
  constructor(
    private readonly businessRepo: BusinessRepository,
  ) {}

  async getBusinesses() {
    return await this.businessRepo.getBusinesses();
  }
}
