<template>
  <div id="nav">
    
     <header class="navbar navbar-expand-lg navbar-dark bg-primary">

      <img src="imagenes/logo.png" class="img-fluid shadow-lg ps-2">

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
              <a class="nav-link disabled fw-bold">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled fw-bold">Contact us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled fw-bold">Why choose us?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active fw-bold"><router-link to="/about">Blog</router-link></a>
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
