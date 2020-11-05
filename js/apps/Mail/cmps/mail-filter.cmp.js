

export default {
    template: `
    <section class="mail-filter">
        <input type="text" v-model="filterBy.byText   " placeholder="Search mail" @input="emitFilter" />
    </section>
`,
    data() {
        return {
            filterBy: { byText: '' }

        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}