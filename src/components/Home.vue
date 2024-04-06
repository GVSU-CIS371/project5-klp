<template>
  <!-- your answer -->
  <v-container>
    <v-row>
      <!-- Iterate over products and render StoreItem component for each product -->
      <v-col
        v-for="product in products"
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
import { defineComponent } from 'vue';
import StoreItem from '@/components/StoreItem.vue'; // Assuming StoreItem component is imported

export default defineComponent({
  components: {
    StoreItem,
  },
  data() {
    return {
      products: [
        {
          id: '1',
          name: 'Product A',
          description: 'This is a product description.',
          price: 29.99,
          rating: 4.5,
          stock: 10,
          image: '/path/to/image1.jpg',
          category: 'Electronics',
        },
        {
          id: '2',
          name: 'Product B',
          description: 'Another product description.',
          price: 39.99,
          rating: 3.8,
          stock: 5,
          image: '/path/to/image2.jpg',
          category: 'Clothing',
        },
        // Add more products as needed
      ],
    };
  },
});
</script>
