import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = { args: { name: "Rafael Bueno" } };
export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/150?u=maestro", alt: "User avatar" },
};
export const Small: Story = { args: { name: "Ana Silva", size: "sm" } };
export const Large: Story = { args: { name: "Pedro Santos", size: "lg" } };
export const Fallback: Story = { args: {} };
