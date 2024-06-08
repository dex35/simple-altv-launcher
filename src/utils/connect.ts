import { invoke } from '@tauri-apps/api/core';

export async function connect(address: string) {
  return await invoke('connect', {
    address: address,
  });
}
