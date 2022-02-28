<template>
  <div class="hello fondo">
    <div class="container">
      <section class="d-grid gap-3">
        <div class="card mt-3">
          <div class="row d-flex">
            <div class="col-md-12 col-lg-8 order-2 order-lg-1">
              <article class="card-body">
                <h2 class="card-title">Earth-friendly!</h2>
                <p class="card-text justify">
                  This website template has been designed by Free Website
                  Templates for you, for free. You can replace all this text
                  with your own text. You can remove any link to our website
                  from this website template, you're free to use this website
                  template without linking back to us. If you're having problems
                  editing this website template, then don't hesitate to ask for
                  help on the Forums.
                </p>
                <div class="d-flex justify-content-evenly">
                  <button type="submit" class="btn btn-primary">
                    Take a Tour
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    Register
                  </button>
                </div>
              </article>
            </div>
            <div class="col-md-12 col-lg-4 order-1 order-lg-2 d-flex">
              <img
                src="../assets/Soplando.webp"
                alt="wind turbine in the hills"
                class="
                  align-self-center
                  img-fluid
                  rounded-start
                  centrarElemento
                  pe-lg-2
                  shadow
                "
              />
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- CENTRAR ESTOS ELEMENTOS PARA QUE OCUPEN TODO EL ESPACIO-->
        <div class="row g-0 gap-3 gap-md-0">
          <div class="col-12 col-md-6 col-lg-4">
            <article class="card">
              <img src="../assets/Mapa.webp" class="card-img-top" alt="Map of the world" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary centrarElemento"
                  >The Power of Earth</a
                >
              </div>
            </article>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <article class="card">
              <img src="../assets/Abrazo.webp" class="card-img-top" alt="Kid with a globe" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary centrarElemento"
                  >Earth no mad</a
                >
              </div>
            </article>
          </div>

          <div class="col-12 col-lg-4 mt-md-3 mt-lg-0">
            <article class="card">
              <img src="../assets/Globo.webp" class="card-img-top" alt="Mother and daughter with a globe" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary centrarElemento"
                  >Osmosis Beats</a
                >
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: 'HelloWorld',
  components: {
    Footer
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
-->