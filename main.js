// Code based on <https://www.electronjs.org/docs/latest/tutorial/quick-start>
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

// Create a window and load the index.html page from the root
function openWindow() {
  const bwin = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      // Run the preload script "preload.js" before the rendering process
      // starts. This seems to be a sort of bridge between the backend node.js
      // code and the code that will run safely in the browser.
      preload: path.join(__dirname, "preload.js"),
    },
  });

  bwin.loadFile("index.html");

  console.log("IPC MAIN");
  // Set up IPC (this is for communication with the front end browser)
  ipcMain.handle("background-api:doAction0", () => {
    console.log("doAction0() called");
    console.log("(some important action should take place here)");
  });
  ipcMain.handle("background-api:doAction1", () => {
    console.log("doAction1() called");
    console.log("(some important action should take place here)");
  });
  ipcMain.handle("background-api:doAction2", () => {
    console.log("doAction2() called");
    console.log("(some important action should take place here)");
  });
}

// App event promises
app.whenReady().then(() => {
  openWindow();

  app.on("activate", function () {
    // macOS specific code
    if (BrowserWindow.getAllWindows().length === 0)
      openWindow();
  });
});
app.on("window-all-closed", function () {
  // macOS(darwin) apps stay open even when all windows are closed
  if (process.platform !== "darwin")
    app.quit();
});
