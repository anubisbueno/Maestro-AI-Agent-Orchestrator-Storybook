import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "atoms/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = { args: { className: "h-4 w-48" } };
export const Circle: Story = { args: { className: "h-12 w-12 rounded-full" } };
export const Card: Story = { args: { className: "h-32 w-full" } };
export const Line: Story = { args: { className: "h-3 w-full" } };
