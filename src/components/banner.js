export default {
    name: "banner",
    data() {
        return {
            bannerEl: '',
            len: 0,
            active: 0
        }
    },
    methods: {
        itemStyle(index) {
            let descript = {
                left: `${index * 20}vw`
            };
            return descript;
        },
        clickNext() {
            this.active = this.getIndex(this.active + 1);
        },
        clickPre() {
            this.active = this.getIndex(this.active - 1);
        },
        getIndex(index) {
            let i = index % this.len;
            return i < 0 ? this.len + i : i;
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.bannerEl = this.$refs.banner;
            this.len = this.bannerEl.children.length;
        })
    },
    render(h) {
        console.log(this.$slots, this)
        let items = this.$slots.default.map(item => h())
        return h('div', [
            h('div', {
                class: 'banner-wrap'
            }, [
                h('div', {
                    class: 'banner',
                    ref: 'banner'
                }, this.$slots.default)
            ]),
            h('button', {
                on: {
                    click: this.clickNext
                }
            }, 'btnNext'),
            h('button', {
                on: {
                    click: this.clickPre
                }
            }, 'btnPre')
        ])
    }
};