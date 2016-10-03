<template>
    <div >
      <div v-if="!image">
        <h2>Select an image</h2>
        <input type="file" @change="onFileChange" class="form-control">
      </div>
      <div v-else>
        <img :src="image" />
        <button @click="removeImage" class="form-control">Remove image</button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        image: ''
    }
  },
  components:{
  },
  props: {
    
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}
</script>

<style>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>