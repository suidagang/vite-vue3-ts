export {};
declare global {
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }
  //todo .env文件 类型定义
  interface ViteEnv {
    readonly VITE_REQUEST_BASE_URL: string;
    readonly VITE_PORT: Number;
  }
}
