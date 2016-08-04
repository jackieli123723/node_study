// paths, shim內容請照字母順序排序
require.config({
    urlArgs: "v=201605121459", // 避免 Cache
    //baseUrl: '/',
    paths: {
        // "babel": "js/requirejs-react-jsx/babel-5.8.34.min",
        'bootstrap': 'js/bootstrap/js/bootstrap.3.3.6.min',
        'bootstrap-dialog': 'js/bootstrap/js/bootstrap-dialog.min',
        // 'cgi_path': 'js/cgi-path',
        // 'common': 'js/common',
        // 'ckeditor-core':'js/ckeditor/ckeditor',
        // 'ckeditor-jquery':'js/ckeditor/adapters/jquery',
        // 'datetimepicker': 'js/jquery/jquery.datetimepicker/jquery.datetimepicker.full',
        // 'event_common': 'static/event/js/event',
        // 'grid': 'js/grid',
        'jquery': 'js/jquery/jquery-2.2.3.min',
        // 'jquery_cookie': 'js/jquery/jquery.cookie/jquery.cookie',
        // 'jquery_dropotron': 'js/jquery/jquery.dropotron/jquery.dropotron.min',
        'jquery_loadmask': 'js/jquery/jquery.loadmask/jquery.loadmask.min',
        // 'jquery_maskedinput':'js/jquery/jquery.maskedinput/jquery.maskedinput',
        // 'jquery_validate':'js/jquery/jquery.validate/jquery.validate.min',
        // "jsx": "js/requirejs-react-jsx/jsx",
        // 'main': 'js/main'
        // 'navigator': 'js/navigator',
        // 'picturefill': 'js/picturefill.min',
        // "react": "js/react/react-with-addons",
        // 'skel': 'js/skel.min',
        // 'skel-viewport': 'js/skel-viewport.min',
        // 'sprintf': 'js/sprintf',
        // "text": "js/requirejs-text/text",
        // 'twbsPagination':'js/jquery/jquery-pagination/jquery.twbsPagination.min',
        // 'util': 'js/util',
        'pdfobject' : 'js/pdfobject/pdfobject.min',
        'vue' : 'js/vue/vue-1.0.24.min'
        // 'vue-validator' : 'js/vue/vue-validator.min-2.1.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'bootstrap-dialog': {
            deps: ['bootstrap']
        },
        'jquery_loadmask': {
            deps: ['jquery']
        }

    }
});