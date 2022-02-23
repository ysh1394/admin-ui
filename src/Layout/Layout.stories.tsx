/* eslint-disable no-console */
import {
  AllInclusive as AllinclusiveIcon,
  AlternateEmail as AlternateEmailIcon,
  Apple as AppleIcon,
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Layout from '.';

export default {
  component: Layout,
  parameters: { layout: 'fullscreen' },
  title: 'Layout',
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

const items = [
  {
    icon: <AllinclusiveIcon />,
    subItems: [
      { icon: <FacebookIcon />, text: 'Facebook' },
      { icon: <InstagramIcon />, text: 'Instagram' },
    ],
    text: 'Meta',
  },
  {
    icon: <AppleIcon />,
    path: '/',
    text: 'Apple',
  },
  {
    icon: <GoogleIcon />,
    path: '/',
    text: 'Google',
  },
];

const pages = [
  { path: '#', text: 'Facebook' },
  { path: '#', text: 'Instagram' },
];

export const Default = Template.bind({});
Default.args = {
  businessName: 'Meta',
  children: 'MAIN',
  headerPages: pages,
  headerTitle: 'Meta',
  navItems: items,
  navTitle: <AlternateEmailIcon />,
  onClickItem: () => {
    console.log('Click!');
  },
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  businessName: 'Meta',
  children: 'MAIN',
  headerPages: pages,
  headerTitle: 'Meta',
  navItems: items,
  navTitle: <AlternateEmailIcon />,
  navWidth: 320,
  onClickItem: () => {
    console.log('Click!');
  },
};
