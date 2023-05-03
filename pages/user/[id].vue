<template>
<div>
    <h1>User description</h1>
    <p>This is user {{ id }}</p>
</div>
  
</template>

<script setup>

const route = useRoute();
const id = route.params.id


</script>

<style>

</style>