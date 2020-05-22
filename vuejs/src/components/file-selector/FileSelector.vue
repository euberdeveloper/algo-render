<template>
  <div class="file-selector">
     <select class="selector" v-model="internalSelectedFile" @change="$emit('update:selectedFile', $event.target.value)">
         <option value="">SELEZIONA FILE DI INPUT</option>
         <option v-for="option of options" :key="option.path" :value="option.path">{{option.name}}</option>
     </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class FileSelector extends Vue {
  /* DATA */

  private internalSelectedFile = '';

  /* PROPS */

  @Prop({ type: String, required: true })
  selectedFile!: string;

  @Prop({ type: Array, required: true })
  options!: string[];

  /* WATCHERS */

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
}
</style>
