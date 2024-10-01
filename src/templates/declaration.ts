import getTemplate from "~/core/template";
import { type DeclaredOperation, resolveDeclaredOperations } from "~/resolvers/declared-operation";
import { resolveSchemas } from "~/resolvers/imported-schema";
import declarationTemplate from "./declaration.hbs";
import type { PathsObject } from "@omer-x/openapi-types/paths";

type DeclarationTemplate = {
  importedSchemas: string[],
  operations: DeclaredOperation[],
};

export default function generateDeclaration(paths: PathsObject, framework: string | null) {
  const template = getTemplate<DeclarationTemplate>(declarationTemplate);
  return template({
    importedSchemas: resolveSchemas(paths),
    operations: resolveDeclaredOperations(paths, framework),
  });
}
