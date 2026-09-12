# Offline help

## 1. Import a file

Select XYYYYY (one shared potential column) or XYXYXY (a potential/current pair per scan rate), then choose a CSV, TXT or XLSX file. Set whether the first row is a header or numeric data. XLSX uses the first usable worksheet. Keep the original CV scan order, including the return branch; do not sort by potential. Up to 20 scan rates are supported.

## 2. Units and scan rates

Potential is in V; enter scan rates in mV/s, in exactly the same order as the current columns. Use one consistent current unit (A) across the file; do not mix A and mA. Header values may suggest rates: check them before analysis. TXT supports tab, comma, semicolon or consistent whitespace delimiters.

## 3. Run analysis

Start with Auto potential interval and Auto turning-point trim. Inspect the preview and rates, then Run analysis. Changing import format or header mode reparses the selected file. Save exported results before closing: raw data and analysis sessions are not saved automatically.

## 4. b-value and peak adjustment

The regression is log(|i|) = log(a) + b log(v). The R² threshold and near-zero-current stability checks remain separate quality criteria. In peak mode, Add peak lets you select the sweep branch; place and confirm the corresponding measured point at each scan rate. Do not force a peak where the data do not support one. Review low-quality or missing points.

## 5. Dunn reconstruction

Conventional local fits use i(V) = k1(V) v + k2(V) sqrt(v). Confidence-aware regularization then estimates one shared g(V), with 0 ≤ g(V) ≤ 1, and i_cap,f/r(V) = g(V) i_raw,f/r(V). Threshold mode (default R² = 0.95) uses trusted-anchor confidence; weighted mode uses continuous R² confidence. These modes do not change b-value quality filtering. The regularized reconstruction is not identical to the unconstrained pointwise Dunn fit.

## 6. Interpretation and export

Review fit quality, both branches and the original CV. The regularized capacitive fraction is model-dependent, not a uniquely measured mechanism. Export CSV tables or SVG/PNG figures, or tick column-header boxes and copy selected columns. Use the current chart and its matching exported reconstruction when reporting contributions. Record the version, units, R² mode/threshold, grid interval and turning-point trim in your methods.

## 7. Troubleshooting

If import fails, check the chosen layout, number of numeric columns, first-row setting and decimal separators. Try saving the first worksheet as a normal .xlsx or UTF-8 CSV. Different scan rates must have compatible cycle branches/directions and a common potential range. Visible errors should be resolved rather than hidden by changing thresholds.

## 8. Offline use and updates

The application contains its runtime and processes files locally. It has no cloud analysis or telemetry. Help and release notes work offline. Manual updates replace the application; keep your input files and exports separately. Unsigned packages may trigger operating-system warnings; only use packages from a source you trust.

## Questions or support

wui@vscht.cz; soferz@vscht.cz

Updates are manual. This button opens your browser and needs internet. No automatic checks, downloads, activation or data upload. Obtain replacement packages from your original distributor.
