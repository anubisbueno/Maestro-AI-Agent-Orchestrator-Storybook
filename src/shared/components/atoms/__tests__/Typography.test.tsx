import { H1, H2, H3, Small, Text } from "../Typography";
import { render, screen } from "@testing-library/react";

describe("Typography", () => {
  describe("H1", () => {
    it("renders as h1 element", () => {
      const { container } = render(<H1>Heading 1</H1>);
      const h1 = container.querySelector("h1");
      expect(h1).toBeDefined();
    });

    it("renders children text", () => {
      render(<H1>Heading 1</H1>);
      expect(screen.getByText("Heading 1")).toBeDefined();
    });

    it("has class font-display", () => {
      const { container } = render(<H1>Heading 1</H1>);
      const h1 = container.querySelector("h1");
      expect(h1?.className).toContain("font-display");
    });
  });

  describe("H2", () => {
    it("renders as h2 element", () => {
      const { container } = render(<H2>Heading 2</H2>);
      const h2 = container.querySelector("h2");
      expect(h2).toBeDefined();
    });

    it("renders children text", () => {
      render(<H2>Heading 2</H2>);
      expect(screen.getByText("Heading 2")).toBeDefined();
    });
  });

  describe("H3", () => {
    it("renders as h3 element", () => {
      const { container } = render(<H3>Heading 3</H3>);
      const h3 = container.querySelector("h3");
      expect(h3).toBeDefined();
    });

    it("renders children text", () => {
      render(<H3>Heading 3</H3>);
      expect(screen.getByText("Heading 3")).toBeDefined();
    });
  });

  describe("Text", () => {
    it("renders as p element", () => {
      const { container } = render(<Text>Paragraph text</Text>);
      const p = container.querySelector("p");
      expect(p).toBeDefined();
    });

    it("renders children text", () => {
      render(<Text>Paragraph text</Text>);
      expect(screen.getByText("Paragraph text")).toBeDefined();
    });

    it("has class font-body", () => {
      const { container } = render(<Text>Paragraph text</Text>);
      const p = container.querySelector("p");
      expect(p?.className).toContain("font-body");
    });
  });

  describe("Small", () => {
    it("renders as span element", () => {
      const { container } = render(<Small>Small text</Small>);
      const span = container.querySelector("span");
      expect(span).toBeDefined();
    });

    it("renders children text", () => {
      render(<Small>Small text</Small>);
      expect(screen.getByText("Small text")).toBeDefined();
    });
  });
});
