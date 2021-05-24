
function get_random_hsl() {
    var h = Math.floor(Math.random() * (361-300) + 300);
    var s = Math.floor(50);
    var l = Math.floor(Math.random() * (101-80) + 80);
    return 'hsl('+h+', '+s+'%, '+l+'%)';    
}

setInterval(() => {
    document.querySelector("body").style.backgroundColor = get_random_hsl();
}, 500);


// clock
const clockContent = document.querySelector('.now');

const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockContent.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const initClock = () => {
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
};

initClock();

