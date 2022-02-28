<template>
  <div class="blog fondo">
    <div class="container">
      <!-- Le damos un espaciado de 3 a los elementos entre ellos y
    3 de espaciado hacia arriba a la card inicial -->
      <section class="d-grid gap-3">
        <article class="card mt-3">
          <div class="card-header">
            <h1 class="fw-bold text-center">Blog Title Number One</h1>
            <a
              class="btn btn-primary centrarElemento"
              data-bs-toggle="collapse"
              href="#blog1"
              role="button"
              aria-expanded="false"
              aria-controls="blog1"
              ><i>Ocultar el blog 1</i></a
            >
          </div>
          <div class="card-body multi-collapse" id="blog1">
            <p class="card-text justify">
              This website template has been designed by Free Website Templates
              for you, for free. You can replace all this text with your own
              text. Want an easier solution for a Free Website? Head straight to
              Wix and immediately start customizing your website! Wix is an
              online website builder with a simple drag & drop interface,
              meaning you do the work online and instantly publish to the web.
              Nothing to download, nothing to upload. All Wix templates are
              fully customizable and free to use. Just pick one you like, click
              Edit, and enter the online editor. Change, add, and remove items
              as you like.
            </p>
          </div>
        </article>

        <article class="card">
          <div class="card-header">
            <h1 class="fw-bold text-center">Blog Title Number One</h1>
            <a
              class="btn btn-primary centrarElemento"
              data-bs-toggle="collapse"
              href="#blog2"
              role="button"
              aria-expanded="false"
              aria-controls="blog2"
              ><i>Ocultar el blog 2</i></a
            >
          </div>
          <div class="card-body multi-collapse" id="blog2">
            <p class="card-text justify">
              Wix also offers a ton of free design elements right inside the
              editor, like images, icons, animation files, and interactive
              widgets. Publish your Free Website in minutes! You can remove any
              link to our website from this website template, you're free to use
              this website template without linking back to us. If you're having
              problems editing this website template, then don't hesitate to ask
              for help on the Forums. This is just a place holder, so you can
              see what the site would look like.
            </p>
          </div>
        </article>

        <article class="card">
          <div class="card-header">
            <h1 class="fw-bold text-center">Blog Title Number One</h1>
            <a
              class="btn btn-primary centrarElemento"
              data-bs-toggle="collapse"
              href="#blog3"
              role="button"
              aria-expanded="false"
              aria-controls="blog3"
              ><i>Ocultar el blog 3</i></a
            >
          </div>
          <div class="card-body multi-collapse" id="blog3">
            <p class="card-text justify">
              This is just a place holder, so you can see what the site would
              look like. This is just a place holder, so you can see what the
              site would look like. This is just a place holder, so you can see
              what the site would look like. This is just a place holder, so you
              can see what the site would look like. This is just a place
              holder, so you can see what the site would look like. This is just
              a place holder, so you can see what the site would look like. This
              is just a place holder, so you can see what the site would look
              like. This is just a place holder, so you can see what the site
              would look like.
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "BlogData",
  components: {
    Footer,
  },
};
</script>