import type { NextApiRequest, NextApiResponse } from 'next';
import user from "../../../../../server/controllers/User";
import loginMiddleware from '../../../../../server/middlewares/loginMiddleware';
import ApiError from '../../@types/ApiError';

type Method = 'POST' | 'GET' | 'PUT';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    const methods: Record<Method, (req: NextApiRequest, res: NextApiResponse) => Promise<void>> = {
        POST: () => user.createUser(req, res),
        GET: () => loginMiddleware(req, res, user.getAllUsers),
        PUT: () => loginMiddleware(req, res, user.updateUser),
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