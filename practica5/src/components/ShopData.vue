<template>
 <div class="shop">
    <div class="container">
        <div class="row">

          <div class="col">
            <h2>Lista de productos</h2>

            <div class="row">
              <div class="producto col-sm-3 m-2" v-for="producto in productos" :key="producto">
                <h3>{{producto.nombre}}</h3>
                <h4>Descripción:</h4>
                <p>{{producto.descripcion}}</p>
                <button class="btn btn-primary" @click="productoInsercion(producto)">Comprar</button>
              </div>
            </div>
          </div>

          <div class="col">
            <h4>Carrito</h4>
            
            <div class="carrito">

              <div v-if="carrito.length" v-for="producto in carrito">
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
                    <tr>
                      <td>{{producto.cantidad}}</td>
                      <td>{{producto.nombre}}</td>
                      <td>{{producto.precio}}</td>
                      <td>{{producto.descripcion}}</td>
                      <td>{{producto.precioTotal}}</td>
                      <td><button @click="eliminarProducto(producto)">X</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div v-else>
                <p>El carrito está vacío</p>
              </div>
              
              <div>
                <p>Suma Total: {{suma}}</p>
              </div>
            </div>
          </div>

        </div>
    </div>
 </div>
</template>

<script>
export default {
  name: "ShopData",

  data() {
    return {
      productos: [
        {nombre: "Prodcuto1" , precio: 12 , precioTotal : 0, descripcion: "Lorem Ipsum dolor setum", cantidad: 1, id: 1},
        {nombre: "Prodcuto2" , precio: 20 , precioTotal : 0 , descripcion: "Lorem Ipsum dolor setum" , cantidad: 1, id: 2},
        {nombre: "Prodcuto3" , precio: 23 , precioTotal : 0 , descripcion: "Lorem Ipsum dolor setum" , cantidad: 1, id: 3},
        {nombre: "Prodcuto4" , precio: 15 , precioTotal : 0 , descripcion: "Lorem Ipsum dolor setum" , cantidad: 1, id: 4},
        {nombre: "Prodcuto5" , precio: 45 , precioTotal : 0 , descripcion: "Lorem Ipsum dolor setum" , cantidad: 1, id: 5},
        {nombre: "Prodcuto6" , precio: 60 , precioTotal : 0 , descripcion: "Lorem Ipsum dolor setum" , cantidad: 1, id: 6},
      ],
      carrito: [],
      sumaTotal: [],
      suma: 0
    }
  },
  methods: {
    // Inserta producto
  	productoInsercion(producto) {
      const existe = this.carrito.some(productoItem => producto.id === productoItem.id );
      
    if(existe) {
      //Actualizamos la cantidad
      let productos = this.carrito.map( productoItem => {
        if(producto.id === productoItem.id){
            producto.cantidad++;
            return producto; // Devuelve el objeto actualizado
        } else{
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
      this.carrito.forEach(producto => {
        producto.precioTotal = producto.precio * producto.cantidad;
      });

      this.productos.forEach(producto => {
        this.suma = this.productos.reduce((a, b) => ({precioTotal: a.precioTotal + b.precioTotal}));
      });

    },
    // Eliminar Producto
    eliminarProducto(producto) {
      if(producto.cantidad > 1) {
        producto.cantidad -= 1;
        producto.precioTotal -= producto.precio
        this.sumarTotal();
      } 
      else {
        if(producto.precioTotal !== 0) {
          producto.precioTotal = 0;
        }
        this.carrito = this.carrito.filter( productoItem => producto.id !== productoItem.id);
        this.sumarTotal();
      }
    }
    // Más funciones
  }
}
</script>