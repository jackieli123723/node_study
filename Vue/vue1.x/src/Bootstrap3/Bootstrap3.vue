<template>
    <div>
        <form>
                <label>Alignment classes</label>
                
                <select v-model="AlignClass" class="form-control">
                    <option value="text-left">text-left</option>
                    <option value="text-center">text-center</option>
                    <option value="text-right">text-right</option>
                    <option value="text-justify">text-justify</option>
                    <option value="text-nowrap">text-nowrap</option>
                </select>
                
                <label>Showing and hiding content</label>
                <select v-model="ShowHideClass" class="form-control">
                    <option value="show">show</option>
                    <option value="hide">hide</option>
                </select>
                
                <label>Contextual backgrounds</label>
                <select v-model="ContextualBackgroundColorClass" class="form-control">
                    <option v-for="v in ContextualBackgroundColors" value="{{v}}">{{v}}</option>
                </select>
                
                <label>Contextual colors</label>
                <select v-model="ContextualColorClass" class="form-control">
                    <option v-for="v in ContextualColors" value="{{v}}">{{v}}</option>
                </select>
                
                <label>預覽</label>
                <div class="well">
                    <p class="{{ContextualColorClass}} {{AlignClass}} {{ShowHideClass}} {{ContextualBackgroundColorClass}}">Hello World</p>
                </div>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
        AlignClass: 'text-left',
        ContextualBackgroundColorClass: 'text-primary',
        ContextualColorClass: 'bg-primary',
        ShowHideClass: 'show',
        'ContextualColors':[
            'text-primary',
            "text-muted",
            "text-success",
            "text-info",
            "text-warning",
            "text-danger"
        ],
        'ContextualBackgroundColors':[
            'bg-primary',
            "bg-muted",
            "bg-success",
            "bg-info",
            "bg-warning",
            "bg-danger"
        ]
    }
  },
  components:{
  },
  props: {
    year: {
        default: 2017
    },
    owner: {
        default: 'Chui-Wen Chiu'
    }
  },
  methods: {
  }
}
</script>

<style>
.copyright {
    color:#000098;
}
</style>