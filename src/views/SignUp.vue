<template>
  <div class="page-sign-up">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">SignUp</h1>
        <form action="" @submit.prevent="submitForm">
          <!-- username  -->
          <div class="field">
            <label for="">Username</label>
            <div class="control">
              <input type="text" class="input" v-model="username" placeholder="Enter Username">
            </div>
          </div>
          <!-- password  -->
          <div class="field">
            <label for="">Password</label>
            <div class="control">
              <input class="input" v-model="password" type="password" placeholder="Enter Password">
            </div>
          </div>
          <!-- repeat password  -->
            <div class="field">
            <label for="">Repeat Password</label>
            <div class="control">
              <input class="input" v-model="password2" type="password" placeholder="Repeat Password">
            </div>
          </div>
          <!-- notifiation if error  -->
          <div class="notification is-danger" v-if="errors">
            <p v-for="error in errors" v-bind:key="error">{{error}}</p>
          </div>
          <!-- submit button  -->
          <div class="field ">
            <div class="control">
              <button type="submit" class="button is-dark">Sign up</button>
            </div>
          </div> 

          <hr>

          <!-- or login  -->
          Or <router-link to="/log-in">click here</router-link> to log in!
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      error: [],
    };
  },
  methods: {
    submitForm() {
        this.errors = []

        if(this.username === ''){
            this.errors.push('The username is missing')
        }

        if(this.password === ''){
            this.errors.push('The password is missing')
        }

        if(this.password === this.password2){
            this.errors.push('The password doesnt match')
        }

        if(!this.errors.length){
            const formData = {
                username : this.username,
                password : this.password
            }

            axios.post('api/v1/users/', formData)
            .then(response=>{
                toast({
                    message: 'account created, please log in',
                    type: 'is-success',
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: 'bottom-right'
                })

                this.$router.push('/log-in')
            })
            .catch(error=> {
                if(error.response){
                    for(const property in error.response.data){
                        this.errors.push(`${property}: ${error.response.data[property]}`)

                    }
                    console.log(JSON.stringify(error.response.data))
                }else if(error.message){
                    this.errors.push('Something went wrog, please try again')

                    console.log(JSON.stringify(error))
                }
            }) 
        }
    },
  },
};
</script>