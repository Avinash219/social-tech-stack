import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'messaging',
  exposes: {
    './Routes': 'apps/messaging/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
