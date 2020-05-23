<template>
  <div class="main-view">
    <file-selector class="selector" :selectedFile.sync="selectedFile" :options="options" />
    <solution-inserter class="inserter" :value.sync="proposedSolution" @renderSolution="onRenderedSolution" v-if="selectedFile" />{{proposedSolution}}
    <renderer class="renderer" :rawInput="input" :rawSolution="renderedSolution" />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import axios from 'axios';

import FileSelector from './file-selector/FileSelector.vue';
import SolutionInserter from './solution-inserter/SolutionInserter.vue';
import Renderer from './renderer/Renderer.vue';

@Component({
  components: {
    FileSelector,
    SolutionInserter,
    Renderer
  }
})
export default class MainView extends Vue {
  /* DATA */

  private input: string | null = null;
  private proposedSolution = '';
  private selectedFile = '';
  private options = [];
  private renderedSolution = '';

  /* GETTERS */

  get host(): string {
    return `https://algo-render.herokuapp.com`;
  }

  /* LIFECYCLE */

  async mounted() {
    try {
      this.options = (await axios.get(`${this.host}/files-list`)).data;
    }
    catch (error) {
      alert(`Error in retrieveing files list`);
      console.error(`Error in retrieveing files list`, error);

      this.options = [];
    }
  }

  /* WATCHERS */

  @Watch('selectedFile')
  async watchSelectedFile() {
    try {
      this.input = (await axios.get(`${this.host}/input?file=${this.selectedFile}`)).data;
    }
    catch (error) {
      alert(`Error in retrieveing ${this.host}`);
      console.error(`Error in retrieveing ${this.host}`, error);

      this.input = null;
    }
  }

  /* METHODS */

  onRenderedSolution(): void {
    this.renderedSolution = this.proposedSolution;
    this.proposedSolution = '';
  }


}
</script>

<style lang="scss" scoped>
.main-view {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .renderer {
    flex: 1;
  }

}
</style>
