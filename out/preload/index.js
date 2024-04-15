"use strict";
const electron = require("electron");
if (!process.contextIsolated) {
  throw new Error("contextIsolation must be enabled in the BrowserWindow");
}
try {
  electron.contextBridge.exposeInMainWorld("context", {
    locale: navigator.language,
    getDir: (dir) => electron.ipcRenderer.invoke("getDir", dir)
  });
} catch (error) {
  console.error(error);
}
