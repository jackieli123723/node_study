// Console Â²©ö°Êµe
String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
};

function art1(){
    var idx = 0;
    function jobx(){
        var xxx = ["-", "\\", "|", "/"];
        ++idx;
        
        if(idx>=xxx.length){
            idx = 0;
        }
        
        process.stdout.write("\b".repeat(5));
        process.stdout.write(xxx[idx].repeat(5));

        
        setTimeout(jobx, 100);
    }
    setTimeout(jobx, 100);
}
    
function art2(){
    var idx = 0;
    function jobx(){
        ++idx
        
        if(idx>=100){
            var clip = '|' + '#'.repeat(25) + "|100%";
            var len = clip.length;
            process.stdout.write("\b".repeat(len));        
            process.stdout.write(clip);
            return;
        }
        var block_count = parseInt(idx / 4);
        var block2_count = 25-block_count;
        var clip = '|' + '#'.repeat(block_count) + ' '.repeat(block2_count) + '|' + new String(idx) +'%';
        var len = clip.length;
        process.stdout.write("\b".repeat(len));
        process.stdout.write(clip);

        
        setTimeout(jobx, 50);
    }

    setTimeout(jobx, 50);
}

function main(){
    // art1();
    art2();
}
    
main();