// Ad Maiorem Dei Gloriam!

export default class Keyboard {
    constructor() {
        this.keyState = new Array(16);

        this.addDOMListeners();
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
    
    isKeyPressed(keyId) {
        return this.keyState[keyId];
    }


}