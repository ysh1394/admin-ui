import {
  CallMade as CallMadeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import type { AppBarProps } from '@mui/material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import type { MouseEvent, ReactNode } from 'react';
import { useCallback, useState } from 'react';

export interface IProps {
  pages: {
    href: string;
    value: string;
  }[];
  className?: string;
  color?: AppBarProps['color'];
  lists?: {
    href: string;
    value: string;
  }[];
  logo?: ReactNode;
}

const Header = ({ className, color, logo, pages = [] }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onOpen = useCallback((e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <AppBar className={className} color={color} position="static">
      <Toolbar variant="dense">
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
        <Box
          sx={{
            display: {
              md: 'none',
              xs: 'flex',
            },
            flexGrow: 1,
          }}
        >
          <IconButton color="inherit" id="left" size="large" onClick={onOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              horizontal: 'left',
              vertical: 'bottom',
            }}
            id="menu-appbar"
            open={anchorEl?.id === 'left'}
            sx={{
              display: {
                md: 'none',
                xs: 'block',
              },
            }}
            keepMounted
            onClose={onClose}
          >
            atrwet
          </Menu>
        </Box>
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
        <Box
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
            flexGrow: 1,
          }}
        >
          {pages.map(({ href, value }) => {
            return (
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
            );
          })}
        </Box>
        <Box
          sx={{
            display: {
              md: 'none',
              xs: 'flex',
            },
            flexGrow: 0,
          }}
        >
          <IconButton color="inherit" id="right" size="large" onClick={onOpen}>
            <CallMadeIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              horizontal: 'left',
              vertical: 'bottom',
            }}
            id="1"
            open={anchorEl?.id === 'right'}
            sx={{
              display: {
                md: 'none',
                xs: 'block',
              },
            }}
            keepMounted
            onClose={onClose}
          >
            {pages.map(({ href, value }) => {
              return (
                <MenuItem key={value} onClick={onClose}>
                  <Link color="inherit" href={href} underline="none">
                    <Typography textAlign="center">{value}</Typography>
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
