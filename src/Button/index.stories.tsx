import { ComponentStory, ComponentMeta } from "@storybook/react";

import MuiButton from "./index";

export default {
  title: "Sample/MuiButton",
  component: MuiButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = (args) => (
  <MuiButton {...args} />
);

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  children: "contained",
  variant: "contained",
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: "text",
  variant: "text",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: "outlined",
  variant: "outlined",
};
