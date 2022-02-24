<template>
  <div id="nav" class="fondo">
    
     <header class="navbar navbar-expand-lg navbar-dark bg-primary">

      <img :src="imgSrc" class="img-fluid shadow-lg ps-2">

      <div class="centrarElemento">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              
              <a class="nav-link active fw-bold"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active fw-bold"><router-link to="/blog">Blog</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active fw-bold"><router-link to="/shop">Shop</router-link></a>
            </li>
          </ul>

        </div>
      </div>
    </header>
    
  </div>
  <router-view/>
</template>

<script>
export default {
  computed: {
    imgSrc(){
      //return "../imagenes/logo.png"
      return "https://raw.githubusercontent.com/Brais02/P4-Maquetacion/main/src/imagenes/Logo.png?token=GHSAT0AAAAAABROSCC2U45PW7YNEMYRNYFMYQ6IRYQ"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
