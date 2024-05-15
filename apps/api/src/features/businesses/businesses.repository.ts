import { Injectable } from "@nestjs/common";
import { CreateBusinessDto, UpdateBusinessDto } from "@repo/types";
import { eq } from "drizzle-orm";
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

  async getBusinessById(id: string) {
    return await this.db.query.BusinessTable.findFirst({
      where: (t, { eq }) => eq(t.id, id),
      with: { staffMembers: true }
    });
  }

  async createBusiness(business: CreateBusinessDto) {
    await this.db.insert(BusinessTable).values(business);
  }

  async updateBusiness(id: string, business: UpdateBusinessDto) {
    await this.db
      .update(BusinessTable)
      .set({ id, ...business })
      .where(eq(BusinessTable.id, id));
  }
}
