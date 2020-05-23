<template>
  <div class="renderer" :style="componentStyle">
    <template v-if="input">
      <template v-for="(row, i) of input">
        <span
          :class="['cell', cell, selectedClass[i][j]]"
          v-for="(cell, j) of row"
          :key="`${i}-${j}`"
          @click="toggleCell(i, j)"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

import { Cell, Grid, Direction, Path } from "./types";

@Component
export default class Renderer extends Vue {
  /* DATA */

  private internalSelectedFile = "";
  private selectedGrid: boolean[][] | null = null;

  /* PROPS */

  @Prop({ type: String })
  rawInput!: string | null;

  @Prop({ type: String })
  rawSolution!: string | null;

  /* GETTERS */

  get input(): Grid | null {
    let grid: Grid | null;

    if (this.rawInput) {
      grid = [];

      const lines = this.rawInput
        .split("\n")
        .map(line => line.split(" ").map(word => +word));

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
    } else {
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

  get solutionPath(): Path | null {
    let result: Path | null;

    if (this.rawSolution) {
      const words = this.rawSolution.split(/\s+/).slice(2);

      const [x, y] = words.slice(0, 2).map(value => +value);

      const moves = words[2].split("").slice(0, words[2].length - 1).map(move => {
        switch (move) {
          case "U":
            return Direction.TOP;
          case "R":
            return Direction.RIGHT;
          case "D":
            return Direction.DOWN;
          case "L":
            return Direction.LEFT;
        }
      }) as Direction[];

      result = {
        start: { x, y },
        moves
      };
    } else {
      result = null;
    }

    return result;
  }

  get componentStyle(): any {
    const dim =
      this.rows && this.cols && this.rows < 50 && this.cols < 50
        ? "1fr"
        : "10px";

    return {
      "grid-template-rows": this.rows
        ? [...Array(this.rows).keys()].map(() => dim).join(" ")
        : "",
      "grid-template-columns": this.cols
        ? [...Array(this.cols).keys()].map(() => dim).join(" ")
        : ""
    };
  }

  get selectedClass(): any[][] | null {
    return this.selectedGrid
      ? this.selectedGrid.map(row => row.map(cell => (cell ? "selected" : "")))
      : null;
  }

  /* METHODS */

  toggleCell(i: number, j: number): void {
    if (this.selectedGrid) {
      this.selectedGrid[i].splice(j, 1, !this.selectedGrid[i][j]);
    }
  }

  /* WATCHERS */

  @Watch("input")
  watchInput() {
    if (this.input && this.rows && this.cols) {
      this.selectedGrid = [];
      for (let i = 0; i < this.rows; i++) {
        this.selectedGrid.push([]);
        for (let j = 0; j < this.cols; j++) {
          this.selectedGrid[i].push(false);
        }
      }
    } else {
      this.selectedGrid = null;
    }
  }

  @Watch("solutionPath")
  watchSolutionPath() {
    if (this.solutionPath && this.selectedGrid) {
      let {x: i, y: j} = this.solutionPath.start;
      this.selectedGrid[i][j] = true;

      for (const move of this.solutionPath.moves) {
        switch (move) {
          case Direction.TOP:
            i--;
            break;
          case Direction.RIGHT:
            j++;
            break;
          case Direction.DOWN:
            i++;
            break;
          case Direction.LEFT:
            j--;
            break;
        }
        this.selectedGrid[i].splice(j, 1, true);
      }
    }
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
  .cell.selected {
    background: #5a5fff;
  }
}
</style>
