const { contextBridge, ipcRenderer } = require("electron");

// Preload script to be run before the renderer process starts.
window.addEventListener("DOMContentLoaded", () => {
  // Display initial data from the backend here, set up text, etc.
});

// Expose an API to the front end
contextBridge.exposeInMainWorld("backgroundAPI", {
  doAction0: () => ipcRenderer.invoke("background-api:doAction0"),
  doAction1: () => ipcRenderer.invoke("background-api:doAction1"),
  doAction2: () => ipcRenderer.invoke("background-api:doAction2"),
});
