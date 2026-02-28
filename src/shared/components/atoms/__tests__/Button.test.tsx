import { Button } from "@/shared/components/atoms/Button";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("primary variant maps to data-variant default", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("data-variant")).toBe("default");
  });

  it("secondary variant has data-variant secondary", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("data-variant")).toBe("secondary");
  });

  it("ghost variant has data-variant ghost", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("data-variant")).toBe("ghost");
  });

  it("sm size has h-8 class", () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("h-8");
  });

  it("md size (default) maps to data-size default", () => {
    render(<Button>Medium</Button>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("data-size")).toBe("default");
  });

  it("lg size has data-size lg", () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("data-size")).toBe("lg");
  });

  it("disabled state has disabled attribute", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("custom-class");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe("Ref Button");
  });
});
