require([
    'jquery',
    'vue'
], function(jq, Vue) {
    const {
        clipboard
    } = nodeRequire('electron');
    
    
    let modal = {
       ClipboardType : '',
       ClipboardData : ''
    };
    
    var body = $("#preview").contents().find("body");
    setInterval(()=>{
        var format = clipboard.availableFormats().toString(),
            type = null,
            data = null;
        
        if( /plain/.exec(format)){
            type = 'text';
            data = '<pre>\n'+clipboard.readText() + '\n</pre>';
        }
        
        if( /html/.exec(format)){
            type = 'html';
            data = clipboard.readHtml();
        }
        if( /image/.exec(format)){
            type = 'image';
            data = '<img src="'+ clipboard.readImage().toDataURL() + '" />';
        }
        
        // console.log(body);
        // body.html( modal.ClipboardData );
        if(modal.ClipboardData == data){
            return;
        }
        modal.ClipboardType = type;
        modal.ClipboardData = data;
        body.html( data );
    }, 500);
    
    let app = new Vue({
        el: '#app',
        data : modal,
        methods: {
           
        }
    });
    
    
    $().ready(function() {
        $('#preview').height($(window).height() - 62);
    });
    $(window).resize(function() {
        $('#preview').height($(window).height() - 62);
    });
});


