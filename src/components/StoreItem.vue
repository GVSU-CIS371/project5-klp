<template>
  <!-- your answer -->
  <v-card>
    <!-- Product Name -->
    <v-card-title>{{ product[0].data.name }}</v-card-title>

    <!-- Rating, Price, Stock in the same row -->
    <v-card-subtitle class="d-flex align-center">
      <!-- Rating as Stars -->
      <v-rating v-model="product[0].data.rating" half-increments disabled></v-rating>

      <!-- Price -->
      <span class="ml-2 text-h6 font-weight-bold">Price: ${{ product[0].data.price }}</span>

      <!-- Stock -->
      <span class="ml-2" v-if="product[0].data.stock > 0">In Stock: {{ product[0].data.stock }}</span>
      <span v-else class="ml-2 red--text">Out of Stock</span>
    </v-card-subtitle>

    <!-- Product Photo -->
    <v-img :src="product[0].data.image" height="300"></v-img>

    <!-- Product Description -->
    <v-card-text>{{ product[0].data.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
// your answer
//import { defineProps } from 'vue';
import { useProductStore } from '../stores/ProductStore';
//import { Product } from '../types/product';

//create instance of product store
let productStore = useProductStore();

// Call the init method and assign its result to product variable
let product = productStore.init();

</script>
