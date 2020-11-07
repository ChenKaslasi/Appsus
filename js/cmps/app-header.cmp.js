export default {
  template: `
  <header class="app-header flex align-center" @click.top="closeNav">
  <router-link to="/" ><h1 class="logo">Appsus</h1></router-link>
    <nav>
      <div class="nav-container">
        <span class="hemburger" @click.stop="toggleNav"><i  class="fa fa-bars"></i></span> 
        <ul class="flex wrap" v-show="navIsOpen">
          <div class="triangle"></div>
          <router-link to="/" title="Home"><i class="fa fa-home"></i></router-link>
          <router-link to="/books" title="MissBooks"><i class="fa fa-book-open"></i></router-link>
          <router-link to="/mail" title="MissKeep"><i class="fa fa-envelope"></i></router-link>
          <router-link to="/keep" title="MisterEmail"><i class="fa fa-sticky-note"></i></router-link>
          <router-link to="/about" title="About us"><i class="fa fa-address-card"></i></router-link>
        </ul>
      </div>
    </nav> 
</header>
  `,
  data() {
    return {
      navIsOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen
    },
    closeNav() {
      this.navIsOpen = false
    }
  },
  computed: {
  }
}