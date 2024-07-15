export function isUnion(schema: string) {
  return schema.includes("|");
}

export function getisUnionItems(schema: string) {
  return schema.split("|").map(i => i.trim());
}
