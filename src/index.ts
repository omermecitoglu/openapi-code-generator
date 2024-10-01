import "~/templates/operation";
import "~/templates/parameter";
import generateConfigs from "./core/configs";
import { resolveSchemasFromProps } from "./resolvers/imported-schema";
import resolveProperties from "./resolvers/property";
import generateDeclaration from "./templates/declaration";
import generateDocumentation from "./templates/documentation";
import generateInterface from "./templates/interface";
import generateSchema from "./templates/schema";
import type { SchemaObject } from "@omer-x/openapi-types/schema";

export function generateSchemaCode(name: string, schema: SchemaObject) {
  if (!schema.type) throw new Error("Schema type is missing");
  switch (schema.type) {
    case "object": {
      const properties = resolveProperties(schema.properties ?? {}, schema.required ?? []);
      const importedSchemas = resolveSchemasFromProps(schema.properties ?? {});
      return generateSchema(name, schema, properties, importedSchemas);
    }
    case "array":
      // TODO: add imported schemas
      return generateSchema(name, schema, [], []);
    default:
      return generateSchema(name, schema, [], []);
  }
}

export {
  generateInterface,
  generateDeclaration,
  generateDocumentation,
  generateConfigs,
};
