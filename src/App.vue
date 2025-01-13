<template>
  <!-- <Counter title="entraron" /> -->
   <Indesicion />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Counter from './components/Counter.vue';
import Indesicion from './components/Indesicion.vue';

@Options({
  components: {
    Counter,
    Indesicion
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
