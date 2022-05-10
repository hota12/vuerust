<template>
  <div style="background:#12404d">
    <HeaderMenu/>
    <FooterZoom @aumentaZoom="aumentaZoom()" @diminuiZoom="diminuiZoom()" class="footer-container"/>
    
    <div class="teste" v-dragscroll  >
      <div id="map" :style="{zoom:this.zoom + '%'}" >
        <MarcaPlayer  v-for="player in players" :key="player.steamId" :x="convertCord(player.x)" :y="convertCord(player.y)" :steamId="player.steamId"/>
        <ProximitySensor  x="40%" y="50%"/>
      </div>
    </div>
  </div>
</template>

<script>
import MarcaPlayer from './components/MarcaPlayer.vue'
import ProximitySensor from './components/ProximitySensor.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import FooterZoom from './components/FooterZoom.vue'

import { dragscroll } from 'vue-dragscroll'

export default {
  name: 'App',
  components: {
    MarcaPlayer,
    ProximitySensor,
    HeaderMenu,
    FooterZoom
  },
    directives: {
    dragscroll
  },
  data: function(){
    
    return{
        players:[],
        zoom: 100
    }

  },

  created: function(){
      console.log("Starting connection to WebSocket Server")
      this.connection = new WebSocket("ws://189.59.57.77:3001/geolocation")

      this.connection.addEventListener("message", (message) =>{
      console.log(message.data)
      this.players = JSON.parse(message.data)
        
        
      });

      this.connection.onopen = function(event) {
        console.log(event)
        console.log("Successfully connected to the echo websocket server...")
      }
    },
    methods:{
      convertCord(entrada){
      return String(entrada / 35) + "%"
      },
      aumentaZoom(){      
        if(this.zoom < 160){ 
          this.zoom = this.zoom + 20
        }
      },
      diminuiZoom(){ 
        if(this.zoom > 60){
           this.zoom = this.zoom - 20
        }      
      }
    }
}

</script>

<style>
#map {
  height: 1600px;
  background-image: url('/src/assets/map.jpg');
  background-size: 2743px;
  background-position: center;
  position: relative;
  width: 1920px;
  margin: auto;
  margin-top: 76px;

}

.teste{
  overflow: hidden;
  height: 100vh;
}

:root{
  --black-900:#1F2121;
  --black-600: #A0A4A4;
  --red-900:#CE422B;
  --bege-900:#F5E9E0;
}

.footer-container{
    position: fixed;
    width: 100%;
    z-index: 100;
    bottom: 0;
}

html,body{
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}
</style>
