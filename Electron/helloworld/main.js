const electron = require('electron'); // 控制應用程式生命週期的模組。
const {
    app, BrowserWindow, 
    Tray, Menu, nativeImage, 
    dialog
} = electron;
//const fs = require('fs');
//console.log(fs.readFileSync('D:\\sdk\\Electron\\hello\\pdfviewer\\compressed.tracemonkey-pldi-09.pdf'));
// 共用資料
global.sharedObject = {
    someProperty: 'default value',
    testCallback: function(func){
        func(100);
    },
    readFile(fn){
        console.log(fs.readFileSync(fn));
    },
    balloon(){
        if(tray){
            tray.displayBalloon({
                icon: img,
                title: 'tttttt',
                content: 'uuuuuu'
            });;
        }
    },
    openFileDialog(){
        return dialog.showOpenDialog({
            properties: [
                'openFile', 
                'openDirectory', 
                'multiSelections'
            ]
        });
  },
  openSaveDialog(){
        return dialog.showSaveDialog({
            title: 'Save Dialog',
            defaultPath: 'd:\\'
        });
  }
};

// 保持一個對於 window 物件的全域的引用，不然，當 JavaScript 被GC，
// window 會被自動地關閉
let mainWindow = null;
let tray = null;
let img = nativeImage.createFromPath('/theme/images/applewatch64.png');
const DEBUG = true;
const MAIN_MENU = [
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {type: 'separator'},
    {label: 'Item4', submenu:[
        {label: 'Item4-1', type: 'radio'},
        {label: 'Item4-2', type: 'radio'}
    ]},
    {label: 'Offical Site', click() { electron.shell.openExternal('http://chuiwenchiu.wordpress.com');  }},
    {label: 'Exit', click() { app.quit(); }}
  ];
const contextMenu = Menu.buildFromTemplate(MAIN_MENU);
  
function setupTray(){
  tray = new Tray(img);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);;
}

function setupWindow(){
    // 創建瀏覽器視窗
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.setMenu(Menu.buildFromTemplate([
    {label: '操作', submenu: MAIN_MENU},
    {label: '開發', submenu: [
        {label: '重新啟動', click(){ 
            app.relaunch();
            app.exit(0);
            }},
        {label: '重新整理', click(){ 
            mainWindow.reload();
            }},
        {label: '開發工具', click(){ 
                if(mainWindow.isDevToolsOpened()){
                    mainWindow.closeDevTools();
                }else{
                    mainWindow.openDevTools();
                }
            }}
    ]},
    {label: '功能測試', submenu: [
        {label: 'Balloon', submenu:[
            {label: 'Balloon', click(){
                global.sharedObject.balloon();
            }}
        ]},
        {label: '對話盒', submenu: [
            {label: '開啟檔案', click(){
                global.sharedObject.openFileDialog();
            }},
            {label: '儲存檔案', click(){
                global.sharedObject.openSaveDialog();
            }}
        ]}
    ]},
    {label: '檢視', submenu: [
        {label: '最大化', type: 'checkbox', checked: mainWindow.isMaximized(), click(){ 
                if(mainWindow.isMaximized()){
                    mainWindow.unmaximize()
                }else{
                    mainWindow.maximize()
                }
            }},
        {label: '全螢幕', type: 'checkbox', checked: mainWindow.isFullScreen(), click(){ 
                mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }},
        {label: '最上層顯示', type: 'checkbox', click(){ 
            mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop());
            }},
        {label: '螢幕中央', click(){ 
            mainWindow.center();
            }},
        {label: '螢幕左上角', click(){ 
            mainWindow.setPosition(0,0);
            }}
    ]},
    {label: '關於', click(){
        
    }}
  ]));
    
  
  // mainWindow.setMenu(null); // 移除選單列
  
  // 載入應用程式的 index.html
  mainWindow.loadURL('file://' + __dirname + '/index.html');
    
  // if(DEBUG){
    // 打開開發者工具
    // mainWindow.webContents.openDevTools();
  // }
  // 當window 被關閉，這個事件會被觸發
  mainWindow.on('closed', function() {
    // 取消引用 window 物件，如果你的應用程式支援多視窗的話，
    // 通常會把多個 window 物件存放在一個數組裡面，
    // 但這次不是。
    mainWindow = null;
  });
}

function setupAppEvent(){
    app.on('will-finish-launching', () => {
        console.log('event: will-finish-launching');
    });

    app.on('certificate-error', () => {
        console.log('event: certificate-error');
    });
    app.on('select-client-certificate', () => {
        console.log('event: select-client-certificate');
    });

    app.on('browser-window-blur', () => {
        console.log('event: browser-window-blur');
    });
    app.on('browser-window-focus', () => {
        console.log('event: browser-window-focus');
    });
    app.on('browser-window-created', () => {
        console.log('event: browser-window-created');
    });

    app.on('before-quit', () => {
        console.log('event: before-quit');
    });
    app.on('will-quit', () => {
        console.log('event: will-quit');
    });
    app.on('quit', (e, code) => {
        console.log(`event: quit, code=${code}`);
        app.exit(code);
    });

    // 當Electron 完成了初始化並且準備創建瀏覽器視窗的時候
    // 這個方法就被調用
    app.on('ready', () => {
        console.log('event: ready');
        setupWindow();
        setupTray();
    });

    // 當所有窗口被關閉了，退出。
    app.on('window-all-closed', function() {
        console.log('event: rwindow-all-closed');
        // 在OS X 上，通常使用者在明確地按下 Cmd + Q 之前
        // 應用會保持活動狀態
        if (process.platform != 'darwin') {
            app.quit();
        }
    });
}

function enableSingleton(){
    // 確保單一執行
    const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
      // Someone tried to run a second instance, we should focus our window.
      console.log(`args=${commandLine}, folder=${workingDirectory}`);
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
      }
    });

    if (shouldQuit) {
      app.quit();
      return;
    }
}
    
function main(){
    setupAppEvent();
    // enableSingleton();
}
    
main();