import { Component } from 'uuuf';

export default class LangSwitcher extends Component {
    get DOM() {
        return {
            current: ['[data-current-lang]', {
                click: ev => {
                    console.log(ev);
                    this.elem.classList.toggle('open');
                },
            }],
            langSelect: ['[data-lang-select]', {
                change: this.handleMobileSelect,
            }],
        };
    }

    async ready() {
        this.bind();
    }

    handleMobileSelect(ev) {
        console.log(ev.currentTarget);
        const select = ev.currentTarget;
        const url = select.value;
        window.location = url;
    }
}
