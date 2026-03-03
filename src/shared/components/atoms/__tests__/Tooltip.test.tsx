import { render, screen } from "@testing-library/react";
import { Tooltip } from "../Tooltip";

describe("Tooltip", () => {
  describe("rendering", () => {
    it("renders children content", () => {
      render(
        <Tooltip text="Help text">
          <button type="button">Hover me</button>
        </Tooltip>,
      );
      expect(screen.getByRole("button", { name: "Hover me" })).toBeInTheDocument();
    });

    it("renders tooltip text in the DOM", () => {
      render(
        <Tooltip text="Help text">
          <span>Trigger</span>
        </Tooltip>,
      );
      expect(screen.getByText("Help text")).toBeInTheDocument();
    });

    it("tooltip element has role tooltip", () => {
      render(
        <Tooltip text="Help text">
          <span>Trigger</span>
        </Tooltip>,
      );
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
      expect(screen.getByRole("tooltip")).toHaveTextContent("Help text");
    });
  });

  describe("accessibility", () => {
    it("links children wrapper to tooltip via aria-describedby", () => {
      render(
        <Tooltip text="Help text">
          <button type="button">Trigger</button>
        </Tooltip>,
      );
      const tooltipEl = screen.getByRole("tooltip");
      const trigger = screen.getByRole("button").parentElement;
      expect(trigger).toHaveAttribute("aria-describedby", tooltipEl.id);
    });

    it("generates unique id for aria-describedby linkage", () => {
      render(
        <Tooltip text="Help text">
          <span>Trigger</span>
        </Tooltip>,
      );
      const tooltipEl = screen.getByRole("tooltip");
      expect(tooltipEl.id).toBeTruthy();
    });

    it("tooltip has data-slot tooltip-content", () => {
      render(
        <Tooltip text="Help text">
          <span>Trigger</span>
        </Tooltip>,
      );
      expect(screen.getByRole("tooltip")).toHaveAttribute("data-slot", "tooltip-content");
    });
  });

  describe("visibility via CSS classes", () => {
    it("tooltip starts with opacity-0 (hidden by CSS)", () => {
      render(
        <Tooltip text="Help text">
          <span>Trigger</span>
        </Tooltip>,
      );
      expect(screen.getByRole("tooltip").className).toContain("opacity-0");
    });

    it("has group-hover:opacity-100 class for hover reveal", () => {
      render(
        <Tooltip text="Help text">
          <span>Trigger</span>
        </Tooltip>,
      );
      expect(screen.getByRole("tooltip").className).toContain("group-hover:opacity-100");
    });

    it("has group-focus-within:opacity-100 class for focus reveal", () => {
      render(
        <Tooltip text="Help text">
          <span>Trigger</span>
        </Tooltip>,
      );
      expect(screen.getByRole("tooltip").className).toContain("group-focus-within:opacity-100");
    });
  });

  describe("className passthrough", () => {
    it("applies custom className to the wrapper", () => {
      const { container } = render(
        <Tooltip text="Help" className="custom-tooltip">
          <span>Trigger</span>
        </Tooltip>,
      );
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("custom-tooltip");
    });
  });
});
