/* eslint-disable @typescript-eslint/consistent-type-definitions */

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string | undefined;
  readonly PUBLIC_BASE_URL: string | undefined;
  readonly PUBLIC_APP_TITLE: string;
  readonly PUBLIC_CONTACT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
