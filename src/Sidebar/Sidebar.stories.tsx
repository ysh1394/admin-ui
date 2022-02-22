import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Sidebar from './index';

export default {
  component: Sidebar,
  title: 'Sidebar',
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});

export const WithLogo = Template.bind({});
WithLogo.args = {
  logo: 'Meta',
};

export const WithPages = Template.bind({});
WithPages.args = {
  logo: 'Meta',
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
  logo: 'Meta',
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
