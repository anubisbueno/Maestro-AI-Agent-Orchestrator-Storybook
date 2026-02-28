import { Skeleton } from "@/shared/components/atoms/Skeleton";
import { render, screen } from "@testing-library/react";

describe("Skeleton", () => {
  it("has role status", () => {
    render(<Skeleton />);
    expect(screen.getByRole("status")).toBeDefined();
  });

  it("has aria-label Carregando...", () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole("status");
    expect(skeleton.getAttribute("aria-label")).toBe("Carregando...");
  });

  it("has class animate-pulse", () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole("status");
    expect(skeleton.className).toContain("animate-pulse");
  });

  it("applies custom className", () => {
    render(<Skeleton className="custom-skeleton" />);
    const skeleton = screen.getByRole("status");
    expect(skeleton.className).toContain("custom-skeleton");
  });
});
