import React from 'react';
import { CoinProps, SanitizedCoinProps } from './types';
import Styles from './style';
import CurrencyCell from './currency-cell';

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
    return {
      name: coin.name,
      symbol: coin.symbol,
      icon: coin.image,
      currentPrice,
      change,
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
      setCoins(sanitizedCoins);
    };

    doStuff();
  }, []);

  return (
    <Styles.Table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Current Price</th>
          <th>Change (7d)</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => {
          return (
            <Styles.TableRow>
              <td>
                <CurrencyCell
                  name={coin.name}
                  symbol={coin.symbol}
                  icon={coin.icon}
                />
              </td>
              <td>{coin.currentPrice}</td>
              <td>{coin.change}</td>
            </Styles.TableRow>
          );
        })}
      </tbody>
    </Styles.Table>
  );
};

export default Table;
