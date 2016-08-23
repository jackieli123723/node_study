let express = require('express'),
    multiparty = require('multiparty'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    fs = require('fs'),
    path = require('path'),
    https = require('https'),
    http = require('http'),
    app = express();

// 設定靜態目錄
app.use('/public',express.static(path.join(__dirname, 'public')));
// 支援 POST x-www-form-urlencode
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(bodyParser.json({     // to support URL-encoded bodies
}));
// 啟用 session
app.use(session({
    secret: 'ssshhhhh',
    resave: false,
    saveUninitialized: false
}));


// HTTP GET
app.get('/', (req, res) => {
    res.send(`GET Data: ${JSON.stringify(req.query)}`);
});

// session test
app.get('/count', (req,res)=>{
    if(req.session.count){
        req.session.count += 1;
    }else{
        req.session.count = 1;
    }
    res.send( `count: ${req.session.count}` );
});

// 網頁重導
app.get('/p1', (req, res)=>{
    res.redirect('/p2');
});

app.get('/p2', (req, res)=>{
    res.send('p2');
});

app.post('/rest/*', function(req, res) {
    console.log(req.body);
    console.log(req.path);
    console.log(req.url);
    res.send(`
Content-Type: ${req.headers['content-type']}
Content-Length: ${req.headers['content-length']}
User-Agent: ${req.headers['user-agent']}
POST Data: ${JSON.stringify(req.body)}
    `);
});

// response json
app.get('/api', (req, res) => {
        res.json({hello:'world'});
});

// file upload
app.get('/upload', (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
    <title>向服務器上傳文件</title>
    <meta charset="utf-8">
    <script>
        function uploadFile(){
            var formData = new FormData(),
                files = document.getElementById('file').files,
                file = files[0];
            formData.append('myfile', file);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/upload', true);
            xhr.onload = function (e){
                if (this.status == 200){
                     document.getElementById('result').innerHTML = this.response;
                }
            };
            xhr.send(formData);
        }
    </script>
</head>
<body>
<form id = 'form1' enctype="multipart/form-data">
    請選擇文件<input type="file" id="file" name="file"><br>
    <input type="button" value="上傳文件" onclick="uploadFile();"><br>
</form>
<output id="result"></output>
</body>
</html>`);
  });
app.post('/upload', (req, res) => {
    var form = new multiparty.Form({uploadDir: './public'});
    form.on('error', function(err) {
        console.log('Error parsing form: ' + err.stack);
    });
    form.parse(req, function (err, fields, files){
        var filesTmp = JSON.stringify(files,null,2);

        if (err){
            console.log('parse error: ' + err);
            res.send("寫文件操作失敗。");

        }else {
            res.send("文件上傳成功");
            console.log('parse files: ' + filesTmp);

            var fileNameArr = Object.keys(files);
            var firstFilename = fileNameArr[0];
            var fileDataArr = files[firstFilename];
            console.log( typeof fileDataArr);
            console.log(fileDataArr);
            var fileData = fileDataArr[0];

            var uploadedPath = fileData.path;
            var dstPath = './public/' + fileData.originalFilename;
            fs.rename(uploadedPath, dstPath, function(err) {
                if (err){
                    console.log("重命名文件錯誤："+ err);
                } else {
                    console.log("重命名文件成功。");
                }
            });
        }
    });
  });

// server shutdown
app.get('/quit', (req, res)=>{
    if(secureServer){
        secureServer.close();
    }
});

app.get('/start', (req, res)=>{
    if(secureServer){
        return;
    }
    secureServer = https.createServer({
        key: fs.readFileSync('config/private.key'),
        cert: fs.readFileSync('config/certificate.pem')
      }, app).listen(3001, function () {
        console.log('HTTPS Server listening on port 3001');
    });
    secureServer.on('close', ()=>{
        console.log('HTTPS shutdown');
    });
});

// HTTPS
let secureServer = https.createServer({
    key: fs.readFileSync('config/private.key'),
    cert: fs.readFileSync('config/certificate.pem')
  }, app).listen(3001, function () {
    console.log('HTTPS Server listening on port 3001');
});
secureServer.on('close', ()=>{
    console.log('HTTPS shutdown');
    secureServer = null;
});
let insecureServer = http.createServer(app).listen(3000, function() {
  console.log('HTTP Server listening on port 3000');
});
insecureServer.on('close', ()=>{
    console.log('HTTP shutdown');
    insecureServer = null;
});