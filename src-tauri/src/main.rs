// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![random_paper])
        .plugin(tauri_plugin_store::Builder::default().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn random_paper() -> () {
    // Sets the wallpaper for the current desktop from a URL.
    wallpaper::set_from_url("https://source.unsplash.com/random/").unwrap();
}
