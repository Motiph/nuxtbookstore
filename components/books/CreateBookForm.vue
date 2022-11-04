<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      solo
      v-model="title"
      :counter="50"
      :rules="titleRules"
      label="Title"
      required
    ></v-text-field>

    <v-text-field
      solo
      v-model="isbn"
      :counter="30"
      :rules="isbnRules"
      label="ISBN"
      required
    ></v-text-field>
<!--
    <v-text-field
      solo
      v-model="author"
      :counter="40"
      :rules="authorRules"
      label="Author"
      required
    ></v-text-field> -->

    <v-textarea
      solo
      v-model="description"
      name="description"
      label="Description"
    ></v-textarea>


    <!-- <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn> -->

    <!-- <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
    <v-btn
      color="primary"
      @click="createBook"
    >
      Create book
    </v-btn>

    <div class="pt-10">
      TODO LIST
      <ul>
        <li>Save authors and multiple authors.</li>
        <li>Save categories</li>
        <li>Save book image</li>
        <li>Edit Book</li>
      </ul>

    </div>

  </v-form>
</template>

<script>
export default {
  name: 'CreateBookForm',
  data: () => ({
    valid: true,
    name: '',

    title: '',
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 50) || 'Title must be less than 50 characters',
    ],
    isbn: '',
    isbnRules: [
      v => !!v || 'ISBN is required',
      v => (v && v.length <= 30) || 'ISB must be less than 30 characters',
    ],
    author: '',
    authorRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 40) || 'Title must be less than 40 characters',
    ],

    description: '',
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },


    async createBook () {
      if (this.valid) {
        const response = await this.$store.dispatch('createBook', {
          title: this.title,
          isbn: this.isbn,
          long_description: this.description,
          authors: [],
          categories: [],
        })

        if (response.status === 201) {
          this.reset()
          this.$router.push(`/book/${response.data.id}`)
        }
      }
    }
  },
}
</script>
