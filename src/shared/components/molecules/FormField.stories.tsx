import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";

const meta: Meta<typeof FormField> = {
  title: "molecules/FormField",
  component: FormField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: { label: "Nome da maquina", placeholder: "ex: prod-server-01" },
};

export const WithHint: Story = {
  args: {
    label: "Hostname",
    placeholder: "192.168.1.100",
    hint: "IP ou hostname acessivel pela rede",
  },
};

export const WithError: Story = {
  args: { label: "Nome da maquina", value: "", error: "Campo obrigatorio" },
};

export const Disabled: Story = {
  args: { label: "ID", value: "machine-abc-123", disabled: true },
};
