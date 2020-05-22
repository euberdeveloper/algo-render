<template>
  <div class="renderer" :style="componentStyle">
    
    <template v-if="input">

      <template v-for="(row, i) of input">
        <span 
          :class="['cell', cell]" 
          :style="cellsStyle[i][j]"
          v-for="(cell, j) of row" 
          :key="`${i}-${j}`"
          @click="toggleCell(i, j)" /> 
      </template>

    </template>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

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
  private selectedCells: { i: number; j: number }[] = [];

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

  get cellsStyle(): any[][] | null {
    const style = {
      background: '#5a5fff'
    };

    return this.input ? this.input.map((row, i) => 
      row.map((_, j) => this.selectedCells.find(el => el.i == i && el.j == j) ? style : '')
    ) : null;
  }

  /* METHODS */

  toggleCell(i: number, j: number): void {
    const index = this.selectedCells.findIndex(el => el.i == i && el.j == j);
    if (index === -1) {
      this.selectedCells.push({ i, j });
    }
    else {
      this.selectedCells.splice(index, 1);
    }
  }

  /* WATCHERS */
  @Watch('rawInput')
  watchRawInput() {
    this.selectedCells = [];
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
    background: #9a9dff;
  }
  .cell.black {
    background: black;
  }
  .cell.white {
    background: white;
  }

}
</style>
