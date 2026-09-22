<!-- คัดลอกทั้งหมดตั้งแต่บรรทัดถัดไป ไปวางใน issue ใหม่บน fork ของท่าน -->

**Title:** Add unit tests for the calculator

**Body:**

`05_mini_challenge/calculator/script.js` implements a working calculator but has
no tests at all. Add unit tests for its logic.

Scope:

- Cover the four arithmetic operations, the decimal point, clear, and backspace.
- Cover the error path: dividing by zero must produce the calculator's error
  state rather than `Infinity` or `NaN`.
- Cover at least two sequences of operations, not just single calculations.

Constraints:

- Use a test runner that needs no new service and no network — plain `node:test`
  is fine, Jest is fine if you add it to a `package.json` inside the calculator
  folder.
- Do not change the calculator's behaviour. If a test exposes a real bug, leave
  the behaviour alone and describe the bug in the pull request instead.
- Do not touch any file outside `05_mini_challenge/calculator/`.

Done when: the tests run with a single documented command and they pass.
