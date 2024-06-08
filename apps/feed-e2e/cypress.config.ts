import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run feed:serve:development',
        production: 'nx run feed:serve:production',
      },
      ciWebServerCommand: 'nx run feed:serve-static',
    }),
    baseUrl: 'http://localhost:4203',
  },
});
