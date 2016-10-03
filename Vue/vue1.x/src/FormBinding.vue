<template>
    <div>
        <form>
            <div class="form-group">
                <label>Text</label>
                <input type="text" v-model="text_data" class="form-control" placeholder="請輸入文字">
                <div class="form-control">{{text_data}}</div>
            </div>
            <div class="form-group">
                <label>Multiline Text</label>
                <textarea type="text" v-model="mtext_data" class="form-control" placeholder="請輸入文字"></textarea>
                <div class="form-control">{{mtext_data}}</div>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="checkbox1">CheckBox 沒有指定 value</input>
                    </label>
                </div>
                <div class="form-control">{{checkbox1}}</div>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="戰士" v-model="checkbox2">戰士</input>
                    </label>
                    <label>
                        <input type="checkbox" value="遊俠" v-model="checkbox2">遊俠</input>
                    </label>
                    <label>  
                        <input type="checkbox" value="魔導士" v-model="checkbox2">魔導士</input>
                    </label>
                    
                </div>
                <div class="form-control">{{checkbox2 | json}}</div>
            </div>
            <div class="form-group">
                <div class="radio">
                    <label>
                        <input type="radio" value="戰士" v-model="radio">戰士</input>
                    </label>
                    <label>
                        <input type="radio" value="遊俠" v-model="radio">遊俠</input>
                    </label>
                    <label>  
                        <input type="radio" value="魔導士" v-model="radio">魔導士</input>
                    </label>
                    
                </div>
                <div class="form-control">{{radio}}</div>
            </div>
            <div class="form-group">
                <label>單選</label>
                <select v-model="select_data" class="form-control">
                    <option value="戰士">戰士</option>
                    <option value="遊俠">遊俠</option>
                    <option value="魔導士">魔導士</option>
                </select>
                <div class="form-control">{{select_data}}</div>
            </div>
            <div class="form-group">
                <label>多選</label>
                <select v-model="select_data2" class="form-control" multiple>
                    <!-- v-for 動態綁定 -->
                    <option v-for="v in select_options" :value="v.id">{{v.title}}</option>
                </select>
                <div class="form-control">{{select_data2 | json}}</div>
            </div>
            
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
        text_data: '',
        mtext_data: '',
        checkbox1: true,
        checkbox2: [],
        radio: '戰士',
        select_data: '遊俠',
        select_data2: [],
        select_options: [{
            id: 9,
            title: '戰士'
        },{
            id: 99,
            title: '遊俠'
        },{
            id: 1,
            title: '魔導士'
        }]
    }
  },
  components:{
  },
  props: {
  },
  methods: {
  }
}
</script>

<style>

</style>