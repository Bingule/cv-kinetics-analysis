# CV Kinetics Analysis

**b-value analysis · R²-guided regularized Dunn reconstruction · Offline desktop workflow**

[简体中文](README.zh-CN.md) · [Online tool](https://tmccdb.org/tools/cv-kinetics/) · [User guide](docs/HELP.en.md) · [Version history](CHANGELOG.md)

CV Kinetics provides a file-based workflow for cyclic-voltammetry kinetics: inspect complete CV cycles, evaluate b-value regressions, adjust peak points, and visualize regularized capacitive contributions.

If this project is useful to your research workflow, a GitHub star helps others discover it. Please report reproducible problems in [Issues](https://github.com/Bingule/cv-kinetics-analysis/issues).

![Synthetic CV and reconstructed contribution](docs/synthetic-dunn.png)

*Synthetic demonstration data, not an experimental result. Colors match the web tool.*

## Capabilities

- CSV, TXT and XLSX import; explicit XYYYYY or XYXYXY column layout; 3–20 scan rates.
- Original sequential CV order, including forward and reverse branches.
- b-value overview, single-potential regression and editable peak points with branch selection.
- Threshold and continuously R²-weighted Dunn modes, shared-fraction regularization and constrained reconstruction.
- CSV data exports, SVG/PNG figures and selectable table-column copying.
- Bilingual English / Simplified Chinese desktop interface, local processing, offline help and manual updates.
- Desktop packaging targets: Windows x64, macOS Apple Silicon and macOS Intel.

## Try the workflow

The [online version](https://tmccdb.org/tools/cv-kinetics/) remains available. For a desktop copy, contact the maintainer or use the original distribution channel. Desktop packages are not published in this public repository.

1. Download a file from [examples](examples/).
2. Select **XYYYYY**, **first row contains headers**, and import the file.
3. Verify the scan-rate order: **2, 5, 10, 20, 50 mV/s**.
4. Keep the default analysis settings, run analysis and inspect both branches.

All example files describe the same deliberately synthetic dataset. The small [example generator](examples/generate-example.mjs) is provided as public code; it is **not** the analysis engine.

## Methods and limitations

The b-value regression is `log(|i|) = log(a) + b log(v)`.
Local Dunn fits use `i(V) = k1(V) v + k2(V) sqrt(v)`.
The application additionally applies confidence-aware regularization and a shared bounded fraction `g(V)` across sweep branches; this reconstruction is not identical to unconstrained pointwise Dunn fitting.

Treat contributions as model-dependent estimates. Inspect the original curves, fit quality and settings; smoothness alone does not establish a mechanism. Report the software version, R² mode/threshold, units, potential interval and turning-point trim. [Method notes](docs/METHODS.md)

## Repository scope / source requests

This repository intentionally contains **documentation, synthetic examples, screenshots and example-generation code only**. It does not contain the complete desktop/analysis source. The full source is maintained separately and access requests are reviewed individually; a request does not automatically grant access.

To request source access, include your intended use, affiliation if applicable and GitHub username. Do not post confidential experimental files in public issues. [Source access details](SOURCE-ACCESS.md)

Questions / support: **wui@vscht.cz; soferz@vscht.cz**.

Example code has its own [MIT license](examples/LICENSE). No license for the private analysis engine is granted by this public repository.
