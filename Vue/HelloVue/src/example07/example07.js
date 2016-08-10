import Vue from 'Vue'

let app = new Vue({
	el: 'body',
    data : {
        msg: 'key event test'
    },
	methods: {
        enter_keyup: ()=>{
            app.msg = 'enter keyup';
        },
        keyup: (event)=>{
            // console.log(event);
            app.msg = `keyCode=${event.keyCode}`;
        }
    }
});

