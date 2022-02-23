/* eslint-disable no-console */
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '.';

export default {
  component: Header,
  title: 'Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Meta',
};

export const WithPages = Template.bind({});
WithPages.args = {
  pages: [
    {
      path: '#facebook',
      text: 'Facebook',
    },
    {
      path: '#instagram',
      text: 'Instagram',
    },
  ],
  title: 'Meta',
};

export const WithOpenEvent = Template.bind({});
WithOpenEvent.args = {
  onOpen: () => {
    console.log('Click!');
  },
  pages: [
    {
      path: '#facebook',
      text: 'Facebook',
    },
    {
      path: '#instagram',
      text: 'Instagram',
    },
  ],
  title: 'Meta',
};
