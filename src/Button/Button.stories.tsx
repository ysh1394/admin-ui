import { ComponentMeta, ComponentStory } from '@storybook/react';

import MuiButton from './index';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: MuiButton,
  title: 'Sample/MuiButton',
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = (args) => (
  <MuiButton {...args} />
);

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  children: 'contained',
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'text',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'outlined',
};
