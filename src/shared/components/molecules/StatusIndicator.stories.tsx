import type { Meta, StoryObj } from "@storybook/react";
import { StatusIndicator } from "./StatusIndicator";

const meta: Meta<typeof StatusIndicator> = {
  title: "molecules/StatusIndicator",
  component: StatusIndicator,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: ["online", "offline", "busy", "error"] },
  },
};
export default meta;
type Story = StoryObj<typeof StatusIndicator>;

export const Online: Story = { args: { status: "online" } };
export const Offline: Story = { args: { status: "offline" } };
export const Busy: Story = { args: { status: "busy" } };
export const ErrorState: Story = { args: { status: "error" } };

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <StatusIndicator status="online" />
      <StatusIndicator status="offline" />
      <StatusIndicator status="busy" />
      <StatusIndicator status="error" />
    </div>
  ),
};
