<template>
  <div>
    <h1 v-text="titulo"></h1>
    <ul>
      <li v-for="(foto, index) in fotos" :key="index" >
        <img :alt="foto.titulo" :src="foto.url">
        </li>
    </ul>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      titulo: 'Teste vsue',
      fotos: [
        {
          url: 'https://hapocompany.com/wp-content/uploads/2021/10/Grupo-363.png',
          titulo: 'HF',
        },
        {
          url: 'https://hapocompany.com/wp-content/uploads/2021/10/Grupo-363.png',
          titulo: 'HF',
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
