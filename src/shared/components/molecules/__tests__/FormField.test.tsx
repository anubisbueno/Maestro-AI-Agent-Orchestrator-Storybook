import { FormField } from "../FormField";
import { render, screen } from "@testing-library/react";

describe("FormField", () => {
  it("label renders with correct text", () => {
    render(<FormField label="Username" />);
    expect(screen.getByText("Username")).toBeDefined();
  });

  it("label has htmlFor linking to input", () => {
    render(<FormField label="Username" id="username-field" />);
    const label = screen.getByText("Username") as HTMLLabelElement;
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(label.htmlFor).toBe(input.id);
    expect(input.id).toBe("username-field");
  });

  it("input is rendered", () => {
    render(<FormField label="Username" />);
    expect(screen.getByRole("textbox")).toBeDefined();
  });

  it("error message renders with role alert", () => {
    render(<FormField label="Username" error="Username is required" />);
    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toBeDefined();
  });

  it("error message shows error text", () => {
    render(<FormField label="Username" error="Username is required" />);
    expect(screen.getByText("Username is required")).toBeDefined();
  });

  it("hint text renders when no error", () => {
    render(<FormField label="Username" hint="Enter your username" />);
    expect(screen.getByText("Enter your username")).toBeDefined();
  });

  it("hint text hidden when error is present", () => {
    render(<FormField label="Username" hint="Enter your username" error="Username is required" />);
    expect(screen.queryByText("Enter your username")).toBeNull();
  });

  it("aria-invalid is true when error", () => {
    render(<FormField label="Username" error="Username is required" />);
    const input = screen.getByRole("textbox");
    expect(input.getAttribute("aria-invalid")).toBe("true");
  });
});
