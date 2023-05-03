<template>
  <div>
    <h3>Accordéon</h3>
    <BrkAccordion v-bind="brkAccordionArgs">
      <template #title>
        <BrkTitle
          title="Titre primaire"
          headerSize="h2"
          headerStyle="heading3"
          alignment="center"
          :nbrLimitedLines="0"
          :isHidden="false"
          :inverted="false"
        ></BrkTitle>
      </template>
      <BrkText
        v-bind="brkAccordionArgs.brkTextArgs"
        v-html="brkAccordionArgs.brkTextArgs.textContent"
      />
    </BrkAccordion>
  </div>
</template>

<script setup>
const brkAccordionArgs = {
  a11yLabel: 'Règles du jeu',
  brkTextArgs: {
    textContent: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
          <strong>Cras non <em>augue</em> cursus,</strong> dictum tellus at, <em>interdum ligula.</em></p>
          <ul><li>Nam sed risus quis neque accumsan viverra vel eu nisl.</li><li>Aliquam eget justo aliquet, ultrices dui sit amet, lobortis libero.</li><li>Pellentesque vestibulum enim id nisi aliquam, a finibus metus aliquam.</li><li>Phasellus tincidunt ligula vel lobortis pretium.</li>
          </ul>
          <ol>
            <li>Donec molestie enim et tristique placerat.</li>
            <li>Aenean varius ante nec metus convallis, eget tincidunt leo iaculis.</li>
            <li>Praesent venenatis urna ac nunc tempor, ac tincidunt nisi ornare.</li>
            <li>Curabitur vitae sem a velit eleifend dapibus.</li>
            <li>Nunc ac odio dictum, cursus nibh et, posuere dolor.</li>
            <li>Proin blandit sapien at velit sodales, eu lobortis diam vehicula.</li>
          </ol>
          <p>Nam <strong>suscipit justo</strong> nec bibendum pulvinar.<br>
          Aliquam tempus dolor eget <em>mauris hendrerit volutpat.</em>
          Pellentesque et leo at nunc <a href="#">placerat malesuada</a>.</p>`,
    textStyle: 'body-2',
  },
}
</script>

<style lang="scss" scoped>
.brk-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
