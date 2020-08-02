import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Styles from './style';
import IconPieChart from 'components/ui/atoms/icon/IconPieChart';
import IconAvatar from 'components/ui/atoms/icon/IconAvatar';
import IconLogo from 'components/ui/atoms/icon/IconLogo';
import IconCoinGraph from 'components/ui/atoms/icon/IconCoinGraph';
import colors from 'components/ui/tokens/colors';

const Sidebar = () => {
  const [currentPath, setCurrentPath] = React.useState('/');

  React.useEffect(() => {
    setCurrentPath(Router.pathname);
  }, []);

  Router.events.on('routeChangeComplete', () => {
    setCurrentPath(Router.pathname);
  });

  return (
    <Styles.Bar>
      <Styles.Nav>
        <Link href="/">
          <Styles.Logo>
            <IconLogo size="lg" />
          </Styles.Logo>
        </Link>
        <Link href="/portfolio">
          <Styles.NavItem
            selected={currentPath === '/portfolio'}
            opacity={currentPath === '/portfolio' ? 1 : 0.4}
          >
            <IconPieChart
              color={
                currentPath === '/portfolio' ? colors.brand.midlight : 'white'
              }
              size="md"
            />
          </Styles.NavItem>
        </Link>
        <Link href="/coin-list">
          <Styles.NavItem
            selected={currentPath === '/coin-list'}
            opacity={currentPath === '/coin-list' ? 1 : 0.4}
          >
            <IconCoinGraph
              color={
                currentPath === '/coin-list' ? colors.brand.midlight : 'white'
              }
              size="md"
            />
          </Styles.NavItem>
        </Link>
        <Link href="/account">
          <Styles.NavItem
            selected={currentPath === '/account'}
            opacity={currentPath === '/account' ? 1 : 0.4}
          >
            <IconAvatar
              color={
                currentPath === '/account' ? colors.brand.midlight : 'white'
              }
              size="md"
            />
          </Styles.NavItem>
        </Link>
      </Styles.Nav>
    </Styles.Bar>
  );
};

export default Sidebar;
