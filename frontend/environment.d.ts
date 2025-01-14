declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly API_HOST?: string;
      readonly NODE_ENV: 'development' | 'production';
    }
  }
}

export { }
