

export default {
    name:'mail-filter',
    template: `
    <section class="mail-filter">
        <div class="filter-container">
            <button class="hamburger" @click="emitOpenSideBar"><i  class="icon fa fa-bars"></i></button> 
           <i class="icon fas fa-search"></i>
           <input class="search-input" type="text" v-model="filterBy.byText   " placeholder="Search mail" @input="emitFilter" />
        </div>
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
        },
        emitOpenSideBar() {
            this.$emit('doOpenSideBar')
        }
    }
}