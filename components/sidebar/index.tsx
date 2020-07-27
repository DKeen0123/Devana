import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Styles from './style';
import IconPieChart from 'components/ui/atoms/icon/IconPieChart';
import IconLogo from 'components/ui/atoms/icon/IconLogo';

const Sidebar = () => {
  const [currentPath, setCurrentPath] = React.useState('/');

  React.useEffect(() => {
    setCurrentPath(Router.pathname);
  }, [Router.pathname]);

  return (
    <Styles.Bar>
      <Styles.Nav>
        <Link href="/">
          <Styles.Logo>
            <IconLogo />
          </Styles.Logo>
        </Link>
        <Link href="/portfolio">
          <Styles.NavItem selected={currentPath === '/portfolio'}>
            <IconPieChart
              color={currentPath === '/portfolio' ? '#7676FF' : 'white'}
              size="md"
            />
          </Styles.NavItem>
        </Link>
      </Styles.Nav>
    </Styles.Bar>
  );
};

export default Sidebar;
