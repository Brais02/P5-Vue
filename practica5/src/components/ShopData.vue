<template>
  <div class="shop">
    <div class="container">

      <!-- Carousel -->
      <h2>Nuestros proveedores</h2>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/Proveedor1.webp" class="d-block w-100" alt="Provider 1" />
          </div>
          <div class="carousel-item">
            <img src="../assets/Proveedor2.webp" class="d-block w-100" alt="Provider 2" />
          </div>
          <div class="carousel-item">
            <img src="../assets/Proveedor3.webp" class="d-block w-100" alt="Provider 3" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-md-8">
          <h2>Lista de productos</h2>

          <div class="row justify-content-center">
            <div
              class="producto col-sm-3 m-2"
              v-for="producto in productos"
              :key="producto"
            >
              <h4 class="text-start">{{ producto.nombre }}</h4>

              <p class="text-start">
                <b>Descripción:</b> <span>{{ producto.descripcion }}</span>
              </p>

              <p class="text-start">
                <b>Precio:</b> <span>{{ producto.precio }} $</span>
              </p>

              <button class="btn btn-primary" @click="productoInsercion(producto)">Comprar</button>
            </div>
          </div>
        </div>

        <div class="col col-sm-12 col-md-4">
          <h4>Carrito</h4>

          <div class="carrito">
            <div v-if="carrito.length">
              <table>
                <thead>
                  <tr>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="producto in carrito">
                    <td>{{ producto.cantidad }}</td>
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.precio }} $</td>
                    <td>{{ producto.descripcion }}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="eliminarProducto(producto)"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <p>Suma Total: {{ suma.precioTotal }} $</p>
              </div>
            </div>

            <div v-else>
              <p>El carrito está vacío</p>
            </div>


          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "ShopData",

  data() {
    return {
      productos: [
        {
          nombre: "Prodcuto1",
          precio: 12,
          precioTotal: 0,
          descripcion: "Lorem Ipsum dolor setum",
          cantidad: 1,
          id: 1,
        },
        {
          nombre: "Prodcuto2",
          precio: 20,
          precioTotal: 0,
          descripcion: "Lorem Ipsum dolor setum",
          cantidad: 1,
          id: 2,
        },
        {
          nombre: "Prodcuto3",
          precio: 23,
          precioTotal: 0,
          descripcion: "Lorem Ipsum dolor setum",
          cantidad: 1,
          id: 3,
        },
        {
          nombre: "Prodcuto4",
          precio: 15,
          precioTotal: 0,
          descripcion: "Lorem Ipsum dolor setum",
          cantidad: 1,
          id: 4,
        },
        {
          nombre: "Prodcuto5",
          precio: 45,
          precioTotal: 0,
          descripcion: "Lorem Ipsum dolor setum",
          cantidad: 1,
          id: 5,
        },
        {
          nombre: "Prodcuto6",
          precio: 60,
          precioTotal: 0,
          descripcion: "Lorem Ipsum dolor setum",
          cantidad: 1,
          id: 6,
        },
      ],
      carrito: [],
      sumaTotal: [],
      suma: 0,
    };
  },
  methods: {
    // Inserta producto
    productoInsercion(producto) {
      const existe = this.carrito.some(
        (productoItem) => producto.id === productoItem.id
      );

      if (existe) {
        //Actualizamos la cantidad
        let productos = this.carrito.map((productoItem) => {
          if (producto.id === productoItem.id) {
            producto.cantidad++;
            return producto; // Devuelve el objeto actualizado
          } else {
            return productoItem; // Devuelve los objetos que no están duplicados
          }
        });
        this.carrito = [...productos];
      } else {
        this.carrito = [...this.carrito, producto];
      }
      this.sumarTotal();
    },
    // Suma producto
    sumarTotal() {
      this.carrito.forEach((producto) => {
        producto.precioTotal = producto.precio * producto.cantidad;
      });

      this.productos.forEach((producto) => {
        this.suma = this.productos.reduce((a, b) => ({
          precioTotal: a.precioTotal + b.precioTotal,
        }));
      });
    },
    // Eliminar Producto
    eliminarProducto(producto) {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        producto.precioTotal -= producto.precio;
        this.sumarTotal();
      } else {
        if (producto.precioTotal !== 0) {
          producto.precioTotal = 0;
        }
        this.carrito = this.carrito.filter(
          (productoItem) => producto.id !== productoItem.id
        );
        this.sumarTotal();
      }
    },
    // Más funciones
  },
  components: {
    Footer,
  },
};
</script>