import type { Meta, StoryObj } from "@storybook/react";
import { Server } from "lucide-react";
import { Button } from "../atoms/Button";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "organisms/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: Server,
    title: "Nenhuma maquina registrada",
    description: "Adicione sua primeira maquina para comecar a orquestrar agentes.",
  },
};

export const WithAction: Story = {
  render: () => (
    <EmptyState
      icon={Server}
      title="Nenhuma maquina registrada"
      description="Adicione sua primeira maquina para comecar a orquestrar agentes."
    >
      <Button size="sm">Adicionar maquina</Button>
    </EmptyState>
  ),
};

export const Minimal: Story = {
  args: {
    title: "Sem resultados",
    description: "Tente ajustar os filtros de busca.",
  },
};
