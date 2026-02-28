import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle, Check, Monitor, Server, Settings } from "lucide-react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: { icon: Monitor } };
export const Small: Story = { args: { icon: Server, size: "sm" } };
export const Large: Story = { args: { icon: Settings, size: "lg" } };
export const WithLabel: Story = { args: { icon: Check, label: "Success" } };
export const ErrorIcon: Story = { args: { icon: AlertCircle, className: "text-status-error" } };
