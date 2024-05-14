import { Injectable } from "@nestjs/common";
import { Database, InjectDb } from "src/drizzle/provider";

@Injectable()
export class BusinessRepository {
  constructor(
    @InjectDb() private readonly db: Database,
  ) {}

  async getBusinesses() {
    return await this.db.query.BusinessTable.findMany();
  }
}
