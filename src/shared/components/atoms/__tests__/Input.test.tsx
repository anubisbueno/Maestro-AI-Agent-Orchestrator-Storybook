import { Input } from "../Input";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeDefined();
  });

  it("error=true adds border-destructive class", () => {
    render(<Input error={true} placeholder="Error input" />);
    const input = screen.getByPlaceholderText("Error input");
    expect(input.className).toContain("border-destructive");
  });

  it("error=false (default) does not set aria-invalid", () => {
    render(<Input error={false} placeholder="Normal input" />);
    const input = screen.getByPlaceholderText("Normal input");
    expect(input.hasAttribute("aria-invalid")).toBe(false);
  });

  it("error=true sets aria-invalid", () => {
    render(<Input error={true} placeholder="Error input" />);
    const input = screen.getByPlaceholderText("Error input");
    expect(input.getAttribute("aria-invalid")).toBe("true");
  });

  it("disabled state has disabled attribute", () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it("applies custom className", () => {
    render(<Input className="custom-input" placeholder="Custom" />);
    const input = screen.getByPlaceholderText("Custom");
    expect(input.className).toContain("custom-input");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref input" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.placeholder).toBe("Ref input");
  });
});
