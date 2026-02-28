import type { Meta, StoryObj } from "@storybook/react";
import { H1, H2, H3, Small, Text } from "./Typography";

const meta: Meta = {
  title: "atoms/Typography",
  tags: ["autodocs"],
};
export default meta;

export const Heading1: StoryObj = {
  render: () => <H1>Heading 1 — Bree Serif</H1>,
};

export const Heading2: StoryObj = {
  render: () => <H2>Heading 2 — Bree Serif</H2>,
};

export const Heading3: StoryObj = {
  render: () => <H3>Heading 3 — Bree Serif</H3>,
};

export const BodyText: StoryObj = {
  render: () => <Text>Body text using Inter/Geist font family for comfortable reading.</Text>,
};

export const SmallText: StoryObj = {
  render: () => <Small>Small text for captions and secondary information</Small>,
};
