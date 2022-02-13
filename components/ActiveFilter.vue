<template>
  <v-chip
    v-if="chip"
    class="active-filter__item ma-2"
    close
    close-icon="mdi-close"
    outlined
    color="gray"
    @click:close="chip = false"
  >
    {{ name }}
  </v-chip>
</template>
<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      chip: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.active-filter__item:hover {
  outline: 1px solid #84a2fc;
}
</style>