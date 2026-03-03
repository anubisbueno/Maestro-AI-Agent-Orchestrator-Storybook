import { render, screen } from "@testing-library/react";
import { H1, H2, H3, Small, Text } from "../Typography";

describe("Typography", () => {
  describe("H1", () => {
    it("renders as h1 heading element", () => {
      render(<H1>Main Title</H1>);
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("renders children text", () => {
      render(<H1>Main Title</H1>);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Main Title");
    });

    it("uses brand display font", () => {
      render(<H1>Title</H1>);
      expect(screen.getByRole("heading", { level: 1 })).toHaveClass("font-display");
    });

    it("has text-3xl size", () => {
      render(<H1>Title</H1>);
      expect(screen.getByRole("heading", { level: 1 })).toHaveClass("text-3xl");
    });

    it("applies custom className", () => {
      render(<H1 className="mt-8">Title</H1>);
      expect(screen.getByRole("heading", { level: 1 })).toHaveClass("mt-8");
    });
  });

  describe("H2", () => {
    it("renders as h2 heading element", () => {
      render(<H2>Section Title</H2>);
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });

    it("renders children text", () => {
      render(<H2>Section Title</H2>);
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Section Title");
    });

    it("uses brand display font", () => {
      render(<H2>Title</H2>);
      expect(screen.getByRole("heading", { level: 2 })).toHaveClass("font-display");
    });

    it("has text-2xl size", () => {
      render(<H2>Title</H2>);
      expect(screen.getByRole("heading", { level: 2 })).toHaveClass("text-2xl");
    });

    it("applies custom className", () => {
      render(<H2 className="mb-4">Title</H2>);
      expect(screen.getByRole("heading", { level: 2 })).toHaveClass("mb-4");
    });
  });

  describe("H3", () => {
    it("renders as h3 heading element", () => {
      render(<H3>Subsection</H3>);
      expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    });

    it("renders children text", () => {
      render(<H3>Subsection</H3>);
      expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Subsection");
    });

    it("uses brand display font", () => {
      render(<H3>Title</H3>);
      expect(screen.getByRole("heading", { level: 3 })).toHaveClass("font-display");
    });

    it("has text-xl size", () => {
      render(<H3>Title</H3>);
      expect(screen.getByRole("heading", { level: 3 })).toHaveClass("text-xl");
    });

    it("applies custom className", () => {
      render(<H3 className="text-primary">Title</H3>);
      expect(screen.getByRole("heading", { level: 3 })).toHaveClass("text-primary");
    });
  });

  describe("Text", () => {
    it("renders as a paragraph element", () => {
      const { container } = render(<Text>Body text</Text>);
      expect(container.querySelector("p")).toBeInTheDocument();
    });

    it("renders children text", () => {
      render(<Text>Body text content</Text>);
      expect(screen.getByText("Body text content")).toBeInTheDocument();
    });

    it("uses brand body font", () => {
      const { container } = render(<Text>Content</Text>);
      expect(container.querySelector("p")).toHaveClass("font-body");
    });

    it("has text-base size", () => {
      const { container } = render(<Text>Content</Text>);
      expect(container.querySelector("p")).toHaveClass("text-base");
    });

    it("applies custom className", () => {
      const { container } = render(<Text className="leading-relaxed">Content</Text>);
      expect(container.querySelector("p")).toHaveClass("leading-relaxed");
    });
  });

  describe("Small", () => {
    it("renders as a span element", () => {
      const { container } = render(<Small>Fine print</Small>);
      const span = container.querySelector("span");
      expect(span).toBeInTheDocument();
      expect(span).toHaveTextContent("Fine print");
    });

    it("has text-sm size", () => {
      const { container } = render(<Small>Fine print</Small>);
      expect(container.querySelector("span")).toHaveClass("text-sm");
    });

    it("uses muted foreground color", () => {
      const { container } = render(<Small>Fine print</Small>);
      expect(container.querySelector("span")).toHaveClass("text-muted-foreground");
    });

    it("applies custom className", () => {
      const { container } = render(<Small className="italic">Fine print</Small>);
      expect(container.querySelector("span")).toHaveClass("italic");
    });
  });
});
