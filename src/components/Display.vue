<template>
  <div>
    <canvas id="canvas" ref="display-canvas" width="500" height="500" />
  </div>
</template>

<script>

  // import System from 'basic-system'
  import {mapState} from 'vuex'

  export default {
    name: 'Display',
    methods: {
      displayAgent(agent) {
        const {ctx} = this.provider

        if (agent.type === 0) {
          ctx.fillStyle = 'red';
        } else if (agent.type === 1) {
          ctx.fillStyle = 'lightBlue';
        }

        ctx.fillRect((agent.x * 10), (agent.y * 10), 10, 10);
        ctx.fill()
      },

      startSystem() {
        this.currentInterval = setInterval(() => {
          console.log('hey')
          this.system.runTick()
          this.system.display()
        }, 100);
      },

      stopSystem() {

        clearInterval(this.currentInterval)
      },

      updateCanvas() {

        const {width, height} = this.$refs['display-canvas']
        const {ctx} = this.provider

        ctx.clearRect(0, 0, width, height)

        ctx.lineWidth = 1;

        for(let i = 0; i < this.numBox; i++) {
          ctx.strokeRect( i * 30, i * 30, 100, 50)
        }

        ctx.stroke();
      }
    },

    data () {
      return {
        system: null,
        currentInterval: null,
        provider: {
          ctx: null
        }
      }
    },

    computed: {
      ...mapState({runSystem: 'systemRunValue'})
    },

    watch: {
      runSystem: function() {
        this.runSystem ? this.startSystem() : this.stopSystem()
      }
    },

    mounted() {
      // this.provider.ctx = this.$refs['display-canvas'].getContext('2d')
      //
      // const sys = new System(100,100)
      //
      // sys.initGrid()
      // sys.setAgentDisplay(this.displayAgent)
      //
      // this.system = sys
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
