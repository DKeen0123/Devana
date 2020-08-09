import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const url = `https://api.coingecko.com/api/v3/coins/${req.query.slug}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
  const data = await fetch(url);
  const json = await data.json();
  res.setHeader('Cache-Control', 's-maxage=600');
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
};
