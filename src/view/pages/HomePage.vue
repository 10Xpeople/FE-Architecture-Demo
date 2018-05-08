<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li
        v-for="category in categories"
        :key="category"
      >
        <h2 class="category"><router-link
          :to="`/category/${category}`"
        >{{ category }}</router-link></h2>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCategories } from '@/data/fakeApi';

export default {
  name: 'HomePage',
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    getCategories()
      .then(categories => this.categories.push(...categories))
      // Pretend this handles errors
      .catch();
  },
};
</script>

