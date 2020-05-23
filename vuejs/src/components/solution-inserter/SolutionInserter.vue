<template>
  <div class="solution-inserter">
     <input class="input" type="search" placeholder="INSERISCI SOLUZIONE/OUTPUT" v-model="internalValue" @input="$emit('update:value', $event.target.value)" />
     <button class="button" @click="$emit('renderSolution')">MOSTRA</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class SolutionInserter extends Vue {
  /* DATA */

  private internalValue = '';

  /* PROPS */

  @Prop({ type: String, required: true })
  value!: string;

  /* WATCHERS */

  @Watch('value')
  watchSelectedFile() {
      this.internalValue = this.value;
  }
}
</script>

<style lang="scss" scoped>
$margintop: 36px;

.solution-inserter {
  width: 100%;
  margin-top: $margintop;
  text-align: center;

  .input {
    width: 400px;
    padding: 4px 7px;
  }

  .button {
    margin-left: 12px;
    padding: 8px;
  }
}
</style>
