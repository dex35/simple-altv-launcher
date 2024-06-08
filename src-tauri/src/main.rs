// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{State, Wry};
use tauri_plugin_shell::Shell;

#[tauri::command]
fn connect(shell: State<Shell<Wry>>, address: String) -> Result<String, String> {
    let url = format!("altv://connect/{}", address);
    shell.open(&url, None).map_err(|e| e.to_string())?;
    Ok(format!("Trying to connect to {}", url))
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_single_instance::init(|_app, _args, _cwd| {}))
        .invoke_handler(tauri::generate_handler![connect])
        .run(tauri::generate_context!())
        .expect("error while running application");
}
