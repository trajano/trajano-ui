<template>
  <button
    @click="handleClick"
    @mouseover="handleMouseOver"
    @focusin="handleFocusIn"
    @focusout="handleFocusOut"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mouseout="handleMouseOut"
    :class="buttonClasses"
  >
    <!-- @slot Use this slot to place the button content -->
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup(props) {
    const handleClick = () => {};
    const handleMouseOver = () => {};
    return {
      handleClick,
      handleMouseOver,
    };
  },
});
</script>

<style lang="scss" scoped>
/** */
body:not([data-thene="dark"]) {
  color: red;
}
body[data-thene="dark"] {
  color: blue;
}
</style>
