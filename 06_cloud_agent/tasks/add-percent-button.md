<!-- คัดลอกทั้งหมดตั้งแต่บรรทัดถัดไป ไปวางใน issue ใหม่บน fork ของท่าน -->

**Title:** Add a percent button to the calculator

**Body:**

Add a `%` button to the calculator in `05_mini_challenge/calculator/`.

Behaviour: `%` divides the number currently on the display by 100 and shows the
result immediately. `50 %` shows `0.5`. It does not wait for another operand.

Scope:

- `index.html` — the button, placed in the action pad next to `C` and `⌫`.
- `style.css` — it must match the existing action-pad styling, not introduce a
  new colour.
- `script.js` — the behaviour, plus keyboard support consistent with the keys
  already handled there.

Constraints:

- Read the existing code first and follow its patterns. Do not restructure it.
- No new dependencies, no build step. It stays a plain HTML/CSS/JS page.
- Do not touch any file outside `05_mini_challenge/calculator/`.

Done when: opening `index.html` in a browser, both clicking `%` and pressing the
matching key give the right answer, and the button does not look bolted on.
