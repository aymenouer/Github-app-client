import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";
import logo from '../assets/github.svg';

const Footer = ({ children }) => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: colors.pink.base,
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: "white",
  borderTop: `solid 1px ${colors.black.light}`,
});

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  svg: {
    height: 40,
  },
});
const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8,
});
