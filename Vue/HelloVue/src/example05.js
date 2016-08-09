import Vue from 'Vue'

new Vue({
	el: 'body',
    data: {
        msg: 'hello',
        currentView: 'page2'
    },
	components: { 
        'page-list' : Vue.extend({
            template: `
                <select v-model="view">
                    <option value="page1">#1</option>
                    <option value="page2">#2</option>
                    <option value="page3">#3</option>
                </select>
            `,
            props: {
                view : String
            }
        }),
        
        page1: Vue.extend({
            template: '<div>page1</div>'
        }),
        page2: Vue.extend({
            template: '<div>page2</div>'
        }),
        page3: Vue.extend({
            template: '<div>page3</div>'
        })
    }
});
