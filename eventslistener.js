const p = document.querySelector('p');
const button = document.querySelector('button');
const button2 = document.getElementById('txt');

const change_text = () => {
    p.textContent = 'Hey There'
}
const alert_text = () => {
    alert('Alerted Because of an Event Listener')
}
const btn2 = () => {
    confirm('form submitted')
}
button.addEventListener('click', change_text);
button.addEventListener('dblclick', alert_text);
button2.addEventListener('focus', btn2);