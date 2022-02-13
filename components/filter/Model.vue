<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex filter" v-bind="attrs" v-on="on">
        <div>Модель({{ $store.state.model.length }})</div>
        <v-icon>mdi-menu-down</v-icon>
      </div>
    </template>
    <v-card width="320">
      <div class="pa-5">
        <div>Выберите модели</div>
        <v-form ref="form" @submit.prevent="modelHandler">
          <v-checkbox
            v-model="model"
            value="Yeezy 500"
            label="Yeezy 500"
          ></v-checkbox>
          <hr />
          <v-checkbox
            v-model="model"
            value="Yeezy Boost 500"
            label="Yeezy Boost 500"
          ></v-checkbox>
          <hr />
          <v-checkbox
            v-model="model"
            value="Yeezy Boost 380"
            label="Yeezy Boost 380"
          ></v-checkbox>
          <hr />
          <v-checkbox
            v-model="model"
            value="Ultra Boost"
            label="Ultra Boost"
          ></v-checkbox>
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
      model: [],
      menu: false,
    };
  },
  methods: {
    modelHandler() {
      this.$store.commit("getModel", this.model);
      this.menu = false;
    },
  },
};
</script>