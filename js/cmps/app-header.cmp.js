export default {
  template: `
  <header class="app-header">
  <router-link to="/" ><h1 class="logo">Appsus</h1></router-link>
    <nav>
            <router-link to="/" >Home</router-link>
            <router-link to="/books" >MissBooks</router-link>
            <router-link to="/mail" >MisterEmail</router-link>
            <router-link to="/keep" >MissKeep</router-link>
            <router-link to="/about">About Us</router-link>
        </nav> 
            
</header>
  `
}