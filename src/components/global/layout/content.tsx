import { Container, ContainerProps } from "@material-ui/core";

import * as React from "react";

const Content: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <>
    <Container disableGutters maxWidth="md" {...rest}>
      {children}
    </Container>
  </>
);

export default Content;
