import { Box, Container } from "@mui/material";
import { FC, Fragment, ReactNode } from "react";
interface Prop {
  children: ReactNode;
}
const MainComponent: FC<Prop> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default MainComponent;