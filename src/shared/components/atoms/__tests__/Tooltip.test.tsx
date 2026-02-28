import { Tooltip } from "../Tooltip";
import { render, screen } from "@testing-library/react";

describe("Tooltip", () => {
  it("renders children content", () => {
    render(
      <Tooltip text="Tooltip text">
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeDefined();
  });

  it("tooltip text exists in DOM with role tooltip", () => {
    render(
      <Tooltip text="Tooltip text">
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeDefined();
    expect(tooltip.textContent).toBe("Tooltip text");
  });

  it("aria-describedby links child to tooltip", () => {
    render(
      <Tooltip text="Tooltip text">
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    const button = screen.getByText("Hover me");
    const tooltip = screen.getByRole("tooltip");
    const describedBy = button.parentElement?.getAttribute("aria-describedby");
    expect(describedBy).toBe(tooltip.id);
  });
});
