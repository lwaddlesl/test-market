<template>
  <div class="slected-filter mb-7">
    <v-chip
      v-if="chip1"
      class="slected-filter__item ma-2"
      close
      close-icon="mdi-close"
      outlined
      color="gray"
      @click:close="closeAll"
    >
      Очитить Все
    </v-chip>

    <v-chip
      v-if="chip2"
      class="slected-filter__item ma-2"
      close
      close-icon="mdi-close"
      outlined
      color="gray"
      @click:close="chip2 = false"
    >
      Новинки
    </v-chip>

    <v-chip
      v-if="chip3"
      class="slected-filter__item ma-2"
      close
      close-icon="mdi-close"
      outlined
      color="gray"
      @click:close="chip3 = false"
    >
      Кроссовки
    </v-chip>

    <v-chip
      v-if="chip4"
      class="slected-filter__item ma-2"
      close
      close-icon="mdi-close"
      outlined
      color="gray"
      @click:close="chip4 = false"
    >
      Nike
    </v-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    };
  },
  methods: {
    closeAll() {
      this.chip1 = false;
      this.chip2 = false;
      this.chip3 = false;
      this.chip4 = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.slected-filter__item:hover {
  outline: 1px solid #84a2fc;
}
</style>