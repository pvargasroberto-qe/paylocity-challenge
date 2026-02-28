import dotenv from 'dotenv';
dotenv.config();

const req = (k: string) => {
  const v = process.env[k];
  if (!v) throw new Error(`Missing env var: ${k}`);
  return v;
};

export const env = {
  uiBaseUrl: req('UI_BASE_URL'),
  headless: process.env.HEADLESS !== 'false',
  uiUser: process.env.UI_USERNAME ?? '',
  uiPass: process.env.UI_PASSWORD ?? ''
};