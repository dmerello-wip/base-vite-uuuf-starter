import { Component, $$ } from 'uuuf';
import loadComponents from '@/js/loadComponents';

export default class MainMenuPanel extends Component {
    get CSS() {
        return {
            openPanel: $$`--opened`,
        };
    }

    constructor(elem) {
        super(elem);
        console.log(this.constructor.name, 'init');
    }

    async ready() {
        this.bind();
        loadComponents(this.elem);
        console.log(this.constructor.name, 'ready');
    }

    toggleMenu(bool) {
        this.css.openPanel(this.elem, bool);
    }
}
