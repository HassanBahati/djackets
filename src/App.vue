<template>
  <div id="wrapper">
    <!-- navbar with bulma class -->
    <nav class="navbar is-dark">
      <!-- logo  -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong>Djackets</strong>
        </router-link>

        <!-- humburger menu for mobile screens  -->
        <a
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
          <!-- nav links  -->
          <router-link to="/summer" class="navbar-item">Summer</router-link>
          <router-link to="/winter" class="navbar-item">Winter</router-link>

          <!-- nav buttons -->
          <div class="navbar-item">
            <div class="buttons">
              <!-- login  -->
              <router-link to="/log-in" class="button is-light"
                >Log in</router-link
              >

              <!-- cart  -->
              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fa fa-shopping-cart"></i></span>
                <span>Cart ({{cartTotalLength}})</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- loading bar  -->
    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading}">
      <div class="lds-dual-ring"></div>
    </div>


    <!-- section  -->
    <section class="section">
      <router-view />
    </section>

    <!-- footer  -->
    <footer class="footer">
      <p class="has-text-centered">Copyright &copy; 2021</p>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  beforeCreate(){
    // initializing store 
    this.$store.commit('initializeStore')
  },
  mounted(){
    this.cart = this.$store.state.cart
  },
  computed: {
    cartTotalLength(){
      let totalLength = 0

      // loop through all cart items 
      for (let i = 0; i < this.cart.items.length; i++){
        totalLength += this.cart.items[i].quantity
      }

      return totalLength
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma";

// css for loading bar 
.lds-dual-ring{
  display: 'inline-block';
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after{
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
}

.is-loading-bar{
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading{ 
    height: 80px;
  }
}
</style>
