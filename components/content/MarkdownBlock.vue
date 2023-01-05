<!-- This component is used to show Markdown code block examples -->
<template>
  <pre class="entry"><ContentSlot :use="$slots.default" unwrap="p" /></pre>
</template>
