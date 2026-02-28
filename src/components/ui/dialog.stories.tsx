import { Button } from "@/shared/components/atoms/Button";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta: Meta = {
  title: "ui/Dialog",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar acao</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja continuar? Esta acao nao pode ser desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Cancelar</Button>
          <Button>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
