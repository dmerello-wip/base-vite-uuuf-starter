import { Component, $$ } from 'uuuf';
import loadComponents from '../loadComponents';
import { initObserver } from '../utils/intersection-observer';

export default class Page extends Component {
    get DOM() {
        return {
            animateTarget: $$`[data-animate-target]`,
        };
    }

    constructor(elem) {
        super(elem);
        console.log(this.constructor.name, 'init');
        this.observerOptions = { rootMargin: '-20% 0px -20% 0px' };
    }

    async ready() {
        this.bind();
        console.log(this.constructor.name, 'ready');
        await loadComponents(this.elem);
        this.setAnimations();
    }

    setAnimations() {
        this.dom.animateTarget.forEach(element => {
            initObserver(element, this.observerOptions);
        });
    }
}

