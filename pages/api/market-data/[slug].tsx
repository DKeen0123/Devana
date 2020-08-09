import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  console.log('req.query: ', req.query);
  const url = `https://api.coingecko.com/api/v3/coins/${req.query.slug}/market_chart?vs_currency=usd&days=100`;
  const data = await fetch(url);
  const json = await data.json();
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
};
