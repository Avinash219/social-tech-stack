import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('assets/module-federation.manifest.json')
  .then((res) => {
    return res.json();
  })
  .then((definitions) => {
    console.log('def', definitions);
    return setRemoteDefinitions(definitions);
  })
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
