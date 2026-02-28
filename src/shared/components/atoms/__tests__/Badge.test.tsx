import { Badge } from "@/shared/components/atoms/Badge";
import { render, screen } from "@testing-library/react";

describe("Badge", () => {
  it("renders children text", () => {
    render(<Badge>Badge Text</Badge>);
    expect(screen.getByText("Badge Text")).toBeDefined();
  });

  it("default variant has data-variant default", () => {
    render(<Badge variant="default">Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge.getAttribute("data-variant")).toBe("default");
  });

  it("online variant has class bg-status-online/20", () => {
    render(<Badge variant="online">Online</Badge>);
    const badge = screen.getByText("Online");
    expect(badge.className).toContain("bg-status-online/20");
  });

  it("offline variant has class bg-status-offline/20", () => {
    render(<Badge variant="offline">Offline</Badge>);
    const badge = screen.getByText("Offline");
    expect(badge.className).toContain("bg-status-offline/20");
  });

  it("busy variant has class bg-status-busy/20", () => {
    render(<Badge variant="busy">Busy</Badge>);
    const badge = screen.getByText("Busy");
    expect(badge.className).toContain("bg-status-busy/20");
  });

  it("error variant has class bg-status-error/20", () => {
    render(<Badge variant="error">Error</Badge>);
    const badge = screen.getByText("Error");
    expect(badge.className).toContain("bg-status-error/20");
  });
});
