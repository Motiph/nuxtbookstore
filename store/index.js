import axios from 'axios';
import CreateBookForm from '~/components/books/CreateBookForm.vue';

export const state = () => ({
  books: []
})

export const mutations = {
  SET_BOOKS: (state, books) => {
    state.books = books
  }
}

export const actions = {
  async getBooks({ commit }, page) {
    const response = await this.$axios.get(`/books/?page=${page}`)
    commit('SET_BOOKS', response.data)
    return response
  },

  async getBook({}, id) {
    const response = await this.$axios.get(`/books/${id}/`)
    return response
  },

  async createBook({}, payload) {
    const response = await this.$axios.post(`/books/`, payload)
    return response
  }
}
