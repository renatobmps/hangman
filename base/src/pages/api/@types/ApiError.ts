export default class ApiError extends Error {
    constructor(message: string = 'Unexpected error', public status: number = 500) {
        super(message);
        this.name = 'apiError';
    }
}