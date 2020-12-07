<template>
    <div >
        <div class="demo">class="demo"</div>
         <van-button type="primary" @click="goto" size="large">跳转</van-button>
    </div>
</template>

<script>
import {ref,reactive} from 'vue'
import {useRouter } from 'vue-router'
    export default {
        
        setup(){
            const router = useRouter()
            const goto=()=>router.push('Other')

            return{
               goto 
            }
        }
    }
</script>

<style scoped>
.demo {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
</style>