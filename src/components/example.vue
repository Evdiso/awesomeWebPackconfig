<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'mes'
    }
  },
  created() {
    this.message = this.$store.getters.getMessage;
  }
}
</script>

<style>

</style>