<template>
    <div>
    <div>Filter: <input type="text" v-model="filter_name"></div>

    <table class="table table-condensed">
      <tr>
        <th>#</th>
        <th>name</th>
        <th>age</th>
        <th>gender </th>
      </tr>
      <tr v-for="r in rows 
        | filterBy filter_name in 'name' | recordLength 'filteredRowCount' 
        | limitBy countOfPage pageStart 
      ">
        <td>{{ (currPage-1) * countOfPage + $index + 1 }}</td>
        <td>{{ r.name }}</td>
        <td>{{ r.age }}</td>
        <td>{{ r.gender }}</td>
      </tr>
    </table> 

    <!-- 分頁 -->
    <div >
      <ul class="pagination">
        <li v-bind:class="{'disabled': (currPage === 1)}" 
            @click.prevent="setPage(currPage-1)"><a href="#">Prev</a></li>
        <li v-for="n in totalPage"
            v-bind:class="{'active': (currPage === (n+1))}" 
            @click.prevent="setPage(n+1)"><a href="#">{{n+1}}</a></li>
        <li v-bind:class="{'disabled': (currPage === totalPage)}" 
            @click.prevent="setPage(currPage+1)"><a href="#">Next</a></li>
      </ul>
    </div>
    </div>
    
</template>

<script>
import Vue from 'vue';

// 紀錄過濾後的資料筆數
Vue.filter('recordLength', function (result, key) {
  this.$set(key, result.length);
  return result;
});

export default {

  computed: {
    pageStart: function(){
        return (this.currPage - 1) * this.countOfPage;
      },
    totalPage: function(){
      if( this.filter_name.trim() === '' ) {
        return Math.ceil(this.rows.length / this.countOfPage);
      }
      else{
        return Math.ceil(this.filteredRowCount / this.countOfPage);
      }
    }
  },
  methods: {
    setPage: function(idx){
      if( idx <= 0 || idx > this.totalPage ){
        return;
      }
      this.currPage = idx;
    },
  },
  data () {
    return {
        rows: [
              {
                "index": 0, 
                "age": 56, 
                "_id": "574c06e5793fa069d8a9bb7d", 
                "name": "Flowers Harmon", 
                "gender": "male"
              }, 
              {
                "index": 1, 
                "age": 60, 
                "_id": "574c06e543a97c141d304414", 
                "name": "Angie Matthews", 
                "gender": "female"
              }, 
              {
                "index": 2, 
                "age": 28, 
                "_id": "574c06e59c74aba71cb8b26b", 
                "name": "Gina Randolph", 
                "gender": "female"
              }, 
              {
                "index": 3, 
                "age": 49, 
                "_id": "574c06e5f96897ebf1a59ec9", 
                "name": "Shaffer Acosta", 
                "gender": "male"
              }, 
              {
                "index": 4, 
                "age": 50, 
                "_id": "574c06e59886e5d4ce52349c", 
                "name": "Mcdaniel Boyer", 
                "gender": "male"
              }, 
              {
                "index": 5, 
                "age": 49, 
                "_id": "574c06e5e6f396e04e641ccd", 
                "name": "Adriana Porter", 
                "gender": "female"
              }, 
              {
                "index": 6, 
                "age": 40, 
                "_id": "574c06e57dd92e235f15db59", 
                "name": "Isabel Brown", 
                "gender": "female"
              }, 
              {
                "index": 7, 
                "age": 50, 
                "_id": "574c06e5d158a5225a5fc04d", 
                "name": "Waller Casey", 
                "gender": "male"
              }, 
              {
                "index": 8, 
                "age": 20, 
                "_id": "574c06e590b333dd3eda6de8", 
                "name": "Mccray Jensen", 
                "gender": "male"
              }, 
              {
                "index": 9, 
                "age": 59, 
                "_id": "574c06e5cbb03403bde023b4", 
                "name": "Koch Moore", 
                "gender": "male"
              }, 
              {
                "index": 10, 
                "age": 44, 
                "_id": "574c06e549acd0aaa555722c", 
                "name": "Mcleod Aguilar", 
                "gender": "male"
              }, 
              {
                "index": 11, 
                "age": 33, 
                "_id": "574c06e591db5269378f7a10", 
                "name": "Muriel Mcfadden", 
                "gender": "female"
              }, 
              {
                "index": 12, 
                "age": 21, 
                "_id": "574c06e5baff242293f8cc0a", 
                "name": "Barber Alston", 
                "gender": "male"
              }, 
              {
                "index": 13, 
                "age": 28, 
                "_id": "574c06e5fa0f6fd2d703af95", 
                "name": "Winifred Woodward", 
                "gender": "female"
              }, 
              {
                "index": 14, 
                "age": 39, 
                "_id": "574c06e541b7318cdaed50ff", 
                "name": "Haynes Whitehead", 
                "gender": "male"
              }, 
              {
                "index": 15, 
                "age": 25, 
                "_id": "574c06e537f3ca985daf789b", 
                "name": "Ada Mcmahon", 
                "gender": "female"
              }, 
              {
                "index": 16, 
                "age": 32, 
                "_id": "574c06e517a5822a560061a6", 
                "name": "Navarro Clarke", 
                "gender": "male"
              }, 
              {
                "index": 17, 
                "age": 32, 
                "_id": "574c06e566c63528ccd87acd", 
                "name": "Charlene Gardner", 
                "gender": "female"
              }, 
              {
                "index": 18, 
                "age": 58, 
                "_id": "574c06e52c9a6713de1c3a89", 
                "name": "Whitaker Avila", 
                "gender": "male"
              }, 
              {
                "index": 19, 
                "age": 40, 
                "_id": "574c06e5b848d79adf20e267", 
                "name": "Katherine Holland", 
                "gender": "female"
              }, 
              {
                "index": 20, 
                "age": 18, 
                "_id": "574c06e58070fc382a8c395d", 
                "name": "Vargas Lang", 
                "gender": "male"
              }, 
              {
                "index": 21, 
                "age": 38, 
                "_id": "574c06e5b2c31de64e88afde", 
                "name": "Odessa Ashley", 
                "gender": "female"
              }, 
              {
                "index": 22, 
                "age": 49, 
                "_id": "574c06e5fa3e96158dd225ab", 
                "name": "Barnes Ford", 
                "gender": "male"
              }, 
              {
                "index": 23, 
                "age": 38, 
                "_id": "574c06e5d07f475d369f9a6d", 
                "name": "Mcfarland Dunn", 
                "gender": "male"
              }, 
              {
                "index": 24, 
                "age": 41, 
                "_id": "574c06e512e7efa0741077b7", 
                "name": "Richard Mullins", 
                "gender": "male"
              }, 
              {
                "index": 25, 
                "age": 24, 
                "_id": "574c06e57882d443f328fe12", 
                "name": "Hutchinson Haynes", 
                "gender": "male"
              }, 
              {
                "index": 26, 
                "age": 19, 
                "_id": "574c06e5eea6c20ada753e74", 
                "name": "Estela Medina", 
                "gender": "female"
              }, 
              {
                "index": 27, 
                "age": 58, 
                "_id": "574c06e5fd81fcaf1054a7b2", 
                "name": "Arnold Butler", 
                "gender": "male"
              }, 
              {
                "index": 28, 
                "age": 24, 
                "_id": "574c06e5618dcfe6c4cb589c", 
                "name": "Blackwell Macdonald", 
                "gender": "male"
              }, 
              {
                "index": 29, 
                "age": 58, 
                "_id": "574c06e5929aa6c810b78c1c", 
                "name": "Herrera Preston", 
                "gender": "male"
              }
            ],
        countOfPage: 5,
        currPage: 1,
        filter_name: '',
        filteredRowCount: null
    }
  },
  components:{
  },
  props: {
    
  },
  created: function(){
    console.log('created');
    var self = this;
    /*$.get('http://www.json-generator.com/api/json/get/cknklDscqG?indent=2', function(data){
            self.rows = data;
        }
    );*/
  }
}
</script>

<style>
.copyright {
    color:red;
}
</style>