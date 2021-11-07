# bhop-bot-ts

Rewrite of drumman22's Bhop Bot for the Roblox Bhop / Surf Discord in TypeScript, including legacy functions.

<!---
drumman22, liquidwater0 was here
-->

# How to run

## Requirements

bhop-bot-ts is built on node.js v17.0.1, but it should work for LTS v16.

[install nodejs](https://nodejs.org/)

## Setup & Running

Clone the repository locally:

```bash
git clone https://github.com/insyri/bhop-bot-ts.git
cd bhop-bot-ts
```

Install the dependencies:

```
npm i
```

Populate the `.env` file, see the `.env.example` file.

Compile:

```
tsc -w
```

Run:

```
nodemon dist
```
