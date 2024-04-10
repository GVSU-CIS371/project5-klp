<template>
  <!-- your answer -->
  <v-container>
    <v-row>
      <v-col
        v-for="product in bestSellerProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// your answer
import StoreItem from './StoreItem.vue'; // Assuming StoreItem component is imported
import { useProductStore } from '../stores/ProductStore'; // Import your product store

const productStore = useProductStore();

const bestSellerProducts = productStore.filterByRating(4.5);

</script>
