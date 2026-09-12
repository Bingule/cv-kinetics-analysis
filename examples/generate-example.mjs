// Synthetic demonstration only; not experimental or publication data.
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
export const rates = [2, 5, 10, 20, 50];
export function exampleRows() {
  const rows = [['Potential (V)', ...rates.map(rate => `Current (A) ${rate} mV/s`)]];
  for (let n = 0; n <= 200; n++) {
    const potential = n <= 100 ? n / 100 : 2 - n / 100;
    const sign = n <= 100 ? 1 : -1;
    const shape = Math.sin(Math.PI * potential);
    rows.push([potential, ...rates.map(rate => Number((sign * shape *
      (0.00001 * rate + 0.00004 * Math.sqrt(rate) * Math.exp(-(((potential - 0.5) / 0.3) ** 2)))).toPrecision(12)))]);
  }
  return rows;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const output = resolve(process.argv[2] ?? 'examples'); mkdirSync(output, { recursive: true });
  const rows = exampleRows();
  writeFileSync(resolve(output, 'synthetic-CV.csv'), rows.map(row => row.join(',')).join('\r\n'));
  writeFileSync(resolve(output, 'synthetic-CV.txt'), rows.map(row => row.join('\t')).join('\r\n'));
}
