import path from 'path';
import os from "os";
import fs from 'fs';
import log from 'electron-log';
import { app, BrowserWindow, shell, ipcMain, Menu } from 'electron';
const {dialog} = require('electron')
import { mainWindow } from '../main';

export class FileManager {
    public libraries: [string?];
    constructor() {
        log.transports.file.level = 'info';
        this.libraries = []
    }

    /// *** 
    // make dir func
    /// ***
    private static makeDir = (dirname: string, where_from_home: string = "")  => {
        try {
            const mkd_path = fs.mkdirSync(path.join(os.homedir(), where_from_home, dirname), {recursive: true})
            return mkd_path
        } catch(error) {
            console.error(error);
            mainWindow?.webContents.send('error', error)
        }
    }

    //test
    openFile() {

        // const file_list = fs.readdirSync(path.join(os.homedir(), "", "Documents"))
        // console.log(file_list);
        // const documentsPath = app.getPath('music');
        // console.log(documentsPath);
        
        
        // const mkd_dir = FileManager.makeDir("yt-dealer", "document")
        // return dialog.showOpenDialogSync({
        //     defaultPath: os.homedir(),
        //     properties: ['openDirectory']
        // })
    }
    
}