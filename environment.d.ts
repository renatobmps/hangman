namespace NodeJS {
  interface ProcessEnv {
    readonly POSTGRES_PASSWORD: string;
    readonly POSTGRES_USER?: string;
    readonly POSTGRES_DB?: string;
    readonly POSTGRES_INITDB_ARGS?: string
    readonly POSTGRES_INITDB_WALDIR?: string;
    readonly POSTGRES_HOST_AUTH_METHOD?: string;
    readonly PGDATA?: string;
    readonly API_PORT?: number;
  }
}