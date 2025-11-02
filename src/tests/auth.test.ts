import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null if no authorization header", () => {
    const headers = {};
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  test("return null if authorization header is malformed", () => {
    const headers = {
      authorization: "Bearer invalid_token",
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  test("returns API key if authorization header is well-formed", () => {
    const headers = {
      authorization: "ApiKey valid_token",
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("valid_token");
  });
});
