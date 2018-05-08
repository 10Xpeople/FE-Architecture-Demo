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
<!--     <view-cart />
    <view-cart />
    <view-cart />
    <view-cart />
    <view-cart /> -->
  </div>
</template>

<script>
import { getCategories } from '@/data/fakeApi';
// import ViewCart from '@/view/components/Cart/ViewCart';

export default {
  name: 'HomePage',
  // components: {
  //   ViewCart,
  // },
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

