namespace NodeJS {
  interface ProcessEnv {
    readonly JWT_SECRET: string;
    readonly NODE_ENV: "development" | "production";
    readonly POSTGRES_DB: string;
    readonly DB_DIALECT: string;
    readonly POSTGRES_HOST: string;
    readonly POSTGRES_PASSWORD: string;
    readonly POSTGRES_PORT: number;
    readonly POSTGRES_USER: string;
    readonly PUBLIC_URL: string;
  }
}
