import Handlebars from "handlebars";
import getTemplate from "~/core/template";
import { type DocumentedOperation, resolveDocumentedOperations } from "~/resolvers/documented-operation";
import documentationTemplate from "~/templates/documentation.hbs";
import type { PathsObject } from "@omer-x/openapi-types/paths";

type DocumentationTemplate = {
  serviceName: string,
  packageName: string,
  envName: string,
  operations: DocumentedOperation[],
};

export default function generateDocumentation(
  serviceName: string,
  packageName: string,
  envName: string,
  paths: PathsObject
) {
  const template = getTemplate<DocumentationTemplate>(documentationTemplate);
  return template({
    serviceName,
    packageName,
    envName,
    operations: resolveDocumentedOperations(paths),
  });
}

Handlebars.registerHelper("serialize", (input: string) => {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
});
