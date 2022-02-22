<template>
  <div class="shop">
    <ShopData />
  </div>
</template>

<script>
// @ is an alias to /src
import ShopData from '@/components/ShopData.vue'

export default {
  name: 'Shop',
  components: {
    ShopData
  }
}
</script>