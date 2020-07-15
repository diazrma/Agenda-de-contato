const { app, BrowserWindow, Menu } = require('electron');


function createWindow() {

    // Cria uma janela de navegação.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Agenda de Contato',
        icon: 'assets/agenda.ico',
        webPreferences: {
            nodeIntegration: true
        }
    })


    win.loadFile('index.html')



    var menu = Menu.buildFromTemplate([
        {
            label: 'Arquivo',
            submenu: [
                { label: 'Novo' },
                { label: 'Editar' },
                { type: 'separator' },
                { label: 'Sair', click() { app.quit(); } }
            ]
        }, {
            label: 'Ferramentas',
            submenu: [
                { label: 'Importar' },
                { label: 'Exportar' }

            ]

        }, {
            label: 'Sobre', click() {

                win.loadFile('sobre.html')
            }
        }
    ])
    Menu.setApplicationMenu(menu);



}

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
