# Requirements for AI programming in JS

Python is the lingua franca for ML programming. It provides a wide range of versatile
and functional libraries. Pythons vasatility is payed by its weak performance.

First tests with JS have shown increased performance on simple tasks.
Programming requires different paradigms but the result could be a set of libraries
that cover a similar range of functionality as Python at a higher performance.

This project aims to create a set of libraries that support ML development in JS*.


<span style="font-size: 80%">*) ... following Axel Rauschmayer, JS being a replacement term for JavaScript (which is an Oracle TM)</span>

<br>

To achieve this, we look for

#### substitution for:

<!-- https://www.w3schools.com/charsets/ref_utf_symbols.asp -->
<!--
checkbox    &#9744;
tagged      &#9744;
crossed     &#9746;
star-filled &#9733;
star        &#9734;
-->

| Library | Description | last<br>update | Repo | local | Other links | Rating |
| :------ | :---------- | ---: | :--- | ----- | :---------- | ------ |
| **Numpy** |
| **[numpy.ts](https://numpyts.dev/)** | numpy implementation in TS/JS | 2026 | https://github.com/dupontcyborg/numpy-ts | &#9744; |  | &#9733;&#9733;&#9733;&#9733;&#9733; |
| **[math.js](https://mathjs.org/)** | math library | 2026 | https://github.com/josdejong/mathjs | &#9744; | ReST: https://api.mathjs.org/ | &#9733;&#9733;&#9733;&#9734;&#9734; |
| - [mathsteps](https://github.com/google/mathsteps) | solver | 2021 | | &#9744; | https://www.youtube.com/watch?v=iCrargw1rrM , https://socratic.org | &#9734;&#9734;&#9734;&#9734;&#9734; |
| - ~~[mathjs‑expression‑parser](https://github.com/josdejong/mathjs-expression-parser)~~ | ~~math expression parser~~ | ~~2021~~ | | &#9744; | deprecated -> math.js | &#9734;&#9734;&#9734;&#9734;&#9734; |
| - [mathjs-simple-integral](https://github.com/joelahoover/mathjs-simple-integral) | simple integral for math.js | 2017 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| - [math.diff.js](https://github.com/hausen/math.diff.js) | symbolic derivatives | 2015 | | &#9744; | https://rawgit.com/hausen/math.diff.js/master/demo.html | &#9734;&#9734;&#9734;&#9734;&#9734; |
| - ~~[postcss-math](https://github.com/shauns/postcss-math)~~ | ~~calculations in math.js~~ | ~~2015~~ | | &#9746; | work in progress | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [bignumber.js](https://mikemcl.github.io/bignumber.js/) | arbitrary-precision arithmetic | 2026 | https://github.com/MikeMcl/bignumber.js | &#9744; | [big.js](https://github.com/MikeMcl/big.js/)<br>[decimal.js](https://github.com/MikeMcl/decimal.js/) | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [p5.js](https://p5js.org/) | wrapper library for advanced JS | 2024 | https://github.com/processing/p5.js | &#9744; | https://github.com/processing | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [CortexJS](https://github.com/cortex-js) | math libraries | 2024 | https://github.com/cortex-js/compute-engine | &#9744; | https://cortexjs.io/ | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [expression-master](https://github.com/Yaffle/Expression) | simplify and solve linear equations | 2023 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [scijs](https://github.com/scijs) | array manipulation | 2023 | | &#9744; | https://scijs.net/packages/<br>https://scijs.net/packages/#scijs/scijs-ndarray-for-matlab-users | &#9733;&#9733;&#9733;&#9734;&#9734; |
| [ndarray](https://github.com/scijs/ndarray) | ndarray for JS | 2022 | https://github.com/scijs | &#9744; | https://github.com/scijs/ndarray/wiki/ndarray-module-list#core-module | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [math-expression-evaluator](https://github.com/bugwheels94/math-expression-evaluator) | evaluate math expressions | 2022|  | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [decimal.js](https://github.com/MikeMcl/decimal.js/) | arbitrary-precision Decimal type | 2022 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [Algebrite](https://github.com/davidedc/Algebrite) | symbolic algebra | 2021 | | &#9744; | http://algebrite.org/ | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [nerdamer-prime](https://github.com/together-science/nerdamer-prime) | symbolic math | 2021 | | &#9744; | ~~https://nerdamer.com/~~<br>~~https://github.com/jiggzson/nerdamer~~ | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [numbers.js](https://github.com/numbers/numbers.js) | advanced math toolkit | 2018| | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [linear-algebra-js](https://rohan-sawhney.github.io/linear-algebra-js/) | optimized linear algebra | 2018 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [algebra.js](https://github.com/nicolewhite/algebra.js) | algebraic expression solver | 2017 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [numeral.js](http://numeraljs.com/) | formatting and manipulating numbers | 2017 | https://github.com/adamwdraper/Numeral-js | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [numeric.js](https://github.com/sloisel/numeric) | numerical analysis | 2012 | | &#9744; | https://www.npmjs.com/package/numeric<br>https://ccc-js.github.io/numeric2/<br>http://groups.google.com/group/numericjs  | &#9734;&#9734;&#9734;&#9734;&#9734; |
| **Pandas** |
| [danfo.js](https://danfo.jsdata.org/) | manipulate and process structured data | 2025 | https://github.com/javascriptdata/danfojs | &#9744; | https://www.npmjs.com/package/danfojs-node | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [arquero](https://github.com/uwdata/arquero) | query processing and transformation of array-backed data tables | 2024 | | &#9744; | https://idl.uw.edu/arquero/ | &#9734;&#9734;&#9734;&#9734;&#9734; |
| **matplotlib** |
| **[plotly.js](https://plotly.com/javascript/)** | high-level, declarative charting library | 2026 | https://github.com/plotly/plotly.js | &#9744; | | &#9733;&#9733;&#9733;&#9733;&#9734; |
| [Apache ECharts](https://echarts.apache.org/) | Open Source JS Visualization Library | 2025 | https://github.com/apache/echarts | &#9744; | https://github.com/apache?q=echart&type=all&language=&sort= | &#9733;&#9733;&#9733;&#9733;&#9734; |
| [ObservableHQ](https://observablehq.com/) | JS dashboard library (D3 based) | 2024 | https://github.com/observablehq/plot | &#9744; | | &#9733;&#9733;&#9733;&#9734;&#9734; |
| [Chart.js](https://chartjs.org/) | Simple yet flexible JS charting library | 2024 | https://github.com/chartjs/Chart.js | &#9744; | | &#9733;&#9733;&#9733;&#9734;&#9734; |
| [plotly.js](https://plotly.com/javascript/) | high-level, declarative charting library | 2025 | https://github.com/plotly/plotly.js | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [Three.js](https://threejs.org/) | cross-browser, general-purpose 3D library | 2024 | https://github.com/mrdoob/three.js/ | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [d3.js](https://d3js.org/) | low-level visualization library | 2024 | https://github.com/d3 | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| **scikit-learn** |
| [ml5.js](https://ml5js.org/) | Friendly machine learning for the web | 2024 | https://github.com/ml5js/ml5-library | &#9744; | https://github.com/ml5js<br>https://github.com/ml5js/ml5-next-gen | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [scikit.js](https://github.com/javascriptdata/scikit.js) | typescript port of scikit-learn | 2022 | | &#9744; | https://github.com/javascriptdata/scikit.js/blob/main/README.md<br>https://www.npmjs.com/package/scikitjs | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [Data-aRT](https://github.com/javascriptdata/Data-aRT) | no code data visualisation, analysis | 2021 | | &#9744; | https://data-a-1w5htm2xq-steveoni.vercel.app/ | &#9734;&#9734;&#9734;&#9734;&#9734; |
| **Tensors** |
| [tensorflow.js](https://www.tensorflow.org/js) | hardware-accelerated JS library for training and deploying machine learning models | 2024 | https://github.com/tensorflow/tfjs | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [js-pytorch](https://github.com/eduardoleao052/js-pytorch) | DL JS library | 2024 | | &#9744; | https://eduardoleao052.github.io/js-pytorch/site/index.html | &#9734;&#9734;&#9734;&#9734;&#9734; |
| **Highlevel libraries** |
| **[transformers.js](https://huggingface.co/docs/transformers.js/index)** | Run Transformers directly in your browser, with no need for a server | 2026 | https://github.com/huggingface/transformers.js | &#9744; | https://huggingface.co/docs/transformers.js/index<br>https://github.com/huggingface/transformers.js-examples | &#9733;&#9733;&#9733;&#9733;&#9733; |
| [neuralnetwork](https://jsr.io/@am/neuralnetwork) | Simple neural network library | 2025 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [NEAT Neural Network for Deno](https://jsr.io/@stsoftware/neat-ai) | Implementation of a neural network based on the NEAT (NeuroEvolution of Augmenting Topologies) algorithm | 2025 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [neurons](https://jsr.io/@sauber/neurons) | Implementation of neural network inspired by Micrograd | 2025 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| |
| **Runtime** |
| **[Deno](https://deno.com)** | Deno language server | 2026 | https://github.com/denoland/deno/ | &#9744; | https://formulae.brew.sh/formula/deno | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [Dnotebook](https://github.com/javascriptdata/dnotebook) | notebook like web pages | 2022 | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| |
| **Miscellaneous** |
| [MathJax](https://www.mathjax.org) | JS display engine for mathematics | 2025 | https://github.com/mathjax/MathJax-src | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [Image.js](https://docs.image-js.org/) | PIL/Pillow -> Image processing in JS | 2025 | https://github.com/image-js/image-js | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
| [MediaBunny](https://mediabunny.dev/) | Media processing in JS | 2025 | https://github.com/Vanilagy/mediabunny | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
<!--
| []() | | | | &#9744; | | &#9734;&#9734;&#9734;&#9734;&#9734; |
-->

  Table: scipy substitutes in JS


## Goal:

Target: create a simple NN to solve MNIST numbers and fashion datasets.

## First / Next steps

- [x] create Tensor class foundation
  - [x] Tensor extends Array with embedded Array (as is)
  - [x] Tensor extends Array, forwards array
  - [x] create pure Tensor -> currently best solution
  - [ ] create Tensor using SharedArrayBuffers
- [ ] create src and test structure
- [ ] create github repo
- [ ] eval [deno language server](https://deno.com/)

