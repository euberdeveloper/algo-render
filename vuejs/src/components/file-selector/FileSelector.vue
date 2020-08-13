<template>
  <div class="file-selector">
    <vs-select class="selector" placeholder="SELEZIONA FILE DI INPUT" v-model="internalSelectedFile" @change="$emit('update:selectedFile', internalSelectedFile)" v-if="showSelector">
      <vs-option v-for="option of options" :key="option.path" :label="option.name" :value="option.path">{{option.name}}</vs-option>
    </vs-select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class FileSelector extends Vue {
  /* DATA */

  private internalSelectedFile = '';
  private showSelector = false;

  /* PROPS */

  @Prop({ type: String, required: true })
  selectedFile!: string;

  @Prop({ type: Array, required: true })
  options!: string[];

  /* WATCHERS */

  @Watch('options')
  watchOptions(value: any[]) {
    this.showSelector = value && value.length > 0;
  }

  @Watch('selectedFile')
  watchSelectedFile() {
    this.internalSelectedFile = this.selectedFile;
  }
}
</script>

<style lang="scss" scoped>
$pdtop: 36px;

.file-selector {
  width: 100%;
  padding-top: $pdtop;
  text-align: center;

  .selector {
    display: inline-block;
  }
}
</style>
