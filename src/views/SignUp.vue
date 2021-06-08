<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">SignUp</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'
export default {
    name: 'SignUp',
    data(){
        return{
            username: '',
            password: '',
            password2: '',
            error: []
        }
    },
}
</script>