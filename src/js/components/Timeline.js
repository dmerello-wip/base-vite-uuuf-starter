import { Component, $$ } from 'uuuf';

export default class Timeline extends Component {
    get CSS() {
        return {
            reversed: $$`reversed`,
        };
    }

    get DOM() {
        return {
            revertCta: [$$`[data-timeline-revert]`, {
                click: () => this.revert(),
            }],
        };
    }

    constructor(elem) {
        super(elem);
        console.log(this.constructor.name, 'init');
    }

    async ready() {
        this.bind();
        console.log(this.constructor.name, 'ready');
    }

    revert() {
        const isReversed = this.css.reversed.match(this.elem);
        this.css.reversed(this.elem, !isReversed);
    }
}
