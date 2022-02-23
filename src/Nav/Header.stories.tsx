/* eslint-disable no-console */
import {
  AllInclusive as AllinclusiveIcon,
  Apple as AppleIcon,
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Nav from '.';

export default {
  component: Nav,
  title: 'Nav',
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

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
    text: 'Apple',
  },
  {
    icon: <GoogleIcon />,
    text: 'Google',
  },
];

export const PermanentNav = Template.bind({});
PermanentNav.args = {
  items,
  onClickItem: () => {
    console.log('Click');
  },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const TemporaryNav = Template.bind({});
TemporaryNav.args = {
  items,
  onClickItem: () => {
    console.log('Click');
  },
  open: true,
  title: 'ADMIN',
  width: 240,
};

export const ResponsiveNav = Template.bind({});
ResponsiveNav.args = {
  items,
  onClickItem: () => {
    console.log('Click');
  },
  sx: { display: { md: 'block', xs: 'none' } },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};
