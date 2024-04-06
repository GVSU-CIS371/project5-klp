<template>
  <!-- your answer -->
  <v-card>
    <!-- Product Name -->
    <v-card-title>{{ product.name }}</v-card-title>

    <!-- Rating, Price, Stock in the same row -->
    <v-card-subtitle class="d-flex align-center">
      <!-- Rating as Stars -->
      <v-rating v-model="product.rating" half-increments disabled></v-rating>

      <!-- Price -->
      <span class="ml-2 text-h6 font-weight-bold">Price: ${{ product.price }}</span>

      <!-- Stock -->
      <span class="ml-2" v-if="product.stock > 0" class="green--text">In Stock: {{ product.stock }}</span>
      <span v-else class="ml-2 red--text">Out of Stock</span>
    </v-card-subtitle>

    <!-- Product Photo -->
    <v-img :src="product.image" height="300"></v-img>

    <!-- Product Description -->
    <v-card-text>{{ product.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
// your answer
import { defineProps } from 'vue';
//import { Product } from '@/types/product';

// Define props to receive product data from parent component
const props = defineProps<{
  product: Product;
}>();
</script>
