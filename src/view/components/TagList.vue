<docs>
  Functional components don't contain any data.
  Instead, all data is passed down as props
</docs>

<template functional>
    <span class="tag-list">
        <router-link
            v-for="tag in props.tags"
            :key="tag"
            @click="$emit('click', tag)"
            :to="`${props.link}${tag}`"
            class="chip"
        >
            {{ tag }}
        </router-link>
    </span>
</template>
