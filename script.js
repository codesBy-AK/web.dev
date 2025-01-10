var h2=document.querySelector('h2')
var h3=document.querySelector('h3')
var btn=document.querySelector('button')

var flag = 0;

var alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'Enter', 'Space', 'Backspace', 'Tab', 'Shift', 'Control', 'Alt', 'Escape'
];

btn.addEventListener('click',function(){
     h3.innerHTML = alphabets[Math.floor(Math.random() * alphabets.length)];
     btn.innerHTML = 'skip';
     h2.innerHTML ='____';
})


document.addEventListener('keydown',function(det){
    h2.innerHTML = det.key;
    if(h2.innerHTML==h3.innerHTML){
            h3.innerHTML =alphabets[Math.floor(Math.random() * alphabets.length)];
            
    }
    else{
        h2.innerHTML = 'sahi likh bsdk';
    }
    if( h2.innerHTML =='sahi likh bsdk'){
        h2.style.color = 'red';
    }
    if( h2.innerHTML !='sahi likh bsdk'){
        h2.style.color = 'white';
    }

})
