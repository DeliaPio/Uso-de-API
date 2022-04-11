const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
'comunicacion',
    {
        editarImagen: (datos) => ipcRenderer.send('editarImagen', datos)
        ,

        inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback)
    }
)