<template>
<nuxt-img
  provider="imagekit"
  src="/medium_cafe_B1iTdD0C.jpg"
  :modifiers="modifiers"
/>

</template>

<script>
  export default {
    data() {
      return {
        modifiers: {
          overlayText: 'overlay made easy',
          overlayRadius: 30,
          overlayTextBackground: 'FFFFFF80',
          overlayTextFontSize: '45',
          overlayTextColor: '000000',
          overlayTextPadding: '40',
          overlayTextTypography: 'i'
        }
      }
    }
  }
</script>