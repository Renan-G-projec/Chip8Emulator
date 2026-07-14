// Ad Maiorem Dei Gloriam!

export default class Keyboard {
    constructor() {
        this.keyState = new Array(16);

        this.keyMapping = "1234qwerasdfzxcv";

        this.addDOMListeners();
        this.addKeyboardDOMListeners();
    }
    
    addDOMListeners() {
        const keyboard = document.getElementById("keyboard-keys");
        let currentKeyId;
        keyboard.addEventListener("mousedown", (ev) => {
            const target = ev.target;
            if (target.tagName.toLowerCase() !== "button") return;
            
            const keyPressedId = Number.parseInt(target.innerText.toLowerCase(), 16);
            this.keyState[keyPressedId] = true;
            
            currentKeyId = keyPressedId;
            console.log(`Key ${keyPressedId} pressed!`)

        });
        document.addEventListener("mouseup", (ev) => {
            if (this.keyState[currentKeyId]) console.log(`Key ${currentKeyId} released!`)
            this.keyState[currentKeyId] = false;
        });
        
    }

    addKeyboardDOMListeners() {
        document.addEventListener("keydown", (ev) => {
            const key = this.keyMapping.indexOf(ev.key.toLowerCase());
            if (key) {
                this.keyState[key] = true;
            }
            console.log(`Key ${key} pressed!`)
        })
        document.addEventListener("keyup", (ev) => {
            const key = this.keyMapping.indexOf(ev.key.toLowerCase());
            if (key) {
                this.keyState[key] = false;
            }

            console.log(`Key ${key} released!`)
        })
    }
    
    isKeyPressed(keyId) {
        return this.keyState[keyId];
    }


}