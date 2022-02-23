import { Box, Container, styled } from '@mui/material';
import type { ReactNode } from 'react';
import { memo, useMemo } from 'react';

export interface FooterProps {
  businessName?: string;
  children?: ReactNode;
}

const StyledContainer = styled(Container, {
  shouldForwardProp: () => true,
})({
  overflow: 'auto',
});

const Footer = ({ businessName, children }: FooterProps) => {
  const $businessName = useMemo(
    () => (businessName ? ` ${businessName}` : ''),
    [businessName]
  );

  return (
    <StyledContainer as="footer" maxWidth={false}>
      {children}
      <Box component="p" my={3}>
        © 2022{$businessName}. All rights reserved.
      </Box>
    </StyledContainer>
  );
};

export default memo(Footer);
