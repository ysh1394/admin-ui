import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import type { ListItemButtonBaseProps as MuiListItemButtonBaseProps } from '@mui/material';
import {
  Collapse,
  List,
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { MouseEventHandler, ReactNode } from 'react';
import { useCallback, useState } from 'react';

// #region types
interface ListItemButtonBaseProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  text: ReactNode;
  icon?: ReactNode;
  sx?: MuiListItemButtonBaseProps['sx'];
}

interface ListItemButtonProps extends ListItemButtonBaseProps {
  open?: boolean;
}

export interface ListItemProps extends ListItemButtonBaseProps {
  subItems?: { icon: ReactNode; text: ReactNode }[];
}
// #endregion

// #region ListItemButton
const CollapseIcon = ({ open }: { open: boolean }) => {
  return open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
};

const ListItemButton = ({
  icon,
  onClick,
  open,
  sx,
  text,
}: ListItemButtonProps) => {
  return (
    <MuiListItemButton sx={sx} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
      {typeof open === 'boolean' && <CollapseIcon open={open} />}
    </MuiListItemButton>
  );
};
// #endregion

const SX = { pl: 4 };

const ListItem = ({ icon, onClick, subItems, sx, text }: ListItemProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      if (subItems) {
        setOpen((state) => !state);
        return;
      }

      onClick(e);
    },
    [subItems, onClick]
  );

  return (
    <>
      <ListItemButton
        icon={icon}
        open={subItems ? open : undefined}
        sx={sx}
        text={text}
        onClick={handleClick}
      />
      {subItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems.map(({ icon: subIcon, text: subText }, index) => (
              <ListItemButton
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                icon={subIcon}
                sx={SX}
                text={subText}
                onClick={onClick}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ListItem;
