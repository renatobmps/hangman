import type { NextApiRequest, NextApiResponse } from "next";
import login from "../../../../../server/controllers/Login";
import ApiError from "../../@types/ApiError";

type Method = "GET";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  const methods: Record<
    Method,
    (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  > = {
    GET: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            res.json({
              status: "ok",
              time_stamp: Date.now(),
              random: Math.floor(Math.random() * 1024),
            })
          );
        }, 2000);
      }),
  };

  try {
    const chosen = methods[method as Method];

    if (!chosen) {
      throw new ApiError(`Method ${method} not allowed`, 405);
    }

    await methods[method as Method](req, res);
  } catch (err) {
    const error = err as ApiError;
    const cause = error.message ?? error.status ?? error ?? "Unexpected error";

    res.status(error.status).json({ status: "ko", message: cause });

    throw new ApiError(cause);
  }
}
