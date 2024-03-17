import { Component, $$ } from 'uuuf';

export default class ContactForm extends Component {
    get DOM() {
        return {
            withMessages: $$`[data-form-with-messages]`,
        };
    }

    constructor(elem) {
        super(elem);
        console.log(this.constructor.name, 'init');
    }

    async ready() {
        this.bind();
        console.log(this.constructor.name, 'ready');
        this.scrollIfMessages();
    }

    scrollIfMessages() {
        if (this.dom.withMessages.length > 0) {
            this.elem.scrollIntoView();
        }
    }
}
