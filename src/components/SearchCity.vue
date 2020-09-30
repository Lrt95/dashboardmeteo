<template>
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="initial"></md-input>
    </md-field>
</template>

<script>
export default {
  name: 'SearchCity',
  data: () => ({
    initial: 'Initial Value'
  })
}
</script>

<style scoped>

</style>
