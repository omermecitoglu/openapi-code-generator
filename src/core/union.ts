export function isUnion(schema: string) {
  if (schema.startsWith("{") && schema.endsWith("}")) {
    return false;
  }
  return schema.includes("|");
}

export function getUnionItems(schema: string) {
  return schema.split("|").map(i => i.trim());
}
