import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'projects',
  exposes: {
    './Routes': 'apps/projects/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
