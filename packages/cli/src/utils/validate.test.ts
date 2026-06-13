import { describe, it, expect } from "vitest";
import {
  validateProjectName,
  validateVersion,
  validateIdentifier,
  toPascalCase,
  toSnakeCase,
} from "./validate.js";

describe("validateProjectName", () => {
  it("should accept valid names", () => {
    expect(validateProjectName("my-app")).toBeUndefined();
    expect(validateProjectName("app123")).toBeUndefined();
    expect(validateProjectName("my_app")).toBeUndefined();
  });

  it("should reject invalid names", () => {
    expect(validateProjectName("")).toBeTypeOf("string");
    expect(validateProjectName("-app")).toBeTypeOf("string");
    expect(validateProjectName("app-")).toBeTypeOf("string");
    expect(validateProjectName("my app")).toBeTypeOf("string");
    expect(validateProjectName("MyApp")).toBeTypeOf("string");
  });
});

describe("validateVersion", () => {
  it("should accept valid semver", () => {
    expect(validateVersion("0.1.0")).toBeUndefined();
    expect(validateVersion("1.0.0")).toBeUndefined();
    expect(validateVersion("10.20.30")).toBeUndefined();
  });

  it("should allow empty input (for default fallback)", () => {
    expect(validateVersion("")).toBeUndefined();
    expect(validateVersion(undefined)).toBeUndefined();
  });

  it("should reject invalid semver", () => {
    expect(validateVersion("1.0")).toBeTypeOf("string");
    expect(validateVersion("v1.0.0")).toBeTypeOf("string");
    expect(validateVersion("1.0.0-beta")).toBeTypeOf("string");
  });
});

describe("validateIdentifier", () => {
  it("should accept valid reverse-domain identifiers", () => {
    expect(validateIdentifier("com.example.app")).toBeUndefined();
    expect(validateIdentifier("org.my_org.app123")).toBeUndefined();
    expect(validateIdentifier("com.test.my_app.mobile")).toBeUndefined();
  });

  it("should reject empty input", () => {
    expect(validateIdentifier("")).toBeTypeOf("string");
    expect(validateIdentifier(undefined)).toBeTypeOf("string");
  });

  it("should reject invalid identifiers", () => {
    // Less than 3 parts
    expect(validateIdentifier("com.app")).toBeTypeOf("string");
    // Starting with number
    expect(validateIdentifier("com.123.app")).toBeTypeOf("string");
    // Invalid characters
    expect(validateIdentifier("com.my-app.app")).toBeTypeOf("string");
    expect(validateIdentifier("Com.app.app")).toBeTypeOf("string");
    // Parts too short
    expect(validateIdentifier("c.app.app")).toBeTypeOf("string");
    expect(validateIdentifier("com.a.app")).toBeTypeOf("string");
  });
});

describe("toPascalCase", () => {
  it("should convert correctly", () => {
    expect(toPascalCase("my-app")).toBe("MyApp");
    expect(toPascalCase("test")).toBe("Test");
    expect(toPascalCase("hello-world-app")).toBe("HelloWorldApp");
  });
});

describe("toSnakeCase", () => {
  it("should convert correctly", () => {
    expect(toSnakeCase("my-app")).toBe("my_app");
    expect(toSnakeCase("test")).toBe("test");
    expect(toSnakeCase("hello-world-app")).toBe("hello_world_app");
  });
});
