import Vue from 'Vue'
Vue.component('my-ip', function (resolve, reject) {
    $.ajax({
        url: 'https://api.ipify.org?format=json',
        dataType: 'json',
        success: function (data) {
           resolve({
                template: '<div>IP: {{msg}}</div>',
                data: function () {
                    return {msg:data.ip}
                }
            });
        }
    });
});
let app = new Vue({
	el: 'body',
    data : {
        msg: 'async component'
    }
});

