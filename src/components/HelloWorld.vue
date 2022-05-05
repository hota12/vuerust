<template>
  <div>
    <div id="map">
      <div class="mark"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      map:"../assets/map.jpg"
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 1920px;
  height: 1920px;
  background-image: url('../assets/map.jpg');
  background-size: cover;
  position: relative;
}

.mark{
  display: inline;
  width: 20px;
  height: 20px;
  background: greenyellow;
  position: absolute;
  top: 500px;
  left: 500px;

}
</style>
