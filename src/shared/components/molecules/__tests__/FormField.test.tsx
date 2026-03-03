import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { FormField } from "../FormField";

describe("FormField", () => {
  describe("rendering", () => {
    it("renders a label with the provided text", () => {
      render(<FormField label="Email" />);
      expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("renders an input element", () => {
      render(<FormField label="Email" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  describe("label-input association", () => {
    it("label htmlFor links to input id", () => {
      render(<FormField label="Email" />);
      const label = screen.getByText("Email");
      const input = screen.getByRole("textbox");
      expect(label).toHaveAttribute("for", input.id);
    });

    it("uses external id when provided", () => {
      render(<FormField label="Email" id="email-field" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("id", "email-field");
      expect(screen.getByText("Email")).toHaveAttribute("for", "email-field");
    });

    it("clicking label focuses the input", async () => {
      const user = userEvent.setup();
      render(<FormField label="Email" />);
      await user.click(screen.getByText("Email"));
      expect(screen.getByRole("textbox")).toHaveFocus();
    });
  });

  describe("error state", () => {
    it("displays error message text", () => {
      render(<FormField label="Email" error="Email is required" />);
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });

    it("error message has role alert for screen readers", () => {
      render(<FormField label="Email" error="Email is required" />);
      expect(screen.getByRole("alert")).toHaveTextContent("Email is required");
    });

    it("sets aria-invalid on the input", () => {
      render(<FormField label="Email" error="Invalid" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    });

    it("links input to error via aria-describedby", () => {
      render(<FormField label="Email" id="email" error="Required" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-describedby", "email-error");
      expect(screen.getByRole("alert")).toHaveAttribute("id", "email-error");
    });

    it("hides hint when error is present", () => {
      render(<FormField label="Email" hint="Enter valid email" error="Invalid email" />);
      expect(screen.queryByText("Enter valid email")).not.toBeInTheDocument();
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });
  });

  describe("hint text", () => {
    it("displays hint text when provided", () => {
      render(<FormField label="Email" hint="We will not share your email" />);
      expect(screen.getByText("We will not share your email")).toBeInTheDocument();
    });

    it("links input to hint via aria-describedby", () => {
      render(<FormField label="Email" id="email" hint="Helper text" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-describedby", "email-hint");
    });

    it("does not set aria-describedby when neither hint nor error", () => {
      render(<FormField label="Email" />);
      expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-describedby");
    });
  });

  describe("interactions", () => {
    it("accepts user input", async () => {
      const user = userEvent.setup();
      render(<FormField label="Email" />);
      await user.type(screen.getByRole("textbox"), "test@example.com");
      expect(screen.getByRole("textbox")).toHaveValue("test@example.com");
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref to the input element", () => {
      const ref = createRef<HTMLInputElement>();
      render(<FormField label="Email" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe("className passthrough", () => {
    it("applies custom className to the wrapper", () => {
      const { container } = render(<FormField label="Email" className="mb-4" />);
      expect(container.firstChild as HTMLElement).toHaveClass("mb-4");
    });
  });
});
