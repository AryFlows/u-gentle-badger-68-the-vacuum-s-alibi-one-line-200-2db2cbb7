// The Vacuum's Alibi — one line, 200 characters at most.
// Writes the robot vacuum's excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My sensors logged the dust under the sofa as a protected species, so I filed a preservation order and vacuumed around it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check: 1–200 characters, a single line, not only whitespace.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim().length === 0 ||
  line.includes("\n")
) {
  throw new Error(`entry must be 1-200 chars on one line, got ${line.length}`);
}
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
