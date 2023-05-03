<template>
  <BrkText>
    <BrkTextParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      <strong>Cras non <em>augue</em> cursus,</strong> dictum tellus at,
      <em>interdum ligula</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla rhoncus turpis a finibus. Proin suscipit sagittis auctor. Aliquam elementum commodo libero quis auctor. Sed aliquam sem non nisi eleifend, nec scelerisque erat porttitor. In efficitur tincidunt facilisis. Praesent egestas risus eget pulvinar vestibulum. Maecenas id vulputate nisi, et ultricies nibh. Nulla dui urna, tempus iaculis imperdiet at, sollicitudin eget ante. Phasellus accumsan condimentum tortor quis porttitor. Mauris blandit tristique tellus eget cursus. Fusce feugiat sagittis erat id scelerisque.
    </BrkTextParagraph>
    <BrkTextList>
      <li>Nam sed risus quis neque accumsan viverra vel eu nisl.</li>
      <li>
        Aliquam eget justo aliquet, ultrices dui sit amet, lobortis libero.
      </li>
      <li>
        Pellentesque vestibulum enim id nisi aliquam, a finibus metus aliquam.
      </li>
      <li>Avec une sous-liste
        <BrkTextList>
          <li>Nam sed risus quis neque.</li>
          <li>Aenean varius ante nec metus.</li>
          <li>Proin blandit.</li>
        </BrkTextList>
      </li>
    </BrkTextList>
    <BrkTextList variant="ol">
      <li>Donec molestie enim et tristique placerat.</li>
      <li>
        Aenean varius ante nec metus convallis, eget tincidunt leo iaculis.
      </li>
      <li>Praesent venenatis urna ac nunc tempor, ac tincidunt nisi ornare.</li>
      <li>Curabitur vitae sem a velit eleifend dapibus.</li>
      <li>Nunc ac odio dictum, cursus nibh et, posuere dolor.</li>
      <li>Proin blandit sapien at velit sodales, eu lobortis diam vehicula.</li>
    </BrkTextList>
    <BrkTextParagraph caption="true">
      Nam <strong>suscipit justo</strong> nec bibendum pulvinar.<br />
      Aliquam tempus dolor eget <em>mauris hendrerit volutpat.</em> Pellentesque
      et leo at nunc <BrkTextLink link="http://perdu.com">placerat malesuada</BrkTextLink>.
    </BrkTextParagraph>
  </BrkText>
</template>

<script setup>
const textArgs = {
  textStyle: "body-base",
};
</script>
