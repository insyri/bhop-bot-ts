# bhop-bot-ts

Rewrite of drumman22's Bhop Bot for the Roblox Bhop / Surf Discord in TypeScript, including legacy functions.

<!---
drumman22, liquidwater0, doge, cool doggo was here
-->

# How to run

## Requirements

bhop-bot-ts is built on Node.js v17.0.1, but it should work for the LTS v16.

[Install Node.js](https://nodejs.org/)

## Setup & Running

1. Clone the repository locally:

```bash
git clone https://github.com/insyri/bhop-bot-ts.git
cd bhop-bot-ts
```

2. Install the dependencies:

```bash
npm i
```

3. Populate the `.env` file;see the `.env.example` file.


### For hosting:

```bash
tsc
node dist
```

### For development testing (live updates):

```bash
tsc -w
```

In another terminal:

```bash
npm i nodemon -D
nodemon dist
```
