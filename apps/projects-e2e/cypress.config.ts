import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run projects:serve:development',
        production: 'nx run projects:serve:production',
      },
      ciWebServerCommand: 'nx run projects:serve-static',
    }),
    baseUrl: 'http://localhost:4205',
  },
});
