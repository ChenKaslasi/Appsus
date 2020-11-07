export default {
  props: ['info'],
  template: `
  <section class="note-video">
    <div class="video-responsive flex column">
      <iframe :src="transformVideoUrl"></iframe>
    </div>
    <h4 class="note-title flex align-center"><i class="fa fa-youtube"></i>{{info.title}}</h4>
  </section>
  `,
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    transformVideoUrl() {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = this.info.url.match(regExp);
        if (match && match[2].length == 11) {
            return `https://www.youtube.com/embed/${match[2]}` ;
        } else return 'error';
    }
  },
}