<template>
  <div class="page-category">
    <div class="columns is-mulitline">
      <div class="column is-12">
        <!-- category name  -->
        <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
      </div>

      <!-- columns with prducts  -->
      <div
        class="column is-3"
        v-for="product in category.products"
        v-bind:key="product.id"
      >
        <div class="box">
          <!-- adding space between the generated images and thumbnail -->
          <figure class="image mb-4">
            <img :src="product.get_thumbnail" />
          </figure>

          <!-- name of prod  -->
          <h3 class="is-size-4">{{ product.name }}</h3>

          <!-- prod price -->
          <p class="is-size-6 has-text-grey">{{ product.price }} Shs</p>

          <!-- button for viewing details  -->
          <router-link
            v-bind:to="product.get_absolute_url"
            class="button is-dark mt-4"
            >View details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from 'bulma-toast'
export default {
  name: "Category",
  data() {
    return {
      category: {
        products: [],
      },
    };
  },
  mounted() {
    this.getCategory();
  },
  watch: {
    $route(to, from){
      if(to.name === 'Category'){
        this.getCategory()
      }
    }
  },
  methods: {
    async getCategory() {
      const categorySlug = this.$route.params.category_slug

      this.$store.commit("setIsLoaading", true);

      axios
        .get(`/api/v1/products/${categorySlug}/`)
        .then(response => {
          this.category = response.data;

          // setting tile
          document.title = this.category.name + " | Djackets";
        })
        .catch((error) => {
          console.log(error);

          toast({
            message: "Somehting went wrong, Please try again",
            type: "is-danger",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "button-right",
          });
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>

<style scoped>
</style>