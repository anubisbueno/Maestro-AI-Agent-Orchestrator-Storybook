import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    docs: { theme },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "cream",
      values: [
        { name: "cream", value: "#EEEDE9" },
        { name: "navy", value: "#131D21" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
};

export default preview;
