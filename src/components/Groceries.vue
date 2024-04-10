<template>
  <!-- your answer -->
  <v-container>
    <v-row>
      <v-col
        v-for="product in filteredProducts"
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
//import { defineComponent, computed } from 'vue';
import StoreItem from './StoreItem.vue'; // Assuming StoreItem component is imported
import { useProductStore } from '../stores/ProductStore'; // Import your product store

const productStore = useProductStore();

const filteredProducts = productStore.filterByCategory('Groceries');;
</script>
