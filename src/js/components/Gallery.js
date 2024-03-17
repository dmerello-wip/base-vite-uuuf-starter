import { Component } from 'uuuf';
import { Splide } from '@splidejs/splide';
import '@/scss/components/_c-gallery.scss';

export default class Gallery extends Component {
    get DOM() {
        return {
            gallery: `[data-gallery]`,
        };
    }

    get SPLIDE_OPTS() {
        return {
            perPage: 2,
            perMove: 1,
            type: 'loop',
            gap: '1em',
            padding: { left: '0', right: '10%' },
        };
    }

    constructor(elem) {
        super(elem);
        console.log(this.constructor.name, 'init');
        this.splide = null;
    }

    async ready() {
        this.bind();
        console.log(this.constructor.name, 'ready');
        this.initSplide();
    }

    initSplide() {
        if (this.dom.gallery) {
            this.splide = new Splide(this.dom.gallery, this.SPLIDE_OPTS).mount();
        }
    }
}
