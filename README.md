# algo-render
A simple site to render the datasets samples of the second project of "Algoritmi and Strutture Dati - UNITN"

__link to the site:__ [https://algo-render.herokuapp.com](https://algo-render.herokuapp.com)

## Project introduction:

The second project of "Algoritmi and Strutture Dati - UNITN" consisted in a teams challenge. An alghorithmic problem was proposed and the solutions were to be submitted to a server as a c++ program. The server would have tested the program on different inputs and give points in base of the correctness and efficiency of the solution.

[This](https://github.com/euberdeveloper/algo-render/raw/master/documentation/assignment.pdf) is the link of the assignment (in Italian).

## Project purpose:

We were given twenty sample inputs in order to try our solutions before submiting. But, being the inputs only numbers in a text file, it would have been useful to see them rendered in a grid. Doing that manually was too time-consuming.

This project consists in a server that serves the frontend and the sample input files and in a frontend that makes you select the solution and visualize it in your browser (Desktop only).

## How to use it:

* Go to [https://algo-render.herokuapp.com](https://algo-render.herokuapp.com)
* A select will appear. Select an input sample.
* You will se the rendered input sample.
* If you want to try a solution (an example could be "x x 1 1 DDDRRU", the rules are in the assignment.pdf), you can write it in the text input and click the button MOSTRA (trd. SHOW)
* The solution will be displayed in the grid.
* You can click all the grid cells to select them, in order to try manually solutions or anything else.

<p align="center">
  <img src="https://github.com/euberdeveloper/algo-render/raw/master/documentation/example.gif">
</p>

## How was it made

The server was made with **Node.js** and the frontend with **Vue.js** and **Typescript**. I also used **Vuesax** for the inputs and the button. The site is not perfect because we needed it at the moment and it was developed in a matter of hours.

## How to build it

To build the project:

* Install `Node.js`
* Clone the repository (`git clone https://github.com/euberdeveloper/algo-render`)
* On the root folder of the repo, execute `npm i` to download the node modules
* On the `frontend` folder of the repo, execute `npm i` and `npm run build` to build the frontend
* On the root folder, execute `npm start` to run the server
* With a browser, test the site on `http://localhost:8000`
