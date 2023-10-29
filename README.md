<div align="center">
  <h1>promise-all-batch</h1>
  <p>Call concurrent promises in batches</p>
  <p>    
    <img alt="NPM" src="https://img.shields.io/npm/v/promise-all-batch?style=for-the-badge">
    <img alt="GitHub" src="https://img.shields.io/github/license/avivharuzi/promise-all-batch?style=for-the-badge">
  </p>
  <p>
    <a href="https://github.com/avivharuzi/promise-all-batch/issues">Report Bug</a>
    ·
    <a href="https://github.com/avivharuzi/promise-all-batch/issues">Request Feature</a>
  </p>
</div>

---

## 📖 Table of Contents

- [Installation](#-Installation)
- [Usage](#-Usage)
- [License](#-License)

## 🛠️ Installation

> NOTE: The package is using esm modules!

Install the package locally.

```
npm i promise-all-batch
```

## ⚡️ Usage

```typescript
promiseAllBatch(arr, promiseCallback, size, {
  afterEachComplete,
  sleepBetween,
});
```

Basic example that every 1 second will execute 2 numbers in concurrent.

```typescript
import {promiseAllBatch} from 'promise-all-batch';

const results = await promiseAllBatch(
  [1, 2, 3, 4, 5, 6],
  (index) => new Promise((resolve) => setTimeout(() => resolve(index), 1000)),
  2, // Size of the batch
);

console.log(results); // [1, 2, 3, 4, 5, 6]
```

## 📜 License

[MIT](LICENSE)
