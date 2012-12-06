var ffi = require('node-ffi');

var user32 = ffi.Library('C:\\WINDOWS\\system32\\user32.dll', {
  'MessageBoxA': [ 'int', ['int32', 'string', 'string', 'uint'] ]
});

user32.MessageBoxA(0, 'hello libffi for node', "win32api", 0);
