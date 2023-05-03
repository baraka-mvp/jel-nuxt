<template>
  <div>
    <BrkCardSecondaryInfoJackpot
      backgroundColor=""
      format="fr"
      text="Lot progressif"
      totalAmount="5573029"
    ></BrkCardSecondaryInfoJackpot>
    <br />
    <BrkCardSecondaryInfoJackpot
      backgroundColor=""
      format="fr"
      text="Lot progressif"
      totalAmount="5573029"
      :brkImageArgs="brkImageArgs"
    ></BrkCardSecondaryInfoJackpot>
  </div>
</template>

<script setup>
const brkImageArgs = {
  alt: 'Logo mega jackpot',
  src: [{ path: 'https://placekitten.com/200/200', width: '200w' }],
}
</script>

<style lang="scss" scoped></style>
