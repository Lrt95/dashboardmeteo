<template>
  <b-container>
    <b-row>
      <b-col>
        <md-field style="width: 30%">
          <label>Ville</label>
          <md-input v-model="initial" @keydown.enter="change()"></md-input>
        </md-field>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'SearchCity',
  data: () => ({
    initial: ''
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

<style lang="scss" scoped>

</style>
