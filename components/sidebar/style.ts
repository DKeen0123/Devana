import styled from 'styled-components';
import { NavItemProps } from './types';

const Bar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #252d47;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  margin: 18px 40px 0;
  text-decoration: none;
  cursor: pointer;
`;

const NavItem = styled(Logo)<NavItemProps>`
  margin: 50px 40px 0;
`;

export default {
  Bar,
  Logo,
  Nav,
  NavItem,
};
