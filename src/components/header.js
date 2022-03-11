import React from 'react';
import { colors, IconStar, widths } from '../styles';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import logo from '../assets/github.svg';


const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
              <Title>
                <h3>Github</h3>
                <div>discover trending repositories</div>
              </Title>
            </HomeButton>
          </HomeLink>
          <HomeLink to="/stars">
            <HomeButton>
              <LogoContainer>
                <IconStar style={{  height: 60,
  width: 60,
  marginRight: 8, color:"#f1c40f"}} />
           
              </LogoContainer>
              <Title>
                <h3>Rate</h3>
                <div>discover your rated repositories</div>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `solid 1px ${colors.black.light}`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({

  display: 'flex',
  flex: 1,
  justifyContent:"space-between"
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  color: colors.black,
  alignItems: 'center',
  ':hover': {
    color: colors.black.dark,
  },
});

const LogoContainer = styled.div({ display: 'flex', alignSelf: 'center' });

const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8,
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
  },
});
