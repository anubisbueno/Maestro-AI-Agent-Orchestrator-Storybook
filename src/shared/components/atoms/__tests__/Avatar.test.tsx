import { Avatar } from "@/shared/components/atoms/Avatar";
import { render, screen } from "@testing-library/react";

describe("Avatar", () => {
  it("with src renders img tag with correct src", () => {
    const { container } = render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />);
    const imgElement = container.querySelector("img");
    expect(imgElement).toBeDefined();
    expect(imgElement?.src).toBe("https://example.com/avatar.jpg");
  });

  it('without src, with name "John Doe" shows "JD" text', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeDefined();
  });

  it('without src or name shows "?" text', () => {
    render(<Avatar />);
    expect(screen.getByText("?")).toBeDefined();
  });

  it("sm size has size-8 class", () => {
    render(<Avatar size="sm" name="Test" />);
    const avatar = screen.getByRole("img");
    expect(avatar.className).toContain("size-8");
  });

  it("md size (default) has size-10 class", () => {
    render(<Avatar name="Test" />);
    const avatar = screen.getByRole("img");
    expect(avatar.className).toContain("size-10");
  });

  it("lg size has size-12 class", () => {
    render(<Avatar size="lg" name="Test" />);
    const avatar = screen.getByRole("img");
    expect(avatar.className).toContain("size-12");
  });

  it('has role="img"', () => {
    render(<Avatar name="Test" />);
    expect(screen.getByRole("img")).toBeDefined();
  });
});
