// 14. events in javascript:

// 1. onclick Event:
function clicked(){
    console.log('the button was clicked');
}

// 2. onLoad Event:
window.onload = function(){
    console.log('the document was loaded');
    // alert('document is loaded');
}

// 3. adding event listener : (only works on id's)
// click:
firstContainer.addEventListener('click',function(){
    // document.querySelectorAll('.container')[1].innerHTML = "<b> changing elements when clicked on 1st container</b>";
    console.log('click hua')
})

// mouseover:
firstContainer.addEventListener('mouseover',function(){
    console.log('mouse over hua')
})

// mouseout:
firstContainer.addEventListener('mouseout',function(){
    console.log('mouse out hua')
})

// mouseup:
firstContainer.addEventListener('mouseup',function(){
    console.log('mouse up when clicked on container')
})

// mousedown:
firstContainer.addEventListener('mousedown',function(){
    console.log('mouse down when clicked on container')
})

