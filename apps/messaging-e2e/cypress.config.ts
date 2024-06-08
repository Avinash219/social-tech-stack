import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run messaging:serve:development',
        production: 'nx run messaging:serve:production',
      },
      ciWebServerCommand: 'nx run messaging:serve-static',
    }),
    baseUrl: 'http://localhost:4204',
  },
});
