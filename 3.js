const stories = [
    {   dp: "https://images.unsplash.com/photo-1733135201578-b8646ebdcb6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"    
         ,username:"sahil_gandel"
         ,story:"https://images.unsplash.com/photo-1734205402869-d322431ca4f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" },
    {   dp: "https://images.unsplash.com/photo-1733371001616-0341f62c56c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"    
         ,username:"dictator"
         ,story:"https://images.unsplash.com/photo-1732823195636-b7b0e6d09abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D" },
    {   dp: "https://images.unsplash.com/photo-1733860474140-1734a8361e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"    
         ,username:"ladiiisss"
         ,story:"https://images.unsplash.com/photo-1734115861523-971b65914ad3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D" },
    {   dp: "https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"                 
         ,username:"newton"
         ,story:"https://images.unsplash.com/photo-1733324526586-87776afa1d04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D" },
    {   dp: "https://plus.unsplash.com/premium_photo-1734218351052-924f089b80c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"           
         ,username:"rao saab" 
         ,story:"https://images.unsplash.com/photo-1715775491731-f96321aafd3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D"},
    {   dp: "https://images.unsplash.com/photo-1734523160404-8f500ff8b2e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" 
        ,username:"jyotirao" 
        ,story:"https://images.unsplash.com/photo-1734662026218-1dccddfc58c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D"},
    {   dp: "https://images.unsplash.com/photo-1734484476823-b85473816c39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"  
        ,username:"sakuntala devi"
        ,story:"https://images.unsplash.com/photo-1732919258492-4c7d9091fb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D" },
    {   dp: "https://images.unsplash.com/photo-1734495912895-8e132ac15a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"  
        ,username:"ramanujan" 
        ,story:"https://images.unsplash.com/photo-1734044259359-0411ccba00bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D"},
    {   dp: "https://images.unsplash.com/photo-1731766241554-4174b2e02b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"  
        ,username:"leo" 
        ,story:"https://images.unsplash.com/photo-1734355489469-1aaeb6a621b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D"},
    {    dp: "https://images.unsplash.com/photo-1732786097932-d9d206fcc484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"  
        ,username:"sahil"
        ,story:"https://images.unsplash.com/photo-1724961766924-b4574a0ef4d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D" }
];

var sum=''

stories.forEach(function(elem,idx){
    sum=sum+`<div class="story">
                    <img id=${idx} src="${elem.dp}" alt="">
                </div>`
})

var storiyan=document.querySelector(".storiyan")
var full=document.querySelector(".full")

storiyan.innerHTML= sum


storiyan.addEventListener('click',function(dets){
    var gold=stories[dets.target.id]
    console.log(gold.story);
    full.style.display='block'
    full.style.backgroundImage= `url(${gold.story})`


    setTimeout(function(){
    full.style.display='none'

    },3000)
})