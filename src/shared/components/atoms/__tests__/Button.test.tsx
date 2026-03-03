import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("Button", () => {
  describe("rendering", () => {
    it("renders as a button element", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("renders children text", () => {
      render(<Button>Submit</Button>);
      expect(screen.getByRole("button")).toHaveTextContent("Submit");
    });
  });

  describe("variant mapping", () => {
    it("primary variant maps to shadcn default", () => {
      render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", "default");
    });

    it("secondary variant passes through", () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", "secondary");
    });

    it("ghost variant passes through", () => {
      render(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", "ghost");
    });

    it("outline variant passes through", () => {
      render(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", "outline");
    });

    it("destructive variant passes through", () => {
      render(<Button variant="destructive">Destructive</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", "destructive");
    });

    it("link variant passes through", () => {
      render(<Button variant="link">Link</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", "link");
    });

    it("defaults to primary (mapped to default) when no variant provided", () => {
      render(<Button>Default</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", "default");
    });
  });

  describe("size mapping", () => {
    it("sm size passes through", () => {
      render(<Button size="sm">Small</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-size", "sm");
    });

    it("md size maps to shadcn default", () => {
      render(<Button size="md">Medium</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-size", "default");
    });

    it("lg size passes through", () => {
      render(<Button size="lg">Large</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-size", "lg");
    });

    it("icon size passes through", () => {
      render(<Button size="icon">I</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-size", "icon");
    });

    it("defaults to md (mapped to default) when no size provided", () => {
      render(<Button>Default Size</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("data-size", "default");
    });
  });

  describe("interactions", () => {
    it("calls onClick handler when clicked", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Click</Button>);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Button onClick={onClick} disabled>
          Disabled
        </Button>,
      );
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("HTML attributes", () => {
    it("disabled state sets disabled attribute", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("applies custom className", () => {
      render(<Button className="custom-btn">Custom</Button>);
      expect(screen.getByRole("button")).toHaveClass("custom-btn");
    });

    it("passes through type attribute", () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });
  });
});
