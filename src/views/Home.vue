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
      <div
        class="column is-3"
        v-for="product in latestProducts"
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
          <p class="is-size-6 has-text-grey">{{product.price}} Shs</p>

          <!-- button for viewing details  -->
          View details 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
