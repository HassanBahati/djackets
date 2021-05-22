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
                <span>Cart</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
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
      showMobileMenu: false
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
