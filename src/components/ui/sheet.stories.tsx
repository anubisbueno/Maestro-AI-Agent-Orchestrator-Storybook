import { Button } from "../../shared/components/atoms/Button";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const meta: Meta = {
  title: "ui/Sheet",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Abrir painel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detalhes da maquina</SheetTitle>
          <SheetDescription>Informacoes detalhadas sobre a maquina selecionada.</SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Conteudo do painel lateral.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};
