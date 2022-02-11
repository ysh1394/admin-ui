import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './index';

export default {
  component: Header,
  title: 'Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const WithPages = Template.bind({});
WithPages.args = {
  logo: 'meta',
  pages: [
    {
      href: '#facebook',
      value: 'facebook',
    },
    {
      href: '#instagram',
      value: 'instagram',
    },
  ],
};

export const WithColor = Template.bind({});
WithColor.args = {
  color: 'secondary',
  logo: 'meta',
  pages: [
    {
      href: '#facebook',
      value: 'facebook',
    },
    {
      href: '#instagram',
      value: 'instagram',
    },
  ],
};
