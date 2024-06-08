# Simple alt:V Launcher (Tauri + Vanilla TS)

> [!Warning]  
> This solution is presented for demonstration purposes and shows how to implement a launcher for your project using Tauri.

Advantages of using Tauri:
- Small build size (`~2.3MB`)
- Low memory usage (App `~5MB` + WebView2 manager `~65MB`)
- Rust is used as the preferred language for its core process, ensuring higher performance when interacting with system resources
- The ability to use any framework on the frontend. In this example, vanilla TypeScript
- etc.

Demonstrated capabilities:
- Customized window
- Single instance mode
- Loading and rendering a server list
- Server connection via Direct Connect Protocol

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Build application
- Clone repository
- Install dependencies `npm i`
- Run `npm run tauri build`

Other commands in `package.json`

More info: [Tauri](https://v2.tauri.app/start/)
