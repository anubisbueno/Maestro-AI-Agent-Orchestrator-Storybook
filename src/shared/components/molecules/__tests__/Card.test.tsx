import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

describe("Card", () => {
  describe("CardRoot", () => {
    it("renders children content", () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("has data-slot card", () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.querySelector("[data-slot='card']")).toBeInTheDocument();
    });

    it("has rounded border styling", () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass("rounded-md");
      expect(card).toHaveClass("border");
    });
  });

  describe("shadow prop", () => {
    it("adds shadow-sm class when shadow is true", () => {
      const { container } = render(<Card shadow>Shadowed</Card>);
      expect(container.firstChild as HTMLElement).toHaveClass("shadow-sm");
    });

    it("does not add shadow-sm class when shadow is false", () => {
      const { container } = render(<Card shadow={false}>No Shadow</Card>);
      expect(container.firstChild as HTMLElement).not.toHaveClass("shadow-sm");
    });

    it("does not add shadow-sm class by default", () => {
      const { container } = render(<Card>Default</Card>);
      expect(container.firstChild as HTMLElement).not.toHaveClass("shadow-sm");
    });
  });

  describe("Card.Header", () => {
    it("renders header content", () => {
      render(
        <Card>
          <Card.Header>Header Title</Card.Header>
        </Card>,
      );
      expect(screen.getByText("Header Title")).toBeInTheDocument();
    });

    it("has data-slot card-header", () => {
      const { container } = render(
        <Card>
          <Card.Header>Header</Card.Header>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-header']")).toBeInTheDocument();
    });

    it("has bottom border for section separation", () => {
      const { container } = render(
        <Card>
          <Card.Header>Header</Card.Header>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-header']")).toHaveClass("border-b");
    });

    it("applies custom className", () => {
      const { container } = render(
        <Card>
          <Card.Header className="bg-muted">Header</Card.Header>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-header']")).toHaveClass("bg-muted");
    });
  });

  describe("Card.Body", () => {
    it("renders body content", () => {
      render(
        <Card>
          <Card.Body>Body content here</Card.Body>
        </Card>,
      );
      expect(screen.getByText("Body content here")).toBeInTheDocument();
    });

    it("has data-slot card-content", () => {
      const { container } = render(
        <Card>
          <Card.Body>Body</Card.Body>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-content']")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      const { container } = render(
        <Card>
          <Card.Body className="space-y-4">Body</Card.Body>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-content']")).toHaveClass("space-y-4");
    });
  });

  describe("Card.Footer", () => {
    it("renders footer content", () => {
      render(
        <Card>
          <Card.Footer>Footer actions</Card.Footer>
        </Card>,
      );
      expect(screen.getByText("Footer actions")).toBeInTheDocument();
    });

    it("has data-slot card-footer", () => {
      const { container } = render(
        <Card>
          <Card.Footer>Footer</Card.Footer>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-footer']")).toBeInTheDocument();
    });

    it("has top border for section separation", () => {
      const { container } = render(
        <Card>
          <Card.Footer>Footer</Card.Footer>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-footer']")).toHaveClass("border-t");
    });

    it("applies custom className", () => {
      const { container } = render(
        <Card>
          <Card.Footer className="justify-end">Footer</Card.Footer>
        </Card>,
      );
      expect(container.querySelector("[data-slot='card-footer']")).toHaveClass("justify-end");
    });
  });

  describe("composition", () => {
    it("renders all sections together", () => {
      render(
        <Card shadow>
          <Card.Header>Title</Card.Header>
          <Card.Body>Description</Card.Body>
          <Card.Footer>Actions</Card.Footer>
        </Card>,
      );
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
      expect(screen.getByText("Actions")).toBeInTheDocument();
    });
  });

  describe("className passthrough on root", () => {
    it("applies custom className to card root", () => {
      const { container } = render(<Card className="max-w-md">Content</Card>);
      expect(container.firstChild as HTMLElement).toHaveClass("max-w-md");
    });
  });
});
