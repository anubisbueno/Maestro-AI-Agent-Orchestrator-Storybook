import { render, screen } from "@testing-library/react";
import { StatusIndicator } from "../StatusIndicator";

describe("StatusIndicator", () => {
  describe("online status", () => {
    it("displays 'Online' label", () => {
      render(<StatusIndicator status="online" />);
      expect(screen.getByText("Online")).toBeInTheDocument();
    });

    it("applies green text color", () => {
      const { container } = render(<StatusIndicator status="online" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("text-green-800");
    });

    it("renders a colored dot indicator", () => {
      const { container } = render(<StatusIndicator status="online" />);
      const dot = container.querySelector("[aria-hidden='true']");
      expect(dot).toBeInTheDocument();
      expect(dot).toHaveClass("bg-status-online");
    });

    it("renders an icon (SVG)", () => {
      const { container } = render(<StatusIndicator status="online" />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("offline status", () => {
    it("displays 'Offline' label", () => {
      render(<StatusIndicator status="offline" />);
      expect(screen.getByText("Offline")).toBeInTheDocument();
    });

    it("applies gray text color", () => {
      const { container } = render(<StatusIndicator status="offline" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("text-gray-600");
    });

    it("dot has offline status color", () => {
      const { container } = render(<StatusIndicator status="offline" />);
      const dot = container.querySelector("[aria-hidden='true']");
      expect(dot).toHaveClass("bg-status-offline");
    });
  });

  describe("busy status", () => {
    it("displays 'Busy' label", () => {
      render(<StatusIndicator status="busy" />);
      expect(screen.getByText("Busy")).toBeInTheDocument();
    });

    it("applies amber text color", () => {
      const { container } = render(<StatusIndicator status="busy" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("text-amber-800");
    });

    it("dot has busy status color", () => {
      const { container } = render(<StatusIndicator status="busy" />);
      const dot = container.querySelector("[aria-hidden='true']");
      expect(dot).toHaveClass("bg-status-busy");
    });
  });

  describe("error status", () => {
    it("displays 'Error' label", () => {
      render(<StatusIndicator status="error" />);
      expect(screen.getByText("Error")).toBeInTheDocument();
    });

    it("applies red text color", () => {
      const { container } = render(<StatusIndicator status="error" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("text-red-800");
    });

    it("dot has error status color", () => {
      const { container } = render(<StatusIndicator status="error" />);
      const dot = container.querySelector("[aria-hidden='true']");
      expect(dot).toHaveClass("bg-status-error");
    });
  });

  describe("accessibility", () => {
    it("dot is aria-hidden (decorative)", () => {
      const { container } = render(<StatusIndicator status="online" />);
      const dot = container.querySelector(".rounded-full.size-2");
      expect(dot).toHaveAttribute("aria-hidden", "true");
    });

    it("status text is visible for screen readers", () => {
      render(<StatusIndicator status="online" />);
      expect(screen.getByText("Online")).toBeVisible();
    });
  });

  describe("className passthrough", () => {
    it("applies custom className to wrapper", () => {
      const { container } = render(<StatusIndicator status="online" className="ml-2" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("ml-2");
    });
  });
});
