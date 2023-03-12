<template>
  <MenuBase />
  <CalcBase />
  <FooterBase />
</template>

<script>
import CalcBase from './components/CalcBase.vue';
import MenuBase from './components/MenuBase.vue';
import FooterBase from './components/FooterBase.vue';

export default {
  name: 'App',
  components: {
    CalcBase,
    MenuBase,
    FooterBase
  }
}
</script>
