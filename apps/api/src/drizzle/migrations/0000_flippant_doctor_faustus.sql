CREATE TABLE IF NOT EXISTS "business" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" varchar DEFAULT '',
	"name" varchar(255) DEFAULT '' NOT NULL,
	"location" text DEFAULT '' NOT NULL,
	"createdOn" date DEFAULT now() NOT NULL,
	"updatedOn" date DEFAULT now() NOT NULL
);
