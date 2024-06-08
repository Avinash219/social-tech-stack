import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'feed',
  exposes: {
    './Routes': 'apps/feed/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
