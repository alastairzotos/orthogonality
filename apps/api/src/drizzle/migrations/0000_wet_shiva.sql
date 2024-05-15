DO $$ BEGIN
 CREATE TYPE "public"."businessType" AS ENUM('bar', 'restaurant', 'club', 'hotel', 'cafe');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "business" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" "businessType" DEFAULT null,
	"name" varchar(255) DEFAULT '' NOT NULL,
	"location" text DEFAULT '' NOT NULL,
	"createdOn" timestamp DEFAULT now() NOT NULL,
	"updatedOn" timestamp NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "business" ("name");