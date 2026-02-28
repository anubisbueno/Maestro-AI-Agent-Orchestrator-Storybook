import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta = {
  title: "ui/Tabs",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Visao Geral</TabsTrigger>
        <TabsTrigger value="agents">Agentes</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4">
        Conteudo da visao geral da maquina.
      </TabsContent>
      <TabsContent value="agents" className="p-4">
        Lista de agentes ativos nesta maquina.
      </TabsContent>
      <TabsContent value="logs" className="p-4">
        Logs recentes de execucao.
      </TabsContent>
    </Tabs>
  ),
};
