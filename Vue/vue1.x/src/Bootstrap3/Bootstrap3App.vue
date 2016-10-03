<template>
  <basic-layout
    app-title="Bootstrap3 測試"
  >
    <basic-panel
                title="元件清單"
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
        <div class="panel panel-primary" v-if="current=='glyphicon'">
            <div class="panel-heading">可用圖標</div>
            <div class="panel-body">
                <glyphicon></glyphicon>
            </div>
        </div>
        <div class="panel panel-primary" v-if="current=='glyphicon-input'">
            <div class="panel-heading">有圖標的輸入框</div>
            <div class="panel-body">
                <glyphicon-input></glyphicon-input>
            </div>
        </div>
        
        <div class="panel panel-primary" v-if="current=='progressbar'">
            <div class="panel-heading"></div>
            <div class="panel-body">
                <progressbar
                    max="50"
                    min="0"
                    value="50"
                    barcolor="progress-bar-danger"
                    stripped="on"
                    animal="on"
                ></progressbar>
            </div>
        </div>
        
        <div class="panel panel-primary" v-if="current=='stacked-progressbar'">
            <div class="panel-heading"></div>
            <div class="panel-body">
                <stacked-progressbar>
                </stacked-progressbar>
            </div>
        </div>
        <div class="panel panel-primary" v-if="current=='bootstrap3'">
            <div class="panel-heading">Bootstrap3 測試</div>
            <div class="panel-body">
                <bootstrap3>
                </bootstrap3>
            </div>
        </div>
    </div>
  </basic-layout>
  
</template>

<script>

import BasicLayout from '../BasicLayout.vue'
import BasicPanel from '../BasicPanel.vue'
import ListGroup from '../ListGroup.vue'

import Progressbar from './Progressbar.vue'
import StackedProgressbar from './StackedProgressbar.vue'
import Glyphicon from './Glyphicon.vue'
import GlyphiconInput from './GlyphiconInput.vue'
import Bootstrap3 from './Bootstrap3.vue'
export default {
  replace: false,
  components: {
    BasicLayout,
    
    BasicPanel,
    Progressbar,
    ListGroup,
    Glyphicon,
    StackedProgressbar,
    GlyphiconInput,
    Bootstrap3,
  },
  data () {
    return {
      current: 'bootstrap3',
      field_name: true,
      menu_items: [{
        id: 'progressbar',
        title: 'ProgressBar'
      },{
        id: 'stacked-progressbar',
        title: 'Stacked Progressbar'
      },{
        id: 'glyphicon',
        title: 'Glyphicon'
      },{
        id: 'glyphicon-input',
        title: 'GlyphiconInput'
      },{
        id: 'bootstrap3',
        title: 'Bootstrap3'
      }]
    }
  },
  methods: {
    menu_selected: function(v){
        this.current =v ;
    },
    formSave: function(data){
        alert( JSON.stringify(data) );
    }
  }
}
</script>

<style>

</style>
