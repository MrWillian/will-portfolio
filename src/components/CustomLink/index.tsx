import React from 'react';

import { Container } from './styles';

interface Props {
  target?: string;
  rel?: string;
  href?: string;
}

const CustomLink: React.FC<Props> = ({
  target, rel, href, children
}) => {
  return (
    <Container 
      target={target}
      rel={rel}
      href={href}>
        {children}
    </Container>
  );
}

export default CustomLink;
