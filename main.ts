// Monday mornings: even the things that follow you everywhere try to dodge the week.
// Angle: Monday is so unwelcome that even your own shadow — the one thing that never leaves you — files a transfer request to Friday.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "On Monday mornings, even my shadow clocks in late and asks HR for a transfer to Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
