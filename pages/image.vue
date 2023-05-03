<template>
  <div class="brk-image">
    <BrkImage
      :src="[
        {
          path: 'https://placekitten.com/800/500',
          width: '300w',
        },
      ]"
      alt="Placeholder"
      sizing=""
    ></BrkImage>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.brk-image {
  width: 100%;
}
</style>