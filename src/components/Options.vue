<template>
  <button @click="onStart">
    {{runSystemValue ? 'Stop' : 'Start'}}
  </button>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Options',
    data: () => ({

    }),

    computed: {
      ...mapState({runSystemValue: 'systemRunValue'})
    },

    methods: {
      ...mapActions([
        'toggleSystemRunState'
      ]),

      onStart() {

        this.toggleSystemRunState()
        // this.$emit('run-system', !this.runSystemValue)
        // this.runSystemValue = !this.runSystemValue
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
