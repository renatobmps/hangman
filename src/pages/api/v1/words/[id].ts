import type { NextApiRequest, NextApiResponse } from 'next';
import word from "../../../../../api/controllers/Words";
import admLoginMiddleware from '../../../../../api/middlewares/admLoginMiddleware';
import ApiError from '../../@types/ApiError';

type Method = 'GET' | 'PUT' | 'DELETE';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    const methods: Record<Method, (req: NextApiRequest, res: NextApiResponse) => Promise<void>> = {
        GET: () => admLoginMiddleware(req, res, word.getWordById),
        PUT: () => admLoginMiddleware(req, res, word.updateWord),
        DELETE: () => admLoginMiddleware(req, res, word.deleteWord)
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