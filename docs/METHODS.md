# Method notes

This software combines established regression forms with application-specific regularized reconstruction. It should not be described as unmodified conventional Dunn analysis.

## b value

`log(|i|) = log(a) + b log(v)` is evaluated using the same sweep branch across scan rates. Near-zero-current stability is checked separately from the R² quality threshold. A slope outside 0.5–1.0 is not automatically forced into that range; its interpretation needs care.

## Dunn and shared fraction

Local regressions use `i(V) = k1(V) v + k2(V) sqrt(v)`. The application regularizes a bounded shared capacitive fraction `g(V)` using confidence information and smoothness. Both branches use the same fraction at a given potential. The final constrained reconstruction, rather than raw local fit coefficients alone, determines the displayed contribution.

Threshold mode uses R² to identify trusted-anchor confidence; weighted mode uses continuous confidence. These modes do not replace b-value quality filtering. Sparse trusted anchors require caution even when a regularized curve appears smooth.

## Reporting

Record software version, input/current units, scan-rate order, b-value method (peak or potential), manual peak adjustments, R² threshold/mode, potential interval, turning-point trim and exported contribution calculation. Keep the input file and exported tables. Avoid interpreting a regularized area percentage as unique proof of a microscopic mechanism.

The desktop edition derives from the [TMCCdb CV tool](https://tmccdb.org/tools/cv-kinetics/). Version 1.0.0 preserves scientific library files from tmcc-database commit `986ac50b6db22f148ca45ba756506d16175eaf71`; its desktop interface and packaging are separate.
