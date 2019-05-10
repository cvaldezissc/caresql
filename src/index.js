'use strict'

const { app, BrowserWindow } = require('electron');


//console.dir (app);

//before closing the app
app.on('before-quit', ()=> {
    console.log('Saliendo...');
});


//When the app is ready
app.on('ready', ()=> {

    //creating a window (Main properties)
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "caresql Generator",
        center: true,
        maximizable : false,
        show: false
    });

    win.once('ready-to-show', ()=>{
        win.show();
    });

    //When the window is moved
    win.on('move', () => {
        const position = win.getPosition();
        console.log(`This is the window position ${position}`);
    });

    //detecting when the console closes to quit from the app
    win.on('closed',  () => {
        win= null;
        app.quit();
    });


    win.loadURL(`file://${__dirname}//renderer/index.html`);

        
})






 


//app.quit();