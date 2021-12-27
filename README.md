# cli-file-viewer

## How to use?

### Global Install

```bash
yarn global add cli-file-viewer
# then
# if you wanna preview current dir file content with utf-8 encoding , you can exec
cfv

cfv [path]
```

### Use with js/ts code

```js
// esm
import { preview } from 'cli-file-viewer'
// cjs
const { preview } = require('cli-file-viewer')

preview(targetPath:string)
```

## Result

```bash
[File Content]

[page]:17/17 [filename]:yarn.lock (prev: '← ↑' next: '→ ↓' ESC: 'ctrl + c')
```
