<template>
    <div class="container">
        <slot name="header">
            <app-header
                :title.once="appTitle"
            >
            </app-header>
        </slot>
        
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">
                  <i class="glyphicon glyphicon-time"></i>
                  
                </a>
            <ul class="nav navbar-nav">
              <li><a v-link="'/'">Vue</a></li>
              <li><a v-link="'/bootstrap3'">Bootstrap3</a></li>
              <li><a v-link="'/vuex'">Vuex</a></li>
            </ul>
          </div>
        </nav>
        <div class="row" style="display: flex;">
            <div class="col-md-3">
                <slot name="left">
                沒有指定 slot="left"
                </slot>
            </div>
            <div class="col-md-9">
                <slot name="content">
                沒有指定 slot="content"
                </slot>
            </div>        
        </div>
        <app-footer>
        </app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    AppHeader,
    AppFooter,
  },
  props: {
    appTitle: {
        default: ''
    }
  },
  methods: {
  }
}
</script>

<style>

</style>