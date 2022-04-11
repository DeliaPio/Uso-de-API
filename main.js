const {app, BrowserWindow} = require('electron')
const path = require('path')
const { ipcMain } = require('electron')

var ventana
function createWindow(){
    ventana = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana.loadFile('index.html')
}

ipcMain.on('editarImagen', (event, args)=>{
    //aquí podemos obtener el evento y los argumentos
    console.log(args)
    ventana.loadFile('segundo.html')
    
})
let ventana2
function createWindow2(){
    ventana2 = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana2.loadFile('index.html')
}

app.whenReady().then(createWindow)