<template>
  <div class="active-filter mb-7">
    <span v-for="(name, i) in $store.state.activeFilterNames" :key="i">
      <ActiveFilter :name="name" />
    </span>
  </div>
</template>