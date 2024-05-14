import { type BusinessSchema } from "../schemas";
import { AsTable } from "../util";

export type GetBusinessDto = AsTable<BusinessSchema>;
export type CreateBusinessDto = BusinessSchema;
