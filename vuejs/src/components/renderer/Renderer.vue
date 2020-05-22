<template>
  <div class="renderer" :style="componentStyle">
    
    <template v-if="input">

      <template v-for="(row, i) of input">
        <span :class="['cell', cell]" v-for="(cell, j) of row" :key="`${i}-${j}`"></span> 
      </template>

    </template>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

enum Cell {
  EMPTY = 'empty',
  BLACK = 'black',
  WHITE = 'white'
}

type Grid = Cell[][];

@Component
export default class Renderer extends Vue {
  /* DATA */

  private internalSelectedFile = '';

  /* PROPS */

  @Prop({ type: String, required: false })
  rawInput!: string | null;

  /* GETTERS */

  get input(): Grid | null {
    let grid: Grid | null;

    if (this.rawInput) {
      grid = [];

      const lines = this.rawInput
        .split('\n')
        .map(line => line.split(' ')
          .map(word => +word)
        );
      
      const [N, M, B, W] = lines.shift() as any;
      
      for (let i = 0; i < N; i++) {
        grid.push([]);

        for (let j = 0; j < M; j++) {
          grid[i].push(Cell.EMPTY);
        }
      }

      for (let i = 0; i < B; i++) {
        const [x, y] = lines.shift() as any;
        grid[x][y] = Cell.BLACK;
      }
      for (let i = 0; i < W; i++) {
        const [x, y] = lines.shift() as any;
        grid[x][y] = Cell.WHITE;
      }
    }
    else {
      grid = null;
    }    
    
    return grid;
  }

  get rows(): number | null {
    return this.input ? this.input.length : null;
  }
  get cols(): number | null {
    return this.input && this.rows ? this.input[0].length : null;
  }

  get componentStyle(): any {
    const dim = this.rows && this.cols && this.rows < 50 && this.cols < 50 ? '1fr' : '10px';

    return {
      'grid-template-rows': this.rows ? [...Array(this.rows).keys()].map(() => dim).join(' ') : '',
      'grid-template-columns': this.cols ? [...Array(this.cols).keys()].map(() => dim).join(' ') : ''
    };
  }

}
</script>

<style lang="scss" scoped>
$margin: 36px;
$size: 80vh;

.renderer {
  margin: $margin;

  min-width: 80vh;
  min-height: 80vh;
  display: grid;

  .cell {
    border: 1px solid #0436fc;
  }
  .cell.empty {
    background: #6d89ff;
  }
  .cell.black {
    background: black;
  }
  .cell.white {
    background: white;
  }

}
</style>
