<template>
  <button
    :type="type"
    class="
      text-xs
      inline-flex
      items-center
      justify-center
      px-4
      py-2
      bg-red-500
      border border-transparent
      rounded-md
      font-semibold
      text-white
      uppercase
      tracking-widest
      hover:bg-red-500
      focus:outline-none
      focus:border-red-700
      focus:shadow-outline-blue
      active:bg-red-600
      transition
      ease-in-out
      duration-150
    "
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>