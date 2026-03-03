import { render, screen } from "@testing-library/react";
import { Avatar } from "../Avatar";

describe("Avatar", () => {
  describe("rendering", () => {
    it("renders with role img", () => {
      render(<Avatar name="Test" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders image when src is provided", () => {
      const { container } = render(<Avatar src="https://example.com/avatar.jpg" alt="User" />);
      const img = container.querySelector("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
    });

    it("renders initials when name is provided without src", () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("renders question mark when neither src nor name is provided", () => {
      render(<Avatar />);
      expect(screen.getByText("?")).toBeInTheDocument();
    });
  });

  describe("getInitials logic", () => {
    it("extracts first letter of first two words", () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("extracts single initial from single name", () => {
      render(<Avatar name="John" />);
      expect(screen.getByText("J")).toBeInTheDocument();
    });

    it("handles three or more words by taking first two initials", () => {
      render(<Avatar name="John Michael Doe" />);
      expect(screen.getByText("JM")).toBeInTheDocument();
    });

    it("uppercases initials from lowercase names", () => {
      render(<Avatar name="jane smith" />);
      expect(screen.getByText("JS")).toBeInTheDocument();
    });
  });

  describe("sizes", () => {
    it("sm size applies size-8 class", () => {
      render(<Avatar size="sm" name="T" />);
      expect(screen.getByRole("img")).toHaveClass("size-8");
    });

    it("md size (default) applies size-10 class", () => {
      render(<Avatar name="T" />);
      expect(screen.getByRole("img")).toHaveClass("size-10");
    });

    it("lg size applies size-12 class", () => {
      render(<Avatar size="lg" name="T" />);
      expect(screen.getByRole("img")).toHaveClass("size-12");
    });
  });

  describe("accessibility", () => {
    it("uses alt prop as aria-label when provided", () => {
      render(<Avatar alt="User avatar" />);
      expect(screen.getByRole("img")).toHaveAttribute("aria-label", "User avatar");
    });

    it("uses name as aria-label when alt is not provided", () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByRole("img")).toHaveAttribute("aria-label", "John Doe");
    });

    it("falls back to 'avatar' when neither alt nor name is provided", () => {
      render(<Avatar />);
      expect(screen.getByRole("img")).toHaveAttribute("aria-label", "avatar");
    });

    it("image uses aria-label value as alt text", () => {
      const { container } = render(
        <Avatar src="https://example.com/avatar.jpg" alt="Photo of Jane" />,
      );
      const img = container.querySelector("img");
      expect(img).toHaveAttribute("alt", "Photo of Jane");
    });
  });

  describe("className passthrough", () => {
    it("applies custom className", () => {
      render(<Avatar name="T" className="custom-avatar" />);
      expect(screen.getByRole("img")).toHaveClass("custom-avatar");
    });

    it("preserves base classes when custom className is added", () => {
      render(<Avatar name="T" className="custom-avatar" />);
      const avatar = screen.getByRole("img");
      expect(avatar).toHaveClass("rounded-full");
      expect(avatar).toHaveClass("custom-avatar");
    });
  });
});
