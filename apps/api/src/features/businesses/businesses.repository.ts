import { Injectable } from "@nestjs/common";
import { CreateBusinessDto } from "@repo/types";
import { Database, InjectDb } from "src/drizzle/provider";
import { BusinessTable } from "src/drizzle/schemas";

@Injectable()
export class BusinessesRepository {
  constructor(
    @InjectDb() private readonly db: Database,
  ) {}

  async getBusinesses() {
    return await this.db.query.BusinessTable.findMany();
  }

  async createBusiness(business: CreateBusinessDto) {
    await this.db.insert(BusinessTable).values(business);
  }
}
