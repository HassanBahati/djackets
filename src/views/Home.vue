<template>
  <div class="home">
    <!-- hero landing section  -->
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">Welcome to Djackets</p>
        <p class="subtitle">The best jackets store online</p>
      </div>
    </section>
    <!-- prods section  -->
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>
      <!-- columns with prducts  -->
     <ProductBox v-for="product in latestProducts" v-bind="product.id" v-bind:product="product"/>
    </div>
  </div> 
</template>

<script>
import axios from "axios";
import ProductBox from "../components/ProductBox.vue";

export default {
  name: "Home",
  data() {
    return {
      latestProducts: [],
    };
  },
  components: { ProductBox },
  mounted() {
    this.getLatestProducts();

    // setting title
    document.title = "Home | Djackets";
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get("api/v1/latest-products/")
        .then((response) => {
          this.latestProducts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$$store.commit("setIsLoading", false);
    },
  },
};
</script>
