import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "ui/Separator",
  component: Separator,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  decorators: [
    (Story) => (
      <div className="w-64">
        <p className="text-sm">Acima do separador</p>
        <Story />
        <p className="text-sm">Abaixo do separador</p>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (Story) => (
      <div className="flex h-8 items-center gap-4">
        <span className="text-sm">Item 1</span>
        <Story />
        <span className="text-sm">Item 2</span>
      </div>
    ),
  ],
};
