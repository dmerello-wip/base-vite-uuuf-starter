import { Component, $$ } from 'uuuf';
import loadComponents from '@/js/loadComponents';

export default class MainHeader extends Component {
    get DOM() {
        return {
            toggleMenu: [$$`[data-toggle-menu]`, {
                click: this.toggleMenu,
            }],
            mainMenuPanel: `[data-js-component="MainMenuPanel"]`,
        };
    }

    get CSS() {
        return {
            menuOpen: '--open-panels',
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
        this.setHeaderHeight();
    }

    toggleMenu() {
        const isOpen = this.css.menuOpen.match(this.elem);
        const mainMenuComp = this.dom.mainMenuPanel.component;
        if (!mainMenuComp) return;
        this.css.menuOpen(this.elem, !isOpen);
        mainMenuComp.toggleMenu(!isOpen);
    }

    setHeaderHeight() {
        const root = document.querySelector(':root');
        root.style.setProperty('--header-height', this.elem.offsetHeight + 'px');
    }
}
