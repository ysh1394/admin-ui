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
  pages: { href: string; value: string }[];
  className?: string;
  color?: AppBarProps['color'];
  lists?: { href: string; value: string }[];
  logo?: ReactNode;
}

const Header = ({ className, color, logo, pages = [] }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  const onOpen = useCallback((e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  return (
    <AppBar className={className} color={color} position="static">
      <Toolbar variant="dense">
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
        <Box
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
        </Box>

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
  );
};

export default Header;
