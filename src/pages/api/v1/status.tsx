import { NextApiRequest, NextApiResponse } from "next";

export default function handle(_: NextApiRequest, res: NextApiResponse) {
  return res.json({
    status: "ok",
  });
}
