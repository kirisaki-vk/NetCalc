const { app, BrowserWindow } = require("electron");
const path = require("path");
function createWindow(){
    let win = new BrowserWindow({
        width: 500,
        height: 500,
    });

    win.loadFile(path.join(__dirname, "res/index.html"));
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});