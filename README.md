# Whereabouts

<span style="font-size: 150%; color: #003399">Making the transition from programming to intelligence?</span>

## State of programming languages

According to the [TIOBE index](https://www.tiobe.com/tiobe-index/), `Python` ranks at the top of programming language popularity uncontestedly (21,25% vs. 11,55% for second ranking `C`, `JavaScript` finishing 6th with 3,45%).

The [Github Prgramming languages](https://innovationgraph.github.com/global-metrics/programming-languages) overview draws a different picture. While `Python` still runs strong 2nd place ever since 2020, `JavaScript` is uncontested top with `TypeScript`` catching up 3rd.

Interestingly, [Githubs Octoverse](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/#h-the-state-of-github-in-2025-a-year-of-record-growth) analysis finds the following ranking:
1. `TypeScript`
2. `Python`
3. `JavaScript`<br>...

Taking together, `JavaScript` and `TypeScript` have surpassed `Python` as the most popular programming language.

One can conclude that while `Python` still runs strong due to it's vast library support and widespread use in academic research, it's current status as lingua franca of machine learning and artificial intelligence is challenged.

## Pro's and Con's of `Python` and `JavaScript`

### Pro's

`Python` is available on most desktop operating systems (out of the box). It has a wealth of supporting libraries covering most aspects of programming demands. Its syntax is easy to learn and allows for fast prototyping new ideas. It is well suited for non-time-critical tasks of medium to high complexity.

`JavaScript` is available both embedded in web browsers as well as desktop runtimes. The recent standardization of library management and the wide availablity of desktop runtimes (`node.js`, `bun`, `deno`, ...) with their vast number of supporting libraries support a wide range of programming demands.

All that has already been over-emphasized. It's the

### Con's

and how the languages will address these issues, that probably will influence their respective future importance. Let's start with

#### performance

While both languages are interpreted, `Python` still suffers its huge performance overhead, owned to its type flexibility and most prominently, its global interpreter lock (GIL). Recent versions (3.14, 3.15) address this by introducing just in time (JIT) compilers, native threading and the (optional) removal of the GIL.

`JavaScript` and the `V8` runtime have JIT already, making it run [approximately 10x faster](https://github.com/wrogner/speed_comparison)<sup> *)</sup> than `Python`. Still not native, but a start.

<span style="font-size: 80%">*) There are plenty of speed comparing sites out there, I just wanted to make sure, I could trust them.</span>

#### web availability

`Python` is not web native. Libraries like [Streamlit.io](https://streamlit.io/) allow simple web-based applications (with an emphasis on ___simple___). Medium to complex frameworks

Attempts to run `Python` in a web browser (e.g. [PyScript](https://pyscript.net/) or Transpilers like [Brython](https://www.brython.info/) or [Pyodide](https://pyodide.org/en/stable/)) never made it into mainstream.

However,

#### mobile

is the new web.

Unfortunately, neither `Python` nor `JavaScript` have effective offerings here. Mobile operating systems (Android and iOS) do not provide either run-time out of the box.

#### machine access

`Python` being the clear winner here.

The W3C consortium has a wide set of standards to evade the sandboxed environment of `JavaScript`. Similarly, JS run-times offer security implementations to allow specific applications to access infrastructure at the machine level. However they are not standardized. Each run-time has their own implementation of privileged hardware access.

## Implications on the development of AI

As a long-time Python programmer, AI lecturer and practitioner, I see the limits of `Python` as the lingua franca of ML and AI.

- No matter how well a model is founded on `PyTorch`, this library is not actively developed any more (require stable, versionised devops cycles)
- No matter how accurate a model predicts, no computing centre will provide the resources to operate such a model (require installable, monitorable OoB solutions)
- Client side AI needs to run on mobile phones (notebooks are for baby boomers - like myself)

But, `JavaScript` does not provide that either!

Not yet.

This is where I want to contribute to.<br>
This repo is a start.