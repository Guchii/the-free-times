import { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "../../scraper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  try {
    const result = await fetcher(query.category as string);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
