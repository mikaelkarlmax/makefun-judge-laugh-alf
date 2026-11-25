// Make the AI Judge Laugh — one office joke, one line, under 200 characters.
// The joke: a reply-all storm. One "thanks!" to the whole company, then
// 400 people reply-all to beg everyone to stop replying-all. True to office
// life (everyone has lived this), surprising last word ("beg"), tight.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Someone replied-all 'thanks!' to the whole company, and 400 people replied-all to beg everyone to stop replying-all.";

// Gate: the entry must be 1–200 characters, one line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim() || JOKE.includes("\n")) {
  throw new Error(`entry must be 1-200 chars, one line (got ${JOKE.length})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
