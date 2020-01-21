//pages/careers/_id.vue
<template>
  <div>
    <h2>キャリア</h2>
    <div v-for="item in items">
      <nuxt-link :to="'posts/' + item.id">
        <h2>
          {{ item.title }}
        </h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: ""
    };
  },

  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://your.microcms.io/api/v1/posts?filters=career[contains]${params.id}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    );

    return {
      items: data.contents
    };
  }
};
</script>
