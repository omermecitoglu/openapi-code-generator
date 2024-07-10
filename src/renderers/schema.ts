import Handlebars from "handlebars";
import getTemplate from "~/core/template";
import type { ModelProperty } from "~/resolvers/property";
import { resolveSchema } from "~/resolvers/schema-definition";
import schemaTemplate from "~/templates/schema.hbs";
import type { SchemaObject } from "@omer-x/openapi-types/schema";

type SchemaTemplate = {
  type: SchemaObject["type"],
  definition: string,
  importedSchemas: string[],
  name: string,
  description: string,
  properties: ModelProperty[],
};

export default function generateSchema(name: string, schema: SchemaObject, properties: ModelProperty[], importedSchemas: string[]) {
  const template = getTemplate<SchemaTemplate>(schemaTemplate);
  return template({
    type: schema.type,
    definition: resolveSchema(schema),
    name,
    description: schema.description || "missing-description",
    properties,
    importedSchemas: importedSchemas.filter(schemaName => schemaName !== name),
  });
}

Handlebars.registerHelper("eq", function(arg1, arg2) {
  return arg1 === arg2;
});
