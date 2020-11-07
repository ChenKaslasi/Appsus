export default {
  name: 'home-page',
  template: `
  <section class="home-page">
    <main >
      <section class="top-container flex wrap column justify-center align-center">
        <h1 class="main-text flex">Welcome to Appsus</h1>
      </section>
      <section class="features-container flex column justify-center align-center">
          <div class="app-cards flex wrap justify-center align-center">
            <div class="card">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80">
              </div>
              <div class="card-content">
                <h1 class="card-header"></h1>
                <button class="card-btn">MissBooks <span>&rarr;</span></button>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80">
              </div>
              <div class="card-content">
                <button class="card-btn">MisterEmail<span>&rarr;</span></button>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80">
              </div>
              <div class="card-content">
                <button class="card-btn">MissKeep<span>&rarr;</span></button>
              </div>
            </div>
          </div>
      </section>
    </main>
  </section>
  `
}