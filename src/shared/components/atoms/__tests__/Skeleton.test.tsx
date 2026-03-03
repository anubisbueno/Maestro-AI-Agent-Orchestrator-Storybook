import { render, screen } from "@testing-library/react";
import { Skeleton } from "../Skeleton";

describe("Skeleton", () => {
  describe("accessibility", () => {
    it("has role status for screen readers", () => {
      render(<Skeleton />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("has aria-label 'Carregando...' in Portuguese", () => {
      render(<Skeleton />);
      expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Carregando...");
    });

    it("is announced as loading content by assistive technology", () => {
      render(<Skeleton />);
      expect(screen.getByLabelText("Carregando...")).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("has animate-pulse class for loading animation", () => {
      render(<Skeleton />);
      expect(screen.getByRole("status")).toHaveClass("animate-pulse");
    });

    it("has data-slot skeleton from shadcn base", () => {
      render(<Skeleton />);
      expect(screen.getByRole("status")).toHaveAttribute("data-slot", "skeleton");
    });
  });

  describe("className passthrough", () => {
    it("applies custom className", () => {
      render(<Skeleton className="h-4 w-full" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("h-4");
      expect(skeleton).toHaveClass("w-full");
    });

    it("preserves base classes when custom className is added", () => {
      render(<Skeleton className="h-4" />);
      expect(screen.getByRole("status")).toHaveClass("animate-pulse");
    });
  });

  describe("HTML attributes passthrough", () => {
    it("passes through additional props", () => {
      render(<Skeleton data-testid="loading-skeleton" />);
      expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
    });
  });
});
