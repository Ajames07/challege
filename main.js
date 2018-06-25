console.log('JS')
$(document).ready(readyNow);

function readyNow() {
    console.log('JQ')
    clickHandler();
}

function clickHandler(){
    generateDiv();
    console.log('click handler')
}
function generateDiv(){
    $('.button').on('click',pTagCreate);
        let newDiv = $('<div></div>');
        newDiv.append($('#testDiv'));
        
        console.log('generate Div')
    
}

function pTagCreate(){
    let pTag = $('<p></p>');
    pTag.append(`<p>${'.button'}</p>`);
    
    $('.button').val();
    console.log('PTag creator')
    addBtns();
}

function addBtns() {
    swapBtn = new $('.button').text('swap');
    deleteBtn = new $('.button').text('delete');
   
    console.log('Swap & delete');
}