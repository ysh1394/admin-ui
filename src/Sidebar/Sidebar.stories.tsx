import { ComponentMeta, ComponentStory } from '@storybook/react';

import Sidebar from './index';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Sidebar,
  title: 'Layout/Sidebar',
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
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
