import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "online", "offline", "busy", "error"] },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Default" } };
export const Online: Story = { args: { children: "Online", variant: "online" } };
export const Offline: Story = { args: { children: "Offline", variant: "offline" } };
export const Busy: Story = { args: { children: "Busy", variant: "busy" } };
export const ErrorState: Story = { args: { children: "Error", variant: "error" } };
