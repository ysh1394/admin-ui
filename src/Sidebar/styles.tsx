import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme } from '@mui/material/styles';

import { AppBarProps, IDrawerHeader } from './types';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.enteringScreen,
    easing: theme.transitions.easing.sharp,
  }),
  width: drawerWidth,
});

const closedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.leavingScreen,
    easing: theme.transitions.easing.sharp,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

export const DrawerHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})<IDrawerHeader>(({ open, theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: open ? 'flex-end' : 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ open, theme }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    duration: theme.transitions.duration.leavingScreen,
    easing: theme.transitions.easing.sharp,
  }),
  zIndex: theme.zIndex.drawer + 1,
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open, theme }) => ({
  boxSizing: 'border-box',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  width: drawerWidth,
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const textSample: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
dolor purus non enim praesent elementum facilisis leo vel. Risus at
ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
quisque non tellus. Convallis convallis tellus id interdum velit
laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
vivamus at augue. At augue eget arcu dictum varius duis at consectetur
lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
faucibus et molestie ac.`;
