import { Component } from 'uuuf';
import { Splide } from '@splidejs/splide';

export default class Alternate extends Component {
    get DOM() {
        return {
            gallery: `[data-gallery]`,
        };
    }

    get SPLIDE_OPTS() {
        return {
            type: 'slide',
            perPage: 1,
            perMove: 1,
            arrows: true,
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
