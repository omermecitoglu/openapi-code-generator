import getTemplate from "~/core/template";
import resolveOperations, { type OperationTemplate } from "~/resolvers/operation";
import interfaceTemplate from "~/templates/interface.hbs";
import type { PathsObject } from "@omer-x/openapi-types/paths";

type InterfaceTemplate = {
  envName: string,
  operations: OperationTemplate[],
};

export default function generateInterface(envName: string, paths: PathsObject, framework: string | null) {
  const resolvedPaths = resolveOperations(paths, framework);
  const template = getTemplate<InterfaceTemplate>(interfaceTemplate);
  return template({
    envName,
    operations: resolvedPaths,
  });
}
