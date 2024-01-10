import type { NextApiRequest, NextApiResponse } from 'next';
import login from "../../../../../api/controllers/Login";
import loginMiddleware from '../../../../../api/middlewares/loginMiddleware';
import ApiError from '../../@types/ApiError';

type Method = 'POST';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    const methods: Record<Method, (req: NextApiRequest, res: NextApiResponse) => Promise<void>> = {
        POST: () => login.login(req, res),
    }

    try {
        const chosen = methods[method as Method];

        if (!chosen) {
            throw new ApiError(`Method ${method} not allowed`, 403);
        }

        await methods[method as Method](req, res);
    } catch (err) {
        const error = err as ApiError;
        const cause = error.message ?? error.status ?? error ?? 'Unexpected error';

        res.status(error.status).json({ status: 'ko', message: cause });

        throw new ApiError(cause);
    }
}