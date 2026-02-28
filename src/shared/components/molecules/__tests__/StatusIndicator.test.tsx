import { StatusIndicator } from "@/shared/components/molecules/StatusIndicator";
import { render, screen } from "@testing-library/react";

describe("StatusIndicator", () => {
  it("online status shows Online text", () => {
    render(<StatusIndicator status="online" />);
    expect(screen.getByText("Online")).toBeDefined();
  });

  it("offline status shows Offline text", () => {
    render(<StatusIndicator status="offline" />);
    expect(screen.getByText("Offline")).toBeDefined();
  });

  it("busy status shows Busy text", () => {
    render(<StatusIndicator status="busy" />);
    expect(screen.getByText("Busy")).toBeDefined();
  });

  it("error status shows Error text", () => {
    render(<StatusIndicator status="error" />);
    expect(screen.getByText("Error")).toBeDefined();
  });
});
