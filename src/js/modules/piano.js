const pianoContainer = document.createElement('div');
pianoContainer.classList.add('flex', 'piano');
const Whitecontainer = document.createElement('div');
Whitecontainer.classList.add('whites');
const BlackContainer = document.createElement('div');
BlackContainer.classList.add('blacks');
const soundContainer = document.querySelector('.sounds');
let container = document.querySelector('.container');

class Piano {
    constructor() {
        this.noteRange = ['c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'b1', 'c2', 'd2', 'e2', 'f2', 'g2', 'a2', 'b2', 'c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3', 'c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'd5', 'e5', 'f5', 'g5', 'a5', 'b5', 'c6', 'd6', 'e6', 'f6', 'g6', 'a6', 'b6', 'c7', 'd7', 'e7', 'f7', 'g7', 'a7', 'b7', 'c8'];
        this.blacknotes = ['db1', 'eb1', 'gb1', 'ab1', 'bb1', 'db2', 'eb2', 'gb2', 'ab2', 'bb2', 'db3', 'eb3', 'gb3', 'ab3', 'bb3', 'db4', 'eb4', 'gb4', 'ab4', 'bb4', 'db5', 'eb5', 'gb5', 'ab5', 'bb5', 'db6', 'eb6', 'gb6', 'ab6', 'bb6', 'db7', 'eb7', 'gb7', 'ab7', 'bb7'];
        this.whitekeys = ['q', 's', 'd', 'f', 'g', 'h'];
    }

    build() {
        let i = 0;
        do {
            let keybordWhites = document.createElement('div');
            keybordWhites.classList.add(`key`, 'white');
            keybordWhites.dataset.note = this.noteRange[i];
            Whitecontainer.appendChild(keybordWhites);

            let soundTag = new Audio(`dist/assets/sounds/${this.noteRange[i]}.mp3`);
            soundTag.id = this.noteRange[i];
            soundTag.setAttribute('type', 'audio/mp3');
            soundContainer.appendChild(soundTag);
            i++;
        } while (i < this.noteRange.length);
        pianoContainer.appendChild(Whitecontainer);

        let j = 0;
        do {
            let keybordBlacks = document.createElement('div');
            keybordBlacks.classList.add(`key`, 'black', `${this.blacknotes[j]}`);
            keybordBlacks.dataset.note = this.blacknotes[j];
            BlackContainer.appendChild(keybordBlacks);

            let blackSoundsTag = new Audio(`dist/assets/sounds/${this.blacknotes[j]}.mp3`);
            blackSoundsTag.id = this.blacknotes[j];
            blackSoundsTag.setAttribute('type', 'audio/mp3');
            soundContainer.appendChild(blackSoundsTag);
            j++;
        } while (j < this.blacknotes.length);
        pianoContainer.appendChild(BlackContainer);

        container.appendChild(pianoContainer);
        this.playNote();
    }
    playNote() {
        let keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.addEventListener('click', (e) => {
                //let audioItems = [...document.querySelectorAll('audio')];
                //console.log(audioItems);
                let toPlay = document.getElementById(key.dataset.note);
                //console.log(toPlay);
                toPlay.currentTime = 0;
                toPlay.play();
            });
        });
    }





}
export { Piano };