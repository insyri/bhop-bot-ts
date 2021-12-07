# bhop-bot-ts

Rewrite of drumman22's Bhop Bot for the Roblox Bhop / Surf Discord in TypeScript, including legacy functions.

## Technologies:

[![](https://shields.io/badge/Typescript-05122A?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/) [![](https://shields.io/badge/Node.js-05122A?logo=node.js&style=for-the-badge)](https://nodejs.org/) [![](https://shields.io/badge/detritusjs-05122A?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MzQgODM0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxwYXRoIGQ9Ik04MzMuMzMzLDQxNi42NjdsLTQxNi42NjYsNDE2LjY2NmwtNDE2LjY2NywtNDE2LjY2Nmw0MTYuNjY3LC00MTYuNjY3bDQxNi42NjYsNDE2LjY2N1ptLTI2OC4xMzcsLTEwNS4zOTNjMCwtMzcuNTgxIC0xMy44ODksLTY4Ljg3MiAtNDEuNjY3LC05My44NzJjLTI3Ljc3NywtMjUgLTYxLjYwMSwtMzcuNSAtMTAxLjQ3LC0zNy41Yy00OC4wMzksLTAgLTg5Ljg2OSw3LjM1MyAtMTI1LjQ5LDIyLjA1OGwtOC44MjQsODcuNzQ2YzI3LjEyNCwtMTcuMzIgNTcuMDI2LC0yNS45ODEgODkuNzA2LC0yNS45ODFjMjQuNTEsMCA0NC43NzEsNi43IDYwLjc4NCwyMC4wOThjMTYuMDEzLDEzLjM5OSAyNC4wMiwzMS4wNDYgMjQuMDIsNTIuOTQyYy0wLDIzLjg1NiAtMTMuODA3LDU0LjAwMyAtNDEuNDIyLDkwLjQ0MWMtMjcuNjE0LDM2LjQzOCAtNDEuNDIxLDczLjYxMSAtNDEuNDIxLDExMS41MTlsNzQuNTEsMGMtMCwtMTcuNjQ2IDkuNjQsLTM4LjM5OCAyOC45MjEsLTYyLjI1NWMzMi42OCwtNDAuNTIyIDUwLjQ5LC02My4yMzUgNTMuNDMyLC02OC4xMzdjMTkuMjgxLC0zMC43MTkgMjguOTIxLC02My4wNzIgMjguOTIxLC05Ny4wNTlabS05MS42NjcsMzgzLjgyNGwwLC0xMDIuOTQxbC0xMTMuNzI1LDBsLTAsMTAyLjk0MWwxMTMuNzI1LDBaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvc3ZnPg==&style=for-the-badge)](https://www.npmjs.com/package/detritus-client)

<!--
[![](https://shields.io/badge/Oracle%20Cloud%20Infrastructure-05122A?logo=oracle&logoColor=F80000&style=for-the-badge)](https://www.oracle.com/cloud/) [![](https://shields.io/badge/Prisma-05122A?logo=prisma&style=for-the-badge)](https://prisma.io/) [![](https://shields.io/badge/PostgreSQL-05122A?logo=postgresql&style=for-the-badge)](https://postgres.org/)
-->

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
# install dependencies
npm i
# create and populate env
mv .env.example .env
code .env
```

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
