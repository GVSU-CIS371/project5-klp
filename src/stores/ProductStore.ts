import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  // your answer
  state: () => ({
    products: [] as ProductDoc[]
  }),

  actions: {
    init(): void {
      this.products = initProducts.map((productData, index) => ({
        id: 'product_${index + 1}',
        data: productData,
      }));
    },
    
    filterByCategory(category: string): ProductDoc[] {
      return this.products.filter(product => product.data.category === category);
    },

    filterByRating(minRating: number): ProductDoc[]{
      return this.products.filter(product => product.data.rating > minRating);
    },
  },
});
