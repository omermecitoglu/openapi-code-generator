import "~/renderers/operation";
import "~/renderers/parameter";
import generateConfigs from "./core/configs";
import generateDeclaration from "./renderers/declaration";
import generateDocumentation from "./renderers/documentation";
import generateInterface from "./renderers/interface";
import generateSchema from "./renderers/schema";
import { resolveSchemasFromProps } from "./resolvers/imported-schema";
import resolveProperties from "./resolvers/property";
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
