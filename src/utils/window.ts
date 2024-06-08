import { Window } from '@tauri-apps/api/window';

const appWindow = new Window('main');

document
  .getElementById('titlebar-minimize')
  ?.addEventListener('click', () => appWindow.minimize());

document
  .getElementById('titlebar-close')
  ?.addEventListener('click', () => appWindow.close());
