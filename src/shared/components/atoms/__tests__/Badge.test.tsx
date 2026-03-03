import { render, screen } from "@testing-library/react";
import { Badge } from "../Badge";

describe("Badge", () => {
  describe("rendering", () => {
    it("renders children text", () => {
      render(<Badge>Active</Badge>);
      expect(screen.getByText("Active")).toBeInTheDocument();
    });

    it("renders with data-slot badge from shadcn base", () => {
      render(<Badge>Active</Badge>);
      expect(screen.getByText("Active")).toHaveAttribute("data-slot", "badge");
    });
  });

  describe("shadcn variant passthrough", () => {
    it("default variant passes through to shadcn", () => {
      render(<Badge variant="default">Default</Badge>);
      expect(screen.getByText("Default")).toHaveAttribute("data-variant", "default");
    });

    it("secondary variant passes through to shadcn", () => {
      render(<Badge variant="secondary">Secondary</Badge>);
      expect(screen.getByText("Secondary")).toHaveAttribute("data-variant", "secondary");
    });

    it("destructive variant passes through to shadcn", () => {
      render(<Badge variant="destructive">Destructive</Badge>);
      expect(screen.getByText("Destructive")).toHaveAttribute("data-variant", "destructive");
    });

    it("outline variant passes through to shadcn", () => {
      render(<Badge variant="outline">Outline</Badge>);
      expect(screen.getByText("Outline")).toHaveAttribute("data-variant", "outline");
    });
  });

  describe("status variants (custom)", () => {
    it("online variant applies green status style", () => {
      render(<Badge variant="online">Online</Badge>);
      const badge = screen.getByText("Online");
      expect(badge.className).toContain("bg-status-online/20");
      expect(badge.className).toContain("text-green-800");
    });

    it("offline variant applies gray status style", () => {
      render(<Badge variant="offline">Offline</Badge>);
      const badge = screen.getByText("Offline");
      expect(badge.className).toContain("bg-status-offline/20");
      expect(badge.className).toContain("text-gray-600");
    });

    it("busy variant applies amber status style", () => {
      render(<Badge variant="busy">Busy</Badge>);
      const badge = screen.getByText("Busy");
      expect(badge.className).toContain("bg-status-busy/20");
      expect(badge.className).toContain("text-amber-800");
    });

    it("error variant applies red status style", () => {
      render(<Badge variant="error">Error</Badge>);
      const badge = screen.getByText("Error");
      expect(badge.className).toContain("bg-status-error/20");
      expect(badge.className).toContain("text-red-800");
    });

    it("status variants render with outline base variant from shadcn", () => {
      render(<Badge variant="online">Online</Badge>);
      expect(screen.getByText("Online")).toHaveAttribute("data-variant", "outline");
    });
  });

  describe("className passthrough", () => {
    it("applies custom className on shadcn variant", () => {
      render(
        <Badge variant="default" className="custom-badge">
          Custom
        </Badge>,
      );
      expect(screen.getByText("Custom")).toHaveClass("custom-badge");
    });

    it("applies custom className on status variant", () => {
      render(
        <Badge variant="online" className="custom-status">
          Online
        </Badge>,
      );
      expect(screen.getByText("Online")).toHaveClass("custom-status");
    });
  });

  describe("defaults", () => {
    it("uses default variant when none specified", () => {
      render(<Badge>No Variant</Badge>);
      expect(screen.getByText("No Variant")).toHaveAttribute("data-variant", "default");
    });
  });
});
