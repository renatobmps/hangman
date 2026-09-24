export default class ApiError extends Error {
  constructor(
    message = 'Unexpected error',
    public status = 500,
  ) {
    super(message);
    this.name = 'apiError';
  }
}
