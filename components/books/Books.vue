<template>
  <v-container class="">
    <v-row no-gutters v-if="books">
      <template v-for="book in books">
        <v-col :key="book.id" class="pt-6 ma-2">
          <Book :book="book"/>
        </v-col>
      </template>
    </v-row>
    <v-row class="pagination-row">
      <div class="text-center">
        <v-pagination
          color="primary"
          v-model="page"
          :length="pagination"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Book from './Book'

export default {
  name: 'Books',
  components: {
    Book,
  },

  methods: {
    async getBooks() {
      const response = await this.$store.dispatch('getBooks', this.page)
      this.books = response.data.results
      this.bookCount = response.data.count
    }
  },

  mounted() {
    this.getBooks()
  },

  watch:  {
    page () {

      this.getBooks()

    }
  },

  computed: {
    pagination () {
      return Math.ceil(this.bookCount / 12)
    }
  },

  data () {
    return {
      books: [],
      bookCount: 0,
      page: 1,
    }
  }
}
</script>

<style scoped>
.pagination-row {
  justify-content: center;
}
</style>
