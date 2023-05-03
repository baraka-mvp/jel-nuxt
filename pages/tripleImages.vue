<template>
  <div>
    <h3>Une image</h3>
    <div class="brk-triple-images">
      <BrkTripleImages
        :bg="[
          {
            path: 'https://via.placeholder.com/1200/FFC0CB',
            width: '300w',
          },
        ]"
        alt="Placeholder"
      ></BrkTripleImages>
    </div>

    <h3>Deux images</h3>
    <div class="brk-triple-images">
      <BrkTripleImages
        :bg="[
          {
            path: 'https://via.placeholder.com/1200/FFC0CB',
            width: '300w',
          },
        ]"
        alt="Placeholder"
        :character="[
          {
            path: 'https://placekitten.com/800/500',
            width: '300w',
          },
        ]"
      ></BrkTripleImages>
    </div>

    <h3>Trois images</h3>
    <div class="brk-triple-images">
      <BrkTripleImages
        :bg="[
          {
            path: 'https://via.placeholder.com/1200/FFC0CB',
            width: '300w',
          },
        ]"
        alt="Placeholder"
        :character="[
          {
            path: 'https://placekitten.com/500/300',
            width: '300w',
          },
        ]"
        :logo="[
          {
            path: 'https://placekitten.com/200/200',
            width: '300w',
          },
        ]"
      ></BrkTripleImages>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.brk-triple-images {
  margin-left: 10px;
  width: 80%;
}
h3 {
  margin-left: 20px;
}
</style>
