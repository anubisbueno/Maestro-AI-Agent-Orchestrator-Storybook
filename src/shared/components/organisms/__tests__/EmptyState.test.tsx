import { render, screen } from "@testing-library/react";
import { Inbox, Search } from "lucide-react";
import { EmptyState } from "../EmptyState";

describe("EmptyState", () => {
  describe("rendering", () => {
    it("renders title as a heading", () => {
      render(<EmptyState title="No items found" />);
      expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("No items found");
    });

    it("renders only title when no optional props provided", () => {
      const { container } = render(<EmptyState title="Empty" />);
      expect(screen.getByText("Empty")).toBeInTheDocument();
      expect(container.querySelector("p")).not.toBeInTheDocument();
      expect(container.querySelector("svg")).not.toBeInTheDocument();
    });
  });

  describe("description", () => {
    it("renders description when provided", () => {
      render(<EmptyState title="No items" description="Try adding some items" />);
      expect(screen.getByText("Try adding some items")).toBeInTheDocument();
    });

    it("does not render paragraph element when description is omitted", () => {
      const { container } = render(<EmptyState title="No items" />);
      expect(container.querySelector("p")).not.toBeInTheDocument();
    });
  });

  describe("icon", () => {
    it("renders icon SVG when icon prop is provided", () => {
      const { container } = render(<EmptyState title="No items" icon={Inbox} />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("does not render icon container when icon is omitted", () => {
      const { container } = render(<EmptyState title="No items" />);
      expect(container.querySelector("svg")).not.toBeInTheDocument();
    });

    it("renders different icons", () => {
      const { container } = render(<EmptyState title="No results" icon={Search} />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("icon uses lg size", () => {
      const { container } = render(<EmptyState title="No items" icon={Inbox} />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("size-6");
    });
  });

  describe("children (action slot)", () => {
    it("renders children content", () => {
      render(
        <EmptyState title="No items">
          <button type="button">Add item</button>
        </EmptyState>,
      );
      expect(screen.getByRole("button", { name: "Add item" })).toBeInTheDocument();
    });

    it("does not render action container when children is omitted", () => {
      const { container } = render(<EmptyState title="No items" />);
      const divs = container.querySelectorAll("div");
      // Only the root div should exist (no mt-4 action wrapper)
      for (const div of divs) {
        expect(div.className).not.toContain("mt-4");
      }
    });
  });

  describe("full composition", () => {
    it("renders all parts together", () => {
      const { container } = render(
        <EmptyState
          title="No machines"
          description="Register your first machine to get started"
          icon={Inbox}
        >
          <button type="button">Register Machine</button>
        </EmptyState>,
      );
      expect(container.querySelector("svg")).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("No machines");
      expect(screen.getByText("Register your first machine to get started")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Register Machine" })).toBeInTheDocument();
    });
  });

  describe("className passthrough", () => {
    it("applies custom className to the wrapper", () => {
      const { container } = render(<EmptyState title="Empty" className="min-h-[400px]" />);
      expect(container.firstChild as HTMLElement).toHaveClass("min-h-[400px]");
    });

    it("preserves centered layout classes", () => {
      const { container } = render(<EmptyState title="Empty" className="custom" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("flex");
      expect(wrapper).toHaveClass("items-center");
      expect(wrapper).toHaveClass("justify-center");
      expect(wrapper).toHaveClass("text-center");
    });
  });
});
