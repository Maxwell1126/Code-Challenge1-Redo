$(document).ready(readyNow);
function readyNow(){
    $('#generate').on('click', addDiv)
    $('body').on('click', '#delete', deleteDiv)
    $('body').on('click', '#swap', swapColor)
}
let counter = 0;

function addDiv(){
    counter++;
    let main = $('#main');
    let newDiv = `<div class="red"><p>${counter}</p><button id=delete>Delete</button>
                  <button id=swap>Swap Color</button></div>`

    main.append(newDiv);
}

function deleteDiv(){
    $(this).parent().remove();
}

function swapColor(){
    $(this).parent().toggleClass("yellow");
    $(this).parent().toggleClass("red");
}