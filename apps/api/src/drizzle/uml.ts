import { pgGenerate } from "drizzle-dbml-generator";
import * as schema from './schemas';

const generateUml = () => {
  pgGenerate({
    schema,
    out: './src/drizzle/uml/schema.dbml',
    relational: true
  });

  console.log("✅ Created the schema.dbml file");
  console.log("⏳ Creating the erd.svg file");
}

generateUml();
