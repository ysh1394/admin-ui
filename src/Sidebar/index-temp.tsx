import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { Footer, Header } from '..';
import { mainListItems, secondaryListItems } from './listItems';

// const Copyright = (props: any) => {
//   return (
//     <Typography
//       align="center"
//       color="text.secondary"
//       variant="body2"
//       {...props}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// };

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open, theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    position: 'relative',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    whiteSpace: 'nowrap',
    width: drawerWidth,
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <CssBaseline />
        <AppBar open={open} position="absolute">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              aria-label="open drawer"
              color="inherit"
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="inherit"
              component="h1"
              sx={{ flexGrow: 1 }}
              variant="h6"
              noWrap
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={open} variant="permanent">
          <Toolbar
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mb: 4, mt: 4 }}>
            <Grid spacing={3} container>
              {/* Chart */}
              <Grid lg={9} md={8} xs={12} item>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    p: 2,
                  }}
                >
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid lg={3} md={4} xs={12} item>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    p: 2,
                  }}
                >
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid xs={12} item>
                <Paper sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
            <Footer company="Meta" />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;

// export default function Dashboard() {
//   return <DashboardContent />;
// }
