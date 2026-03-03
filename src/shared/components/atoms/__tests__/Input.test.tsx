import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { Input } from "../Input";

describe("Input", () => {
  describe("rendering", () => {
    it("renders an input element", () => {
      render(<Input placeholder="Type here" />);
      expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
    });

    it("renders as a textbox by default", () => {
      render(<Input placeholder="Type here" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  describe("error state", () => {
    it("adds border-destructive class when error is true", () => {
      render(<Input error placeholder="Error" />);
      expect(screen.getByPlaceholderText("Error")).toHaveClass("border-destructive");
    });

    it("adds ring-destructive class when error is true", () => {
      render(<Input error placeholder="Error" />);
      expect(screen.getByPlaceholderText("Error").className).toContain("ring-destructive");
    });

    it("sets aria-invalid when error is true", () => {
      render(<Input error placeholder="Error" />);
      expect(screen.getByPlaceholderText("Error")).toHaveAttribute("aria-invalid", "true");
    });

    it("does not set aria-invalid when error is false", () => {
      render(<Input error={false} placeholder="Normal" />);
      expect(screen.getByPlaceholderText("Normal")).not.toHaveAttribute("aria-invalid");
    });

    it("does not set aria-invalid when error is undefined", () => {
      render(<Input placeholder="Normal" />);
      expect(screen.getByPlaceholderText("Normal")).not.toHaveAttribute("aria-invalid");
    });

    it("does not add border-destructive as a direct class when error is not set", () => {
      render(<Input placeholder="Normal" />);
      // The shadcn base has `aria-invalid:border-destructive` (conditional),
      // but the wrapper should NOT add `border-destructive` as a direct class
      const classes = screen.getByPlaceholderText("Normal").className.split(" ");
      expect(classes).not.toContain("border-destructive");
    });
  });

  describe("interactions", () => {
    it("accepts user input", async () => {
      const user = userEvent.setup();
      render(<Input placeholder="Type" />);
      const input = screen.getByPlaceholderText("Type");
      await user.type(input, "Hello");
      expect(input).toHaveValue("Hello");
    });

    it("calls onChange handler", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Input placeholder="Type" onChange={onChange} />);
      await user.type(screen.getByPlaceholderText("Type"), "A");
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe("HTML attributes", () => {
    it("disabled state prevents input", () => {
      render(<Input disabled placeholder="Disabled" />);
      expect(screen.getByPlaceholderText("Disabled")).toBeDisabled();
    });

    it("applies custom className", () => {
      render(<Input className="custom-input" placeholder="Custom" />);
      expect(screen.getByPlaceholderText("Custom")).toHaveClass("custom-input");
    });

    it("forwards ref", () => {
      const ref = createRef<HTMLInputElement>();
      render(<Input ref={ref} placeholder="Ref" />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.placeholder).toBe("Ref");
    });

    it("passes through type attribute", () => {
      render(<Input type="email" placeholder="Email" />);
      expect(screen.getByPlaceholderText("Email")).toHaveAttribute("type", "email");
    });
  });
});
