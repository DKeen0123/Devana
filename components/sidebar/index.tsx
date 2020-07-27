import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Styles from './style';
import IconPieChart from 'components/ui/atoms/icon/IconPieChart';
import IconAvatar from 'components/ui/atoms/icon/IconAvatar';
import IconLogo from 'components/ui/atoms/icon/IconLogo';

const Sidebar = () => {
  const [currentPath, setCurrentPath] = React.useState('/');

  React.useEffect(() => {
    setCurrentPath(Router.pathname);
  }, []);

  Router.events.on('routeChangeComplete', () => {
    setCurrentPath(Router.pathname);
  });

  const getPathData = (target: HTMLAnchorElement) =>
    target.getAttribute('data-path');

  const handleHover = (target: HTMLAnchorElement) => {
    const path = getPathData(target);
  };

  return (
    <Styles.Bar>
      <Styles.Nav>
        <Link href="/">
          <Styles.Logo>
            <IconLogo />
          </Styles.Logo>
        </Link>
        <Link href="/portfolio">
          <Styles.NavItem
            selected={currentPath === '/portfolio'}
            opacity={currentPath === '/portfolio' ? 1 : 0.4}
          >
            <IconPieChart
              color={currentPath === '/portfolio' ? '#7676FF' : 'white'}
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
              color={currentPath === '/account' ? '#7676FF' : 'white'}
              size="md"
            />
          </Styles.NavItem>
        </Link>
      </Styles.Nav>
    </Styles.Bar>
  );
};

export default Sidebar;
