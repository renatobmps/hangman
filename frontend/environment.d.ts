declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly API_HOST?: string;
    }
  }
}
