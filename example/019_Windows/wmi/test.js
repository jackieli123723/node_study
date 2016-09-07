const
    wmi = require('node-wmi');
    
function main(){
    wmi
        .Query()
        .class('Win32_BIOS')
        .exec(function(err, bios) {
            console.log(bios);
        });
        
    wmi
        .Query()
        .class('Win32_LogicalDisk', function(err, disks) {
          console.log(disks);
        });
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
