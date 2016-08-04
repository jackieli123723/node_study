require([
    'jquery',
    'vue',
    'bootstrap',
    'bootstrap-dialog'
], function(jq, Vue, bootstrap, BootstrapDialog) {
    const {
        remote, 
        dialog,
        screen: electronScreen
    } = nodeRequire('electron');
    const {
        width:screen_width, 
        height:screen_height
    } = electronScreen.getPrimaryDisplay().workAreaSize;
    let mainFunc = remote.getGlobal('sharedObject');
    // mainFunc.testCallback(function(v){
        // alert(v);
    // });
    let modal = {
       NodeVersion: process.versions.node,
       ChromeVersion: process.versions.chrome,
       AppVersion: remote.app.getVersion(),
       AppName: remote.app.getName(),
       ElectronVersion: process.versions.electron,
       ProcessType: process.type,
       Locale: remote.app.getLocale(),
       ScreenWidth: screen_width,
       ScreenHeight: screen_height,
       AppPath: remote.app.getAppPath(),
       PathUserHome: remote.app.getPath('home'),
       PathAppData: remote.app.getPath('appData'),
       PathUserData: remote.app.getPath('userData'),
       PathTemp: remote.app.getPath('temp'),
       PathExe: remote.app.getPath('exe'),
       PathModule: remote.app.getPath('module'),
       PathDesktop: remote.app.getPath('desktop'),
       PathDoc: remote.app.getPath('documents'),
       PathDownload: remote.app.getPath('downloads'),
       PathMusic: remote.app.getPath('music'),
       PathPicture: remote.app.getPath('pictures'),
       PathVideo: remote.app.getPath('videos')
    };
    
    let win_clipboard = null;
    
    let app = new Vue({
        el: '#app',
        data : modal,
        methods: {
            balloon(){
                mainFunc.balloon();
            },
            notify(){
                let myNotification = new Notification('Title', {
                  body: 'Lorem Ipsum Dolor Sit Amet'
                });

                myNotification.onclick = () => {
                  console.log('Notification clicked');
                };
            },
            openFileDialog(){
                console.log(remote.dialog.showOpenDialog({
                    properties: [
                        'openFile', 
                        'openDirectory', 
                        'multiSelections'
                        ]
                }));
            },
            openSaveDialog(){
                // console.log(mainFunc.openSaveDialog());
                console.log(remote.dialog.showSaveDialog({
                    title: 'Save Dialog',
                    defaultPath: 'd:\\'
                }));
            },
            clipboardMonitor(){
                if(win_clipboard){
                    win_clipboard.focus();
                    return;
                }
                win_clipboard = new remote.BrowserWindow({
                    width: 800, height: 600
                });
                win_clipboard.setMenu(null);
                win_clipboard.loadURL('file://' + __dirname + '/clipboard.html');
                win_clipboard.show();
            },
            openPDF(){
                var fn = remote.dialog.showOpenDialog({
                    filters: [
                         { name: 'PDF files', extensions: [ '*.pdf' ] },
                    ],
                    properties: [
                        'openFile'//, 
                        // 'openDirectory', 
                        // 'multiSelections'
                    ]
                });
                if(fn){
                    console.log(fn);
                    let win = new remote.BrowserWindow({
                    width: 800, height: 600
                });
                // win.setMenu(null);
                win.webContents.openDevTools();
                win.loadURL('file://' + __dirname + '/pdfviewer/viewer.html');
                win.show();
                }
            }
        }
    });
    
    
});
// 存取共用資料
// alert(mainFunc.someProperty);


