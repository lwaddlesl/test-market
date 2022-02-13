<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex filter" v-bind="attrs" v-on="on">
        <div>Размер</div>
        <v-icon>mdi-menu-down</v-icon>
      </div>
    </template>

    <v-card width="320">
      <div class="pa-5">
        <div>Выберите размер</div>

        <v-form ref="form" @submit.prevent="sizeHandler">
          <v-checkbox v-model="size" :value="38" label="38"></v-checkbox>
          <hr />
          <v-checkbox v-model="size" :value="39" label="39"></v-checkbox>
          <hr />
          <v-checkbox v-model="size" :value="40" label="40"></v-checkbox>
          <hr />
          <v-checkbox v-model="size" :value="41" label="41"></v-checkbox>
          <hr />
          <v-checkbox v-model="size" :value="42" label="42"></v-checkbox>
          <hr />
          <v-checkbox v-model="size" :value="43" label="43"></v-checkbox>
          <v-btn type="submit" width="280" height="50" dark>Пременить</v-btn>
        </v-form>
      </div>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      size: [],
      menu: false,
    };
  },
  methods: {
    sizeHandler() {
      this.$store.commit("getSize", this.size);
      this.menu = false;
    },
  },
};
</script>