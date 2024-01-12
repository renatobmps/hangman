import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        res.json({
          status: "ok",
          time_stamp: Date.now(),
          random: Math.floor(Math.random() * 1024),
        })
      );
    }, 2000);
  });
}
