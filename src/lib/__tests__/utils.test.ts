import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges multiple classes", () => {
    const result = cn("px-2", "py-3");
    expect(result).toContain("px-2");
    expect(result).toContain("py-3");
  });

  it("resolves Tailwind conflicts", () => {
    const result = cn("px-2", "px-4");
    expect(result).toBe("px-4");
  });

  it("handles undefined and falsy values", () => {
    const result = cn("px-2", undefined, false, "py-3");
    expect(result).toBe("px-2 py-3");
  });

  it("returns empty string for no arguments", () => {
    const result = cn();
    expect(result).toBe("");
  });
});
