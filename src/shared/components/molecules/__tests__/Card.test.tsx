import { Card } from "@/shared/components/molecules/Card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("renders children content", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeDefined();
  });

  it("shadow prop adds class shadow-sm", () => {
    const { container } = render(<Card shadow>With shadow</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain("shadow-sm");
  });

  it("without shadow does not have shadow-sm class", () => {
    const { container } = render(<Card>No shadow</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).not.toContain("shadow-sm");
  });

  it("Card.Header renders children", () => {
    render(
      <Card>
        <Card.Header>Header content</Card.Header>
      </Card>,
    );
    expect(screen.getByText("Header content")).toBeDefined();
  });

  it("Card.Body renders children", () => {
    render(
      <Card>
        <Card.Body>Body content</Card.Body>
      </Card>,
    );
    expect(screen.getByText("Body content")).toBeDefined();
  });

  it("Card.Footer renders children", () => {
    render(
      <Card>
        <Card.Footer>Footer content</Card.Footer>
      </Card>,
    );
    expect(screen.getByText("Footer content")).toBeDefined();
  });
});
