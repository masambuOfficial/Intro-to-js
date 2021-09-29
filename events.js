//Using arrow functions to change the behavior of the HTML
// const changeText = () => {
//     const p = document.querySelector ('p');
//     p.textContent = 'I have changed because you clicked me!'
//     p.style.color = 'Green';
// } 

// function changeText (){ // a named group of instruction that performs more than one function
//     const p = document.querySelector ('p');
//     p.textContent = 'I have changed because you clicked me!'
//     p.style.color = 'Green';
//     div.textContent = 'Messages Appearing in the DIV'
//     div.style.border = "1px solid green";
// }
function changeText (){ // a named group of instruction that performs more than one function
    const div = document.querySelector ('div');
    div.textContent = 'I have changed because you clicked me!'
    div.style.border = "1px solid green";
}