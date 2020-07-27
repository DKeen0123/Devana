import styled from 'styled-components';
import { NavItemProps } from './types';
import { pxToRem } from 'helpers/styling/index';

const Bar = styled.div`
  position: sticky;
  height: 100%;
  background-color: #252d47;
  z-index: 1;
  top: 0;
  left: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.a`
  margin: ${pxToRem(18)} ${pxToRem(40)} 0;
  text-decoration: none;
  cursor: pointer;
`;

const NavItem = styled(Logo)<NavItemProps>`
  margin: ${pxToRem(50)} 0 0 0;
  padding: 0px ${pxToRem(40)};
  position: relative;
  &:after {
    height: ${(props) => (props.selected ? pxToRem(60) : pxToRem(0))};
    background-color: #7676ff;
    content: '';
    opacity: ${(props) => props.opacity};
    width: ${pxToRem(5)};
    position: absolute;
    transition: height 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 0%;
    top: ${pxToRem(-12)};
  }

  &:hover,
  &:focus {
    outline: none;
    &:after {
      height: 60px;
    }
  }
`;

export default {
  Bar,
  Logo,
  Nav,
  NavItem,
};
