/* eslint-disable @typescript-eslint/consistent-type-definitions */

interface ImportMetaEnv {
  readonly PUBLIC_APP_TITLE: string;
  readonly PUBLIC_CONTACT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
