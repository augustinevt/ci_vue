<template>
  <button @click="onStart">
    {{runSystemValue ? 'Stop' : 'Start'}}
  </button>
</template>

<script>
  export default {
    name: 'Options',
    data: () => ({
      runSystemValue: false,
    }),
    methods: {
      onStart() {
        this.$emit('run-system', !this.runSystemValue)
        this.runSystemValue = !this.runSystemValue
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
