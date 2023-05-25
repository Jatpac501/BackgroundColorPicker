const bck = document.querySelector('.container');
const input = document.querySelector('.input');
let color = {r: 0, g: 0, b: 0};
const rollColor = () => {
    if (color.r < 255) {
      color.r++;
    } else if (color.g < 255) {
      color.g++;
    } else if (color.b < 255) {
      color.b++;
    } else {
      color.r = 0;
      color.g = 0;
      color.b = 0;
    }
    bck.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    
}
let colorTimer = setInterval(rollColor, 20);
const start = () => {
    colorTimer = setInterval(rollColor, 20);
}
const stop = () => {
    clearInterval(colorTimer);
}
input.addEventListener('focus', () => {
    stop();
    input.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    input.value = `rgb(${color.r}, ${color.g}, ${color.b})`;
});
input.addEventListener('blur', () => {
    start();
    input.value = `rgb(${color.r}, ${color.g}, ${color.b})`;
});