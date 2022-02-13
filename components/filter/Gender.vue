<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex filter" v-bind="attrs" v-on="on">
        <div>Пол</div>
        <v-icon>mdi-menu-down</v-icon>
      </div>
    </template>

    <v-card width="320">
      <div class="pa-5">
        <div>Выберите пол</div>
        <v-form @submit.prevent="genderHandler">
          <v-radio-group v-model="gender">
            <v-radio value="any" label="любой"></v-radio>
            <hr />
            <v-radio value="male" label="мужской"></v-radio>
            <hr />
            <v-radio value="female" label="женский"></v-radio>
            <hr />
            <v-radio value="unisex" label="унисекс"></v-radio>
            <v-btn type="submit" class="mt-3" width="280" height="50" dark
              >Пременить</v-btn
            >
          </v-radio-group>
        </v-form>
      </div>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      gender: "any",
      menu: false,
    };
  },
  methods: {
    genderHandler() {
      this.$store.commit("getGender", this.gender);
      this.menu = false;
    },
  },
};
</script>