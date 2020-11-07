
export default {
  name: 'home-page',
  template: `
  <section class="home-page">
    <main >
      <section class="top-container flex wrap column justify-center align-center">
        <h1 class="main-text flex">Welcome to Appsus</h1>
      </section>
      <section class="features-container flex column justify-center align-center">
          <div @click.stop="setMissBooks" class="app-cards flex wrap justify-center align-center">
            <div class="card flex column justify-center align-center">
                <img src="../../assets/icon/books.svg">
                <button class="card-btn">MissBooks <span>&rarr;</span></button>
            </div>
            <div @click.stop="setMisterEmail" class="card card flex column justify-center align-center">
                <img src="../../assets/icon/email.svg">
                <button class="card-btn">MisterEmail <span>&rarr;</span></button>
            </div>
            <div @click.stop="setMissKeep" class="card card flex column justify-center align-center">
                <img src="../../assets/icon/note.svg">
                <button class="card-btn">MissKeep <span>&rarr;</span></button>
            </div>
          </div>
      </section>
    </main>
  </section>
  `,
  methods: {
    setMissBooks() {
      this.$router.push('/books');
    },
    setMisterEmail() {
      this.$router.push('/mail');
    },
    setMissKeep() {
      this.$router.push('/keep');
    },
  }
}