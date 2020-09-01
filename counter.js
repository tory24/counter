var decrease = document.getElementById('decrease');
var increase = document.getElementById('increase');
var reset = document.getElementById('reset');

reset.onclick = () => {
    document.getElementById('num').innerHTML = 0;
}

decrease.onclick = () => {
    document.getElementById('num').innerHTML--;
};

increase.onclick = () => {
    document.getElementById('num').innerHTML++;
}

