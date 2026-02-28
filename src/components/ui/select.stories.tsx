import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const meta: Meta = {
  title: "ui/Select",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Selecione um status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="online">Online</SelectItem>
        <SelectItem value="offline">Offline</SelectItem>
        <SelectItem value="busy">Ocupado</SelectItem>
        <SelectItem value="error">Erro</SelectItem>
      </SelectContent>
    </Select>
  ),
};
