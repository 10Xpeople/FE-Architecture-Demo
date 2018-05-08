<template>
  <div>
    <ul class="collection with-header">
        <li class="collection-header">
          <h4 v-if="error" class="message error">Error: {{ error }}</h4>
          <h4 v-else class="category">{{ $route.params.category }}</h4>
        </li>
        <li
            v-for="product in products"
            :key="product.id"
            class="collection-item"
        ><div>
            <span class="product-avatar product-avatar-lg">
                {{ product.id }}
            </span>
            <tag-list
                :tags="product.categories"
                :link="'/category/'"
            />
            <div class="secondary-content">
                <add-to-cart :product="product"/>
            </div>
        </div></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import { getProducts } from '@/data/fakeApi';
import TagList from '@/view/components/TagList';
import AddToCart from '@/view/components/Cart/AddToCart';

export default {
  name: 'CategoryPage',
  data() {
    return {
      products: [],
      error: null,
    };
  },
  components: {
    TagList,
    AddToCart,
  },
  methods: {
    loadProducts(category) {
      getProducts(category)
        .then((products) => {
          this.error = null;
          this.products = products;
        })
        .catch(({ error }) => {
          this.error = error;
          this.products = [];
        });
    },
  },
  mounted() {
    this.loadProducts(this.$route.params.category);
  },
  watch: {
    $route(to) {
      this.loadProducts(to.params.category);
    },
  },
};
</script>

<style scoped>
    .tag-list {
        padding: 0 1em;
    }
    .secondary-content {
        display: flex;
        align-items: center;
        height: 80px;
    }
</style>
