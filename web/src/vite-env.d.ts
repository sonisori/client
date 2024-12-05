/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SONISORI_AI_API_URL: string;
  readonly VITE_SONISORI_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
