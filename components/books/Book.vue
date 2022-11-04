<template>
  <v-card
    class="mx-auto "
    max-width="250"
  >
    <v-img
      :src="book.thumbnail_url"
      width="280"
    ></v-img>

    <v-card-title>
      {{ book.title }}
    </v-card-title>

    <v-card-subtitle>
      <p>
        <span v-for="author in book.authors">
          By: {{ author.first_name }} {{ author.last_name }},
        </span>
      </p>

    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="$router.push(`/book/${book.id}`)"
      >
        See more
      </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Book',
  props: ['book']
}
</script>
<!--
<script scoped>

</script> -->
