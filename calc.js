let screenOutput = document.getElementById('screen')
let screenDis = "";
const getInput = (value) => {
    screenOutput.innerText = "";
    screenDis += value;
    screenOutput.innerText = screenDis;
}
const clearBtn = () => {
    screenDis = "";
    screenOutput.innerText = screenDis;
}
const screenResult = () => {
    try {
        if (eval(screenDis) == undefined) {
            screenOutput.innerText = ('fuck off')
        } else {
            screenOutput.innerText = eval(screenDis)
            sceenDis = "";
        }

    } catch (error) {
        screenOutput.innerText = ('FUCK OFF')
    }
}