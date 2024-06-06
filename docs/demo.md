# Vue Component Template Live Demo

## Live Demo

<div class="demo-container">
  <div class="demo-container-inner">
    <ClientOnly>
      <HelpModeTest
        title="Vue Component Template"
      />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

const HelpModeTest = defineClientComponent(() => {
  return import("../src/components/HelpModeTest.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    <HelpModeTest
      title="Vue Component Template"
    />
  </div>

  <script>
    import HelpModeTest from '@abi-software/help-mode-test'

    export default {
      components: { HelpModeTest },
    }
  </script>
```
