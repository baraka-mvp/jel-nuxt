<template>
  <div class="thumbnail">
    <BrkThumbnail>
      <BrkImage v-bind="brkImageArgs" />
      <BrkText v-bind="brkTextArgs" v-html="brkTextArgs.textContent" />
    </BrkThumbnail>
  </div>
</template>

<script setup>
const brkImageArgs = {
  src: [{ path: "https://placekitten.com/300/300", width: "300w" }],
  alt: "Une image",
  sizing: "cover",
};

const brkTextArgs = {
  textContent:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat metus non ligula consequat eleifend. Maecenas fringilla laoreet tempus.</p>",
  textStyle: "caption",
};
</script>

<style lang="scss" scoped>
.thumbnail {
  max-width: 500px;
}
</style>
