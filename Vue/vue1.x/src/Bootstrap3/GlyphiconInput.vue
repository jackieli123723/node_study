<template>
    <div class="form-group has-feedback">
        <label class="control-label">{{label}}</label>
        <i class="glyphicon glyphicon-user form-control-feedback"></i>
        <input type="text" class="form-control" v-model="value" placeholder="{{placeholder}}" />
    </div>
</template>

<script>
// 

export default {
  replace: false,
  computed: {
    
    
  },
  methods: {

  },
  data () {
    return {
          
    }
  },
  components:{
    
  },
  props: {
    label: {
        default: 'Username'
    },
    placeholder: {
        default: 'Username'
    },
    value: {
        default: ''
    }
  }
}
</script>

<style>
.table-layout{
    display: table;
}
.table-cell{
    display: table-cell;
}
.table-layout > .btn {
    width: 32px;
}
.filled {
    width: 100%;
}
</style>