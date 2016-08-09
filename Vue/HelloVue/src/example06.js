import Vue from 'Vue'

new Vue({
	el: 'body',
	components: { 
        'child' : Vue.extend({
            template: `
                <div>
                    <slot name="header">header</slot>
                    <slot name="content">content</slot>
                    <slot name="footer">footer</slot>
                </div>
            `
        })
    }
});
