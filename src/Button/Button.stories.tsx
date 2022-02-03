import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'DEFAULT' };
