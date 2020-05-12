<template>
  <div class="card">
    <div class="card-heading">
      <h1>{{ product.name }}</h1>
      <h2>
        {{ $t(`${product.short_name}.short_description`) }}
      </h2>
    </div>
    <figure class="card-img"></figure>
    <div class="card-cta">
      <nuxt-link
        :to="
          localePath({
            name: 'products-introducers-slug',
            params: { slug: product.slug }
          })
        "
        >{{ $t('view') }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          name: {
            type: String,
            default: 'Product Name'
          },
          short_name: {
            type: String,
            default: 'productShortname'
          },
          slug: {
            type: String,
            default: 'product-slug'
          }
        }
      }
    }
  }
}
</script>
