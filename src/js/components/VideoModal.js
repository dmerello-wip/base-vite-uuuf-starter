import { Component, $$ } from 'uuuf';
import Plyr from 'plyr';

export default class VideoModal extends Component {
    get DOM() {
        return {
            closeBtn: [$$`[data-close-btn]`, {
                click: this.closeModal,
            }],
            playBtns: $$`[data-play-btn]`,
            videoContainer: $$`[data-video-container]`,
            videoPlayer: $$`[data-video-player]`,
        };
    }

    get CSS() {
        return {
            openModal: 'modal-open',
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
        this.listenBtn();
    }

    listenBtn() {
        const playBtns = document.querySelectorAll(this.DOM.playBtns);
        playBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.setVideo(btn.dataset.playBtn);
                this.css.openModal(this.elem, true);
                document.documentElement.style.overflow = 'hidden';
            });
        });
    }

    closeModal() {
        this.css.openModal(this.elem, false);
        document.documentElement.style.overflow = 'auto';
        if (this.player) {
            this.player.stop();
        }
    }

    setVideo(videoObj) {
        const { src, type } = JSON.parse(videoObj);
        if (!this.player) {
            this.player = new Plyr(this.dom.videoPlayer);
        }
        switch (type) {
        case 'file':
            this.player.source = {
                type: 'video',
                sources: [
                    {
                        src,
                        type: 'video/mp4',
                    },
                ],
            };
            break;
        case 'youtube':
        case 'vimeo':
            this.player.source = {
                type: 'video',
                sources: [
                    {
                        src,
                        provider: type,
                    },
                ],
            };
            break;
        }
    }
}
