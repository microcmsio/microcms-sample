import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_ID || '',
  apiKey: process.env.API_KEY || '',
});
