declare namespace NodeJS {
  interface ProcessEnv {
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASS: string;
    WEBSOCKET_PATH:string,
    APP_HOST:string,
    APP_PORT:string,
  }
}
