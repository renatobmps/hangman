declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly API_URL?: string;
      readonly DATABASE_URL?: string;
      readonly HASH_SALT?: string;
      readonly NODE_ENV: 'development' | 'production';
    }
  }
}

export { }
