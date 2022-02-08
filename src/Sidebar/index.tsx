import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import { useTheme } from '@mui/material/styles';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactElement, useState } from 'react';

import { /* AppBar,  */ Drawer, DrawerHeader, textSample } from './styles';

const Sidebar: ReactElement | any = () => {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawer = (bool: boolean) => {
    setOpen(!bool);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar open={open} position="fixed">
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
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginRight: '16px',
              ...(!open && { display: 'none' }),
            }}
            onClick={handleDrawerClose}
          >
            <MenuOpenIcon />
          </IconButton>
          <Typography component="div" variant="h6" noWrap>
            메뉴바 대체 예정
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Drawer open={open} variant="permanent">
        <DrawerHeader open={open}>
          <IconButton onClick={() => handleDrawer(open)}>
            {open ? <MenuOpenIcon /> : <MenuIcon />}
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

      {/* 콘텐츠 샘플 */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>{textSample}</Typography>
        <Typography paragraph>{textSample}</Typography>
        <Typography paragraph>{textSample}</Typography>
        <Typography paragraph>{textSample}</Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
