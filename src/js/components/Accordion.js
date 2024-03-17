import { Component, $$ } from 'uuuf';

export default class Accordion extends Component {
    get DOM() {
        return {
            trigger: [$$`[data-acc-trigger]`, {
                click: () => {
                    if (this.isDisabled) return;
                    if (this.isOpen) return this.close({ withEvent: true });
                    this.open({ withEvent: true });
                },
            }],
            panel: `[data-acc-panel]`,
            panelContainer: `[data-acc-panel-container]`,
        };
    }

    async ready() {
        this.bind();
        // remove inline display none (layout shift prevention)
        if (this.dom.panel) {
            this.dom.panel.style.display = '';
        }
    }

    _animateHeight(height, cb) {
        if (!this.dom.panel) return;
        const transitionendHandler = () => {
            this.dom.panel.removeEventListener('transitionend', transitionendHandler);
            this.dom.panel.dataset.accPanel = '';
            this.dom.panel.style.height = '';
            cb();
        };

        this.dom.panel.addEventListener('transitionend', transitionendHandler);
        this.dom.panel.dataset.accPanel = 'animate';
        this.dom.panel.style.height = height;
    }

    open(opt = { withEvent: false }) {
        const childHeight = this.dom.panelContainer.offsetHeight;
        this._animateHeight(`${childHeight}px`, () => {
            this.elem.dataset.acc = 'open';
            this.dom.trigger.ariaExpanded = true;
            if (!opt.withEvent) return;
            this.emit('change');
            this.emit('open');
        });
    }

    readapt() {
        this.open();
    }

    close(opt = { withEvent: false }) {
        const childHeight = this.dom.panelContainer.offsetHeight;
        this.dom.panel.style.height = `${childHeight}px`;

        // restart animation
        // https://www.harrytheo.com/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
        // eslint-disable-next-line
        this.dom.panel.offsetHeight;

        this._animateHeight('0px', () => {
            this.elem.dataset.acc = 'closed';
            this.dom.trigger.ariaExpanded = false;
            if (!opt.withEvent) return;
            this.emit('change');
            this.emit('close');
        });
    }

    get isOpen() {
        return this.elem.dataset.acc === 'open';
    }

    enable() {
        this.elem.removeAttribute('data-acc-disabled');
    }

    disable() {
        this.elem.setAttribute('data-acc-disabled');
    }

    get isDisabled() {
        return this.elem.hasAttribute('data-acc-disabled');
    }
}
