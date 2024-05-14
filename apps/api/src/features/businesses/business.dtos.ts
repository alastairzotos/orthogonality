import { businessSchema } from "@repo/types";
import { createZodDto } from "nestjs-zod";

export class CreateBusinessDto extends createZodDto(businessSchema) {}
