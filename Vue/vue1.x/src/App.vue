<template>
    <basic-layout
        app-title="Vue 測試"
    >
        <basic-panel
            title="範例"
            slot="left"
        >
        <list-group
            slot="content"
            @selected="menu_selected"
            :data="menu_items"
            :current="current"
        >
        </list-group>
    </basic-panel>
    <div slot="content">
            
            <div class="panel panel-primary" v-if="current=='drag-sort'">
                <div class="panel-heading">搭配 JQuery UI 拖曳排序</div>
                <div class="panel-body">
                    <drag-sort></drag-sort>
                </div>
            </div>
            <div class="panel panel-primary" v-if="current=='vue-table'">
                <div class="panel-heading">支援分頁, 過濾</div>
                <div class="panel-body">
                    <vue-table>
                    </vue-table>
                </div>
            </div>
            <div class="panel panel-primary" v-if="current=='form-ide'">
                <div class="panel-heading">TicketCode - Form IDE</div>
                <div class="panel-body">
                    <form-ide @save="formSave" ></form-ide>
                </div>
            </div>
            <div class="panel panel-primary" v-if="current=='drag-basic'">
                <div class="panel-heading">vue-sortable 測試</div>
                <div class="panel-body">
                    <drag-basic>
                    </drag-basic>
                </div>
            </div>
            <div class="panel panel-primary" v-if="current=='drag-basic2'">
                <div class="panel-heading">vue-drag-reorder 測試</div>
                <div class="panel-body">
                    <drag-basic2>
                    </drag-basic2>
                </div>
            </div>
            <div class="panel panel-primary" v-if="current=='form-binding'">
                <div class="panel-heading">表單控件綁定</div>
                <div class="panel-body">
                    <form-binding>
                    </form-binding>
                </div>
            </div>
            <div class="panel panel-primary" v-if="current=='css-transition'">
                <div class="panel-heading">CSS過渡</div>
                <div class="panel-body">
                    <css-transition>
                    </css-transition>
                </div>
            </div>
        </div>
    </basic-layout>
</template>

<script>
import BasicLayout from './BasicLayout.vue'
import BasicPanel from './BasicPanel.vue'
import VueTable from './VueTable.vue'
import ListGroup from './ListGroup.vue'
import FormIde from './TicketCode/FormIde.vue'
import DragSort from './DragSort.vue'
import DragBasic from './DragBasic.vue'
import DragBasic2 from './DragBasic2.vue'
import FormBinding from './FormBinding.vue'
import CssTransition from './CssTransition.vue'
export default {
  components: {
    BasicLayout,
    BasicPanel,
    VueTable,
    ListGroup,
    FormIde,
    DragSort,
    DragBasic,
    //GMap,
    DragBasic2,
    FormBinding,
    CssTransition,
    //LineApp
  },
  data () {
    return {
      current: 'vue-table',
      checkedNames: ['Jack'],
      
      field_name: true,
      menu_items: [{
        id: 'vue-table',
        title: '分頁 Table'
      },{
        id: 'drag-sort',
        title: 'DragSort'
      },/*{
        id: 'form-ide',
        title: 'FormIDE'
      },*/{
        id: 'drag-basic',
        title: 'DragBasic'
      },{
        id: 'drag-basic2',
        title: 'DragBasic#2'
      },{
        id: 'form-binding',
        title: '表單綁定'
      },{
        id: 'css-transition',
        title: 'CSS過度'
      }]
    }
  },
  methods: {
    menu_selected: function(v){
        this.current =v ;
    },
    drop:function(e){
        console.log(e);
        console.log('drop');
    },
    formSave: function(data){
        alert( JSON.stringify(data) );
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
