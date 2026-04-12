namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;
    readonly JWT_SECRET: string;
    readonly POSTGRES_DIALECT: string;
    readonly POSTGRES_DB: string;
    readonly POSTGRES_HOST: string;
    readonly POSTGRES_PORT: number;
    readonly POSTGRES_USER: string;
    readonly POSTGRES_PASSWORD: string;
  }
}
