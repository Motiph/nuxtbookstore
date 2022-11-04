<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <CreateBookForm></CreateBookForm>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateBookForm from '~/components/books/CreateBookForm.vue';

export default {
    name: "Create",
    components: { CreateBookForm }
}
</script>
