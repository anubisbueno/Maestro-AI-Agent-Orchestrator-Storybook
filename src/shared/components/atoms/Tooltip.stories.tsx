import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-16">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "Informacao adicional",
    children: <span className="cursor-help underline decoration-dotted">Passe o mouse aqui</span>,
  },
};

export const OnButton: Story = {
  args: {
    text: "Adicionar maquina",
    children: (
      <button type="button" className="rounded-md bg-brand-red px-4 py-2 text-white text-sm">
        +
      </button>
    ),
  },
};
