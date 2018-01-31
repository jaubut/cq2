<template>
  <BlogPost :post="post"></BlogPost>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'
import BlogPost from '../cq-blog-post'

const client = createClient()
export default {
  components: {
    BlogPost
  },
  data () {
    return {
      post: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.post = response.items[0]
          return response
        })
    }
  }
}
</script>