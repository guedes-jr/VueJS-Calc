<template>
  <MenuBase />
  <CalcBase />
  <MenuLateral />
  <FooterBase />
</template>

<script>
import CalcBase from './components/CalcBase.vue';
import MenuBase from './components/MenuBase.vue';
import FooterBase from './components/FooterBase.vue';
import MenuLateral from './components/MenuLateral.vue';

export default {
  name: 'App',
  components: {
    CalcBase,
    MenuBase,
    FooterBase,
    MenuLateral
  }
}
</script>
