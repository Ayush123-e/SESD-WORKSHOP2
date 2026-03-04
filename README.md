# SESD-WORKSHOP2

A command-line tool built with Node.js and TypeScript using the `commander` library. It supports basic math operations, utility commands, and fetches live data from public APIs.

---

## What I Built

This is a CLI (Command Line Interface) tool that runs directly from the terminal. I built it as part of Workshop 2.

The tool supports:

- **Math operations** — add, subtract, multiply, divide, remainder, floor, ceil, square root, power, absolute value
- **Random number generator** — generates a random number between a given range
- **Current time** — prints the current time in 12-hour format
- **API-based commands** — fetches a random joke, fact, advice, or quote from the internet

---

## Tech Stack

- **TypeScript** — main language
- **Node.js** — runtime
- **Commander.js** — for building the CLI interface
- **Public REST APIs** — for joke, fact, advice, quote commands

---

## Project Structure

```
├── cli.ts           # main source file with all commands
├── dist/
│   └── cli.js       # compiled JavaScript output
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## Setup & Run

```bash
# install dependencies
npm install

# compile TypeScript
npx tsc

# run a command
node dist/cli.js <command>
```

---

## Available Commands

| Command | Description | Example |
|---|---|---|
| `hello <name>` | Greets a person | `node dist/cli.js hello Ayush` |
| `sum <x> <y>` | Adds two numbers | `node dist/cli.js sum 5 3` |
| `minus <x> <y>` | Subtracts two numbers | `node dist/cli.js minus 10 4` |
| `times <x> <y>` | Multiplies two numbers | `node dist/cli.js times 3 4` |
| `divide <x> <y>` | Divides two numbers | `node dist/cli.js divide 10 2` |
| `rem <x> <y>` | Remainder of division | `node dist/cli.js rem 10 3` |
| `flr <n>` | Floor of a decimal | `node dist/cli.js flr 4.7` |
| `cl <n>` | Ceil of a decimal | `node dist/cli.js cl 4.2` |
| `squareroot <n>` | Square root of a number | `node dist/cli.js squareroot 16` |
| `pow <b> <e>` | Base raised to exponent | `node dist/cli.js pow 2 8` |
| `abs <n>` | Absolute value | `node dist/cli.js abs -5` |
| `rand <min> <max>` | Random number in range | `node dist/cli.js rand 1 100` |
| `time` | Current time | `node dist/cli.js time` |
| `joke` | Random joke from API | `node dist/cli.js joke` |
| `fact` | Random fact from API | `node dist/cli.js fact` |
| `advice` | Random advice from API | `node dist/cli.js advice` |
| `quote` | Random quote from API | `node dist/cli.js quote` |
