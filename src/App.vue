<template>
  <div class="page-container" id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">DashBoard Météo</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Menu</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>

          <router-link :to="{name:'Weather'}">
            <md-list-item>
              <md-icon>wb_sunny</md-icon>
              <span class="md-list-item-text">Méteo</span>
            </md-list-item>
          </router-link>
          <router-link :to="{name:'WeatherDetails', params: {id: this.cCity}}">
            <md-list-item>
              <md-icon>format_list_bulleted</md-icon>
              <span class="md-list-item-text">Details</span>
            </md-list-item>
          </router-link>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  },
  computed: {
    cCity: {
      get () {
        return this.$store.state.city
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 100vh;
  border: 1px solid rgba(#000, .12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-app-content {
  display: contents;
}
</style>
