import { describe, expect, it, jest } from "@jest/globals";
import generateConfigs from "./core/configs";
import generateDeclaration from "./templates/declaration";
import generateDocumentation from "./templates/documentation";
import generateInterface from "./templates/interface";
import { generateSchemaCode } from ".";

jest.mock("fs/promises");

describe("openapi-code-generator", () => {
  it("should ...", () => {
    expect(generateSchemaCode).not.toBeNull();
    expect(generateInterface).not.toBeNull();
    expect(generateDeclaration).not.toBeNull();
    expect(generateDocumentation).not.toBeNull();
    expect(generateConfigs).not.toBeNull();
  });
});
