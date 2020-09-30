<template>
  <b-container>
    <b-card
      overlay
      title="test"
      text-variant="white"
      img-src="https://f.hypotheses.org/wp-content/blogs.dir/2365/files/2011/03/un-ciel-sans-nuage.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 25rem;"
      class="mb-2"
    >
      <b-card-text style="height: 100%">
        <b-row class="text-center" style="height: 100%">
          <b-col sm="6" align-self="center">
            <div>Température Actuelle</div>
          </b-col>
          <b-col sm="6" align-self="center">
          <div>Image</div>
        </b-col>
          <b-col align-self="end">
            <div>Température matin</div>
          </b-col>
          <b-col align-self="end">
            <div>Température midi</div>
          </b-col>
          <b-col align-self="end">
            <div>Température soir</div>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </b-container>

</template>

<script>

export default {
  name: 'WeatherMap',
  data () {
    return {
      city: '',
      temperature: 0,
      temperatureMorning: 0,
      temperatureAfternoon: 0,
      temperatureEvening: 0,
      date: new Date(),
      weather: ''
    }
  },
  props: {
    weatherCity: Object
  }
}
</script>

<style scoped>
  .col {
    padding-bottom: 20%;
  }
</style>
