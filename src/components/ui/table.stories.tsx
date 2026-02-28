import { Badge } from "../../shared/components/atoms/Badge";
import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

const meta: Meta = {
  title: "ui/Table",
  tags: ["autodocs"],
};
export default meta;

const machines = [
  { id: "m-001", name: "prod-server-01", status: "online" as const, cpu: "45%" },
  { id: "m-002", name: "prod-server-02", status: "busy" as const, cpu: "87%" },
  { id: "m-003", name: "staging-01", status: "offline" as const, cpu: "0%" },
  { id: "m-004", name: "dev-local", status: "error" as const, cpu: "—" },
];

export const Default: StoryObj = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>CPU</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {machines.map((m) => (
          <TableRow key={m.id}>
            <TableCell className="font-mono text-xs">{m.id}</TableCell>
            <TableCell>{m.name}</TableCell>
            <TableCell>
              <Badge variant={m.status}>{m.status}</Badge>
            </TableCell>
            <TableCell>{m.cpu}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
