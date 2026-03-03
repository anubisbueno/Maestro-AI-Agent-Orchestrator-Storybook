import { render, screen } from "@testing-library/react";
import { Home, Settings } from "lucide-react";
import { Icon } from "../Icon";

describe("Icon", () => {
  describe("rendering", () => {
    it("renders an SVG element", () => {
      const { container } = render(<Icon icon={Home} />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders different Lucide icons", () => {
      const { container } = render(<Icon icon={Settings} />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("sizes", () => {
    it("sm size applies size-4 class", () => {
      const { container } = render(<Icon icon={Home} size="sm" />);
      expect(container.querySelector("svg")).toHaveClass("size-4");
    });

    it("md size (default) applies size-5 class", () => {
      const { container } = render(<Icon icon={Home} />);
      expect(container.querySelector("svg")).toHaveClass("size-5");
    });

    it("lg size applies size-6 class", () => {
      const { container } = render(<Icon icon={Home} size="lg" />);
      expect(container.querySelector("svg")).toHaveClass("size-6");
    });
  });

  describe("accessibility", () => {
    it("is aria-hidden when no label is provided (decorative)", () => {
      const { container } = render(<Icon icon={Home} />);
      expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    });

    it("has aria-label when label is provided (meaningful)", () => {
      const { container } = render(<Icon icon={Home} label="Go home" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-label", "Go home");
    });

    it("is not aria-hidden when label is provided", () => {
      const { container } = render(<Icon icon={Home} label="Go home" />);
      const svg = container.querySelector("svg");
      expect(svg).not.toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("className passthrough", () => {
    it("applies custom className", () => {
      const { container } = render(<Icon icon={Home} className="text-red-500" />);
      expect(container.querySelector("svg")).toHaveClass("text-red-500");
    });

    it("preserves size class when custom className is added", () => {
      const { container } = render(<Icon icon={Home} size="lg" className="text-red-500" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("size-6");
      expect(svg).toHaveClass("text-red-500");
    });
  });
});
