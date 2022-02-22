import {
  CallMade as CallMadeIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import MuiDrawer from '@mui/material/Drawer';
import type { CSSObject, Theme } from '@mui/material/styles';
import { styled, useTheme } from '@mui/material/styles';
import type { MouseEvent, ReactNode } from 'react';
import { useCallback, useState } from 'react';

// import Header from '../Header';

// const drawerWidth = 240;

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface DrawerProps extends MuiDrawerProps {
  drawerWidth: number;
  open?: boolean;
}

interface AppBarProps extends MuiAppBarProps {
  drawerWidth?: number;
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ drawerWidth, open, theme }) => ({
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<DrawerProps>(({ drawerWidth, open, theme }) => ({
  boxSizing: 'border-box',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  width: drawerWidth,
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export interface IProps {
  className?: string;
  color?: AppBarProps['color'];
  drawerWidth?: number;
  lists?: { href: string; value: string }[];
  logo?: ReactNode;
  pages?: { href: string; value: string }[];
}

const Sidebar = ({
  drawerWidth = 240,
  logo = '인어교주해적단',
  pages = [],
}: IProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  const onOpen = useCallback((e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar drawerWidth={drawerWidth} open={open} position="fixed">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* md: logo */}
          <Typography
            component="div"
            sx={{
              display: {
                md: 'flex',
                xs: 'none',
              },
              mr: 2,
            }}
            variant="h6"
            noWrap
          >
            {logo}
          </Typography>

          {/* xs: left nav */}
          {/* <Box
            sx={{
              display: {
                md: 'none',
                xs: 'flex',
              },
              flexGrow: 1,
            }}
          >
            <IconButton
              color="inherit"
              id="left-header-button"
              size="large"
              onClick={onOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
              open={anchorEl?.id === 'left-header-button'}
              sx={{
                display: {
                  md: 'none',
                  xs: 'block',
                },
              }}
              keepMounted
              onClose={onClose}
            />
          </Box> */}

          {/* xs: logo */}
          <Typography
            component="div"
            sx={{
              display: {
                md: 'none',
                xs: 'flex',
              },
              flexGrow: 1,
            }}
            variant="h6"
            noWrap
          >
            {logo}
          </Typography>

          {/* md: nav */}
          <Box
            sx={{
              display: {
                md: 'flex',
                xs: 'none',
              },
              flexGrow: 1,
            }}
          >
            {pages.map(({ href, value }) => (
              <Button
                key={value}
                href={href}
                sx={{
                  color: 'white',
                  display: 'block',
                  my: 2,
                }}
              >
                {value}
              </Button>
            ))}
          </Box>

          {/* xs: right nav */}
          <Box
            sx={{
              display: {
                md: 'none',
                xs: 'flex',
              },
              flexGrow: 0,
            }}
          >
            <IconButton
              color="inherit"
              id="right-header-button"
              size="large"
              onClick={onOpen}
            >
              <CallMadeIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
              open={anchorEl?.id === 'right-header-button'}
              sx={{
                display: {
                  md: 'none',
                  xs: 'block',
                },
              }}
              keepMounted
              onClose={onClose}
            >
              {pages.map(({ href, value }) => (
                <MenuItem key={value} onClick={onClose}>
                  <Link color="inherit" href={href} underline="none">
                    <Typography textAlign="center">{value}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer drawerWidth={drawerWidth} open={open} variant="permanent">
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
