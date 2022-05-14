<template>
  <div style="background: #12404d">
    <HeaderMenu />

    <FooterZoom
      @aumentaZoom="aumentaZoom()"
      @diminuiZoom="diminuiZoom()"
      class="footer-container"
    />

    <div class="teste" v-dragscroll>
      <div id="map" :style="{ zoom: this.zoom + '%' }">
        <MarcaPlayer
          v-for="player in players"
          :key="player.steamId"
          :x="convertCord(player.x)"
          :y="convertCord(player.y)"
          :steamId="player.name"
        />
        <ProximitySensor
          v-for="sensor in sensores"
          :key="sensor.alarmId"
          :x="convertCord(sensor.x)"
          :y="convertCord(sensor.y)"
          :state="sensor.state"
        />
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
        sensoresBase:'',
        //{"478810":{"alarmId":"478810","x":1383.10791015625,"y":1499.0770263671875,"state":false},"484438":{"alarmId":"484438","x":1470.758056640625,"y":1484.3682861328125,"state":false},"484445":{"alarmId":"484445","x":1660.6199951171875,"y":1493.41796875,"state":false},"484452":{"alarmId":"484452","x":1872.1494140625,"y":1504.3656005859375,"state":false}}
        sensores:[],
        zoom: 100,
        y:''
    }

  },

  created: function(){
      console.log("Starting connection to WebSocket Server")
      this.connectionPlayers = new WebSocket("ws://191.33.216.65:3001/geolocation")

      this.connectionPlayers.addEventListener("message", (message) =>{
      //console.log(message.data)
      this.players = JSON.parse(message.data)     
      });
      this.connectionPlayers.onopen = function(event) {
        console.log(event)
        console.log("Geolocalização Players Conectado com sucesso")
      }


      console.log("Starting connection to WebSocket Server")
      this.connectionAlarms = new WebSocket("ws://191.33.216.65:3001/alarms")

      this.connectionAlarms.addEventListener("message", (message) =>{
      console.log(message.data)
      this.y = JSON.parse(message.data)
      this.alteraEstadoSensor(this.y.alarmId,this.y.state)
      //this.sensores = JSON.parse(message.data)         
      });
      this.connectionAlarms.onopen = function(event) {
        console.log(event)
        console.log("Alarms Conectado com sucesso")
      }


      this.$http.get('http://191.33.216.65:3001/alarms-list')
      .then(res => res.json())
      .then(sensores => this.populaArray(sensores));
      //res.json()
      //.then(sensores => this.sensoresBase = sensores, err => console.log(err));

      

//{"alarmId":"484452","x":1905.768798828125,"y":1536.0625,"state":true}



    },




    methods:{
      alteraEstadoSensor(id,estado){
        let index = this.sensores.findIndex( object =>{
          return object.alarmId === id
        })
        this.sensores[index].state = estado
      },
        populaArray(objetoSensores){
          Object.keys(objetoSensores).forEach(k => {
          this.sensores.push(objetoSensores[k])
      });
      },
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
  background-image: url("/src/assets/map.jpg");
  background-size: 157%;
  background-position: center;
  position: relative;
  width: 1600px;
  margin: auto;
  margin-top: 76px;
}

.teste {
  overflow: hidden;
  height: 100vh;
}

:root {
  --black-900: #1f2121;
  --black-600: #a0a4a4;
  --red-900: #ce422b;
  --bege-900: #f5e9e0;
}

.footer-container {
  position: fixed;
  width: 100%;
  z-index: 100;
  bottom: 0;
}

html,
body {
  font-family: "Inter", sans-serif;
  overflow: hidden;
}
</style>
