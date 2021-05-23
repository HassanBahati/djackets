<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <!-- show iamge on left side  -->
      <div class="column is-9">
        <!-- generate images with a margin below  -->
        <figure class="image mb-6">
          <img v-bind:src="product.get_image" />
        </figure>

        <!-- product title  -->
        <h1 class="title">{{ product.name }}</h1>

        <!-- product description  -->
        <p>{{ product.description }}</p>
      </div>

      <div class="column is-3">
        <!-- info about prod  -->
        <h2 class="subtitle">Information</h2>

        <!-- prod price  -->
        <p><strong>Price: </strong>{{ product.price }} Shs</p>

        <!-- input field for add to cart -->
        <div class="field has-addons mt-6">
          <div class="control">
            <!-- number to decide quantity  -->
            <input type="number" class="input" min="1" v-model="quantity" />
          </div>
          <!-- button  -->
          <div class="control">
            <a class="button is-dark">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",
  data() {
    return {
        product: {},
        quantity: 1
    };
  },
  mounted(){
      this.getProduct()
  },
  methods: {
      getProduct(){
          const category_slug = this.$route.params.category_slug
          const product_slug = this.$route.params.product_slug
      }
  }
};
</script>

<style scoped>
</style>