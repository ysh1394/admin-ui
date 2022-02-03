import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button/Button";

interface IButton extends ButtonProps {
  variant: "contained" | "text" | "outlined";
  children: React.ReactNode;
  onClick?: () => void;
}

const MuiButton = ({ variant = "contained", children, ...props }: IButton) => {
  return (
    <Button variant={variant} type='button' {...props}>
      {children}
    </Button>
  );
};

export default MuiButton;
