var ffi = require('ffi');

// https://www.npmjs.com/package/node-ffi
var gdi32 = ffi.Library('C:\\WINDOWS\\system32\\Gdi32.dll', {
 'Ellipse': [ 'int', ['uint64', 'int', 'int', 'int', 'int'] ],
 'TextOutA': [ 'int', ['int', 'int', 'int', 'string', 'int'] ],
 });
 
var user32 = ffi.Library('C:\\WINDOWS\\system32\\user32.dll', {
 'MessageBoxA': [ 'int', ['int32', 'string', 'string', 'uint'] ],
 'GetDC': [ 'uint64', ['uint64'] ],
 'ReleaseDC': [ 'uint64', ['uint64', 'uint64'] ]
 });

user32.MessageBoxA(0, 'hello libffi for node', "win32api", 0);

var screenDC = user32.GetDC(0);
gdi32.Ellipse(screenDC, 100, 100, 10, 10);
user32.ReleaseDC(0, screenDC);
