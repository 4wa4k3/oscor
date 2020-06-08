<template>
  <div>
    <section class="section-large section-hero">
      <div class="content-wrap">
        <h1>{{ product.name }}</h1>
        <h2>{{ $t(`${product.short_name}.short_description`) }}</h2>
        <figure>
          <img src="~assets/img/introducers/adelante/0001.png" alt="" />
        </figure>
      </div>
    </section>
    <section class="section-large">
      <div class="content-wrap">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          natus, eveniet quas sequi animi voluptatem debitis labore quod
          assumenda alias dolor cupiditate officia earum quia dolore blanditiis
          minus mollitia iusto. Fugit repellat iure, dignissimos, facilis
          consectetur sit quaerat labore illo incidunt optio omnis. Odit error
          nobis quos perferendis? Quibusdam natus ipsam molestiae dolores
          consequatur sequi vero possimus consectetur fugiat repellendus. Culpa
          laudantium architecto minima amet earum neque harum impedit dolorem,
          porro provident distinctio corporis in, reprehenderit asperiores nobis
          quaerat velit sapiente iusto iste, doloremque eveniet? Delectus
          inventore voluptatum omnis aut.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/products/introducers/:slug',
      es: '/productos/introductores/:slug',
      de: '/produkte/einführer/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.introducers.all.find(
        (product) => product.slug === this.slug
      )
    }
  }
}
</script>
