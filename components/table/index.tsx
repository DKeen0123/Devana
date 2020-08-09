import React from 'react';
import { CoinProps, SanitizedCoinProps } from './types';
import Styles from './style';
import CurrencyCell from './currency-cell';
import { PageSpinner } from 'components/spinner/index';
import Link from 'next/link';

const apiUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d';

const sanitizeCoins = (coins: CoinProps[]) => {
  const sanitizedCoins = coins.map((coin) => {
    const currentPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(coin.current_price);

    const change = Number(
      coin.price_change_percentage_7d_in_currency / 100
    ).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2,
    });

    let changeColor = 'white';

    if (coin.price_change_percentage_7d_in_currency < 0) {
      changeColor = '#FF3636';
    } else if (coin.price_change_percentage_7d_in_currency > 0) {
      changeColor = '#13D0A7';
    }
    return {
      name: coin.name,
      symbol: coin.symbol,
      icon: coin.image,
      currentPrice,
      change,
      changeColor,
      id: coin.id,
    };
  });

  return sanitizedCoins;
};

const Table = () => {
  const [coins, setCoins] = React.useState<[] | SanitizedCoinProps[]>([]);

  const getData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  };

  React.useEffect(() => {
    const doStuff = async () => {
      const coins: CoinProps[] = await getData();
      const sanitizedCoins = sanitizeCoins(coins);
      // @ts-ignore
      setCoins(sanitizedCoins);
    };

    doStuff();
  }, []);

  if (coins.length === 0) {
    return <PageSpinner />;
  }

  return (
    <Styles.TableWrapper>
      <Styles.Table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Current Price</th>
            <th>Change (7d)</th>
          </tr>
        </thead>
        <tbody>
          {
            // @ts-ignore
            coins.map((coin) => {
              return (
                <Link href={`/currencies/${coin.id}`}>
                  <Styles.TableRow>
                    <td>
                      <CurrencyCell
                        name={coin.name}
                        symbol={coin.symbol}
                        icon={coin.icon}
                      />
                    </td>
                    <td>{coin.currentPrice}</td>
                    <Styles.PercentageTd color={coin.changeColor}>
                      {coin.change}
                    </Styles.PercentageTd>
                  </Styles.TableRow>
                </Link>
              );
            })
          }
        </tbody>
      </Styles.Table>
    </Styles.TableWrapper>
  );
};

export default Table;
