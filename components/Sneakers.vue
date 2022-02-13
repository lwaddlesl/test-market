<template>
  <v-row>
    <v-col
      v-for="s in $store.state.sneakers.sneakers"
      :key="s.id"
      cols="4"
      lg="3"
    >
      <v-card min-height="325">
        <div class="heart">
          <v-btn icon>
            <v-icon>mdi-cards-heart-outline</v-icon>
          </v-btn>
        </div>
        <div class="sneakers__images">
          <img
            width="200px"
            max-height="120px"
            :src="require(`~/static/sneakers-img/${s.img_name}.png`)"
          />
        </div>

        <div class="discrption">
          <div class="price">{{ s.price.toLocaleString() }} руб.</div>
          <div class="sneakers-name">
            {{ s.name }}
          </div>
          <div class="special" v-if="s.special">
            <v-chip
              class="mb-1"
              text-color="white"
              label
              color="#84A2FC"
              v-if="s.special.new == 'true'"
            >
              Новинка
            </v-chip>
            <v-chip
              class="mb-1"
              text-color="#7CD010"
              label
              color="#E1F5C7"
              v-if="s.special.recomend == 'true'"
            >
              96% рекомендуют
            </v-chip>
            <v-chip
              class="mb-1"
              label
              text-color="white"
              color="#EA7373"
              v-if="s.special.fast_delivery == 'true'"
            >
              Экспресс-доставка
            </v-chip>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.sneakers__images {
  display: flex;
  align-items: center;
  justify-content: center;
}
.heart {
  top: 10px;
  position: absolute;
  left: 85%;
}
.price {
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
}
.sneakers-name {
  font-size: 16px;
  margin-top: 12px;
}
.discrption {
  margin: 20px;
}
.special {
  margin-top: 40px;
  font-size: 14px;
}
</style>