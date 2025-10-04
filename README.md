# basefold

TSX-based physical world engineering, using the same premise as [tscircuit](https://github.com/tscircuit/tscircuit).

```tsx
import { gears, assembly } from "basefold"

export default () => (
  <assembly.GearAssembly>
    <gears.rackAndPinion pitch={1} toothCount={20} />
  </assembly.GearAssembly>
)
```
