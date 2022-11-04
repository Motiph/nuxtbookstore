<template>
  <!-- <v-container>
    <v-row justify="center" align="center" v-if="book" no-gutters>
      <v-col>
        <v-img :src="book.thumbnail_url" width="280"></v-img>
      </v-col>
    </v-row>
  </v-container> -->

  <v-container fill-height>
    <v-row v-if="book"  align="center">
        <v-col cols="12" sm="4">
          <div>
            <v-img :src="book.thumbnail_url" width="250"></v-img>
          </div>

        </v-col>
        <v-col>
          <div>
            <h1>{{ book.title }}</h1>
            <p>
              <span v-for="author in book.authors">
                By: {{ author.first_name }} {{ author.last_name }},
              </span>
            </p>

            <p>
              {{ book.long_description }}
            </p>
          </div>
        </v-col>

    </v-row>

  </v-container>


</template>

<script>
export default {
  data () {
    return {
      book: null,
    }
  },


  methods: {
    async getBook (id) {
      const response = await this.$store.dispatch('getBook', id)
      this.book = response.data
    }
  },

  created () {
    this.getBook(this.$route.params.isbn)
  }
}
</script>

<style scoped>
/* @media (min-width: 1904px) {
  .container {
    max-width: 900;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: 900;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: 900;
  }
} */


</style>
