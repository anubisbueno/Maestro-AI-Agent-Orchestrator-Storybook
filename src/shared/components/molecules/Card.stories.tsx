import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "molecules/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Body>Conteudo simples do card</Card.Body>
    </Card>
  ),
};

export const WithShadow: Story = {
  render: () => (
    <Card shadow>
      <Card.Body>Card com sombra</Card.Body>
    </Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <Card shadow>
      <Card.Header>
        <h3 className="font-medium text-sm">Machine #1</h3>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-brand-black/70">Status: Online</p>
        <p className="text-sm text-brand-black/70">CPU: 45%</p>
      </Card.Body>
      <Card.Footer>
        <button type="button" className="text-sm text-brand-red hover:underline">
          Detalhes
        </button>
      </Card.Footer>
    </Card>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <h3 className="font-medium text-sm">Titulo do card</h3>
      </Card.Header>
      <Card.Body>Corpo do card</Card.Body>
    </Card>
  ),
};
