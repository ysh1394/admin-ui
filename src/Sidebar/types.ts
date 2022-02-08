import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import { AppBarProps as DrawerProps } from '@mui/material/Drawer';

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface IDrawerHeader {
  open?: boolean;
}
