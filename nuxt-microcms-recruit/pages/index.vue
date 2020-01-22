//pages/index.vue
<template>
  <div>
    <div v-for="item in items">
      <nuxt-link :to="'careers/' + item.id">
        <h2>
          {{ item.name }}
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
      items: []
    };
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://your.microcms.io/api/v1/careers",
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
