import { EmptyState } from "@/shared/components/organisms/EmptyState";
import { render, screen } from "@testing-library/react";
import { Inbox } from "lucide-react";

describe("EmptyState", () => {
  it("renders title text", () => {
    render(<EmptyState title="No items found" />);
    expect(screen.getByText("No items found")).toBeDefined();
  });

  it("renders description when provided", () => {
    render(<EmptyState title="No items" description="Try adding some items" />);
    expect(screen.getByText("Try adding some items")).toBeDefined();
  });

  it("does not render description element when not provided", () => {
    const { container } = render(<EmptyState title="No items" />);
    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(0);
  });

  it("renders children slot", () => {
    render(
      <EmptyState title="No items">
        <button type="button">Add item</button>
      </EmptyState>,
    );
    expect(screen.getByText("Add item")).toBeDefined();
  });

  it("renders icon SVG when icon prop provided", () => {
    const { container } = render(<EmptyState title="No items" icon={Inbox} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeDefined();
  });
});
