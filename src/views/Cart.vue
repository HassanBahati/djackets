<template>
  <div class="page-cart">
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="title">Cart</div>
      </div>

      <div class="column is-12 box">
        <table class="table is-full-width" v-if="cartTotalLength">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <CartItem
              v-for="item in cart.items"
              v-bind:key="item.product.id"
              v-bind:initialItem="item"
            />
          </tbody>
        </table>
        <p v-else>You dont have any products in your cart ..</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CartItem from '../components/CartItem.vue'
export default {
  name: "Cart",
  components: {
      CartItem
  },
  data(){
      return{
          cart: {
              items: []
          }
      }
  }
};
</script>