import { Icon } from "@/shared/components/atoms/Icon";
import { render, screen } from "@testing-library/react";
import { Home } from "lucide-react";

describe("Icon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<Icon icon={Home} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeDefined();
  });

  it("sm size has size-4 class", () => {
    const { container } = render(<Icon icon={Home} size="sm" />);
    const svg = container.querySelector("svg");
    expect(svg?.className).toContain("size-4");
  });

  it("md size (default) has size-5 class", () => {
    const { container } = render(<Icon icon={Home} />);
    const svg = container.querySelector("svg");
    expect(svg?.className).toContain("size-5");
  });

  it("lg size has size-6 class", () => {
    const { container } = render(<Icon icon={Home} size="lg" />);
    const svg = container.querySelector("svg");
    expect(svg?.className).toContain("size-6");
  });

  it("without label has aria-hidden", () => {
    const { container } = render(<Icon icon={Home} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-hidden")).toBeTruthy();
  });

  it("with label has the aria-label attribute with the label value", () => {
    const { container } = render(<Icon icon={Home} label="Home icon" />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-label")).toBe("Home icon");
  });
});
