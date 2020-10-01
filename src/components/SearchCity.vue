<template>
    <md-field>
      <label>Rechercher une ville</label>
      <md-input v-model="initial" @keydown.enter="change()"></md-input>
    </md-field>
</template>

<script>
export default {
  name: 'SearchCity',
  data: () => ({
    initial: 'Paris'
  }),
  computed: {
    cCity: {
      get () {
        return this.$store.state.city
      },
      set (value) {
        this.$store.commit('changeCity', value)
      }
    }
  },
  methods: {
    change () {
      this.cCity = this.initial
    }
  }
}
</script>

<style scoped>
  .md-field:last-child{
    margin-bottom: 40px;
  }
</style>
