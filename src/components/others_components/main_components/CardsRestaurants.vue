<template>
  <!-- QUATTRO COMPONENTI IDENTICI CHE VENGONO VISUALIZZATI NEL COMPONENTE HomePage.vue  -->
  <!-- IN BASE ALLA CONDIZIONE -->

  <!-- RICERCA TRAMITE NavBarHeader INPUT -->
  <div v-if="store.input.length > 0" class="my-card" v-for="restaurant in store.restaurants" v-show="restaurant.name.toLowerCase().includes(store.input.toLowerCase()) " >
   <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>

  <!-- RICERCA TRAMITE COMPONENTE FiltetSide -->
  <div v-else-if="store.checkbox.length > 0" class="my-card" v-for="restaurant in store.restaurants" v-show="filterCheckbox(restaurant)" >
    <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>

  <!-- SE NON VIENE IMPOSTATA UNA RICERCA -->
  <div v-else class="my-card" v-for="restaurant in store.restaurants" >
    <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>

</template>

<script>
import { store } from "../../../store";
import SingleCardRestaurant from "./SingleCardRestaurant.vue";
export default {
  name: "AppCard",
  data() {
    return {
      store,
    };
  },
 components:{
  SingleCardRestaurant,
},
methods:{
    filterCheckbox(restaurant){   
     let arr = restaurant.kitchens.map(elm => elm.name)
     return this.store.checkbox.every(elm => arr.includes(elm)) 

    }
}
};
</script>

<style lang="scss" scoped>
.my-card {
  width: calc(100% / 4 - 20px);
  margin: 10px;
  color: rgb(27, 27, 28);
  position: relative;
  height: 300px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 2px rgba(123, 123, 123, 0.3);
}

// media

@media screen and (max-width:600px){
  .my-card{
    width: 100%;
  }
}
@media screen and (min-width:601px) and (max-width:960px){
  
  .my-card{
    width: calc(100% / 2 - 20px);
  }
}
@media screen and (min-width:961px) and (max-width: 1300px){
  .my-card{
    width: calc(100% / 2 - 20px);
  }
}
@media screen and (min-width:1301px) and (max-width: 1600px){
  .my-card{
    width: calc(100% / 3 - 20px);
  }
}
</style>
