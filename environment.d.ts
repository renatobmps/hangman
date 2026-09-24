export namespace NodeJS {
  export interface ProcessEnv {
    // Database
    readonly POSTGRES_HOST: string;
    readonly POSTGRES_USER: string;
    readonly POSTGRES_PASSWORD: string;
    readonly POSTGRES_DB: string;
    readonly POSTGRES_PORT: number;

    // Auth
    readonly JWT_SECRET: string;

    // Env
    readonly NODE_ENV: 'production' | 'development';
    readonly NODE_ENVIRONMENT: 'local' | 'cloud';
    readonly PUBLIC_URL: string;
  }
}
