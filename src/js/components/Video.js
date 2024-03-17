import { Component, $$ } from 'uuuf';
import Plyr from 'plyr';

export default class Video extends Component {
    get DOM() {
        return {
            playerEl: $$`[data-player]`,
        };
    }

    constructor(elem) {
        super(elem);
        console.log(this.constructor.name, 'init');
        this.player = null;
    }

    async ready() {
        this.bind();
        console.log(this.constructor.name, 'ready');
        this.initPlayer();
    }

    initPlayer() {
        if (this.dom.playerEl[0]) {
            this.player = new Plyr(this.dom.playerEl[0]);
        }
    }
}
