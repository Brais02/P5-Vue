<template>
  <div class="blog">
    <BlogData />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogData from '@/components/BlogData.vue'

export default {
  name: 'Blog',
  components: {
    BlogData
  }
}
</script>
