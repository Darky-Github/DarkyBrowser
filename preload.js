const { contextBridge } = require('electron');

// Expose IPC methods
contextBridge.exposeInMainWorld('electronAPI', {
  // Currently no methods to expose
});
