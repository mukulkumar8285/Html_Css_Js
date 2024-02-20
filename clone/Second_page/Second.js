
let Hide = document.querySelectorAll("#hide");

function Gender(){
Hide.forEach(element=>{
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
});
   
}
let category = document.querySelectorAll("#Category");

function Category(){
    category.forEach(element=>{
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
});
   
}
let sizes = document.querySelectorAll("#Sizes");

function Sizes(){
    sizes.forEach(element=>{
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
});
   
}
let brand = document.querySelectorAll("#Brand");

function Brand(){
    brand.forEach(element=>{
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
});
   
}
let color = document.querySelectorAll("#Color");

function Color(){
    color.forEach(element=>{
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
});
   
}
let design = document.querySelectorAll("#Design");

function Design(){
    design.forEach(element=>{
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
});
   
}
let sleeve = document.querySelectorAll("#Sleeve");

function Sleeve(){
    sleeve.forEach(element=>{
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
});
   
}
window.onscroll = function() {fixLeftContainer()};

        var leftContainer = document.querySelector('.left_container');
        var leftContainerOffset = leftContainer.offsetTop;

        function fixLeftContainer() {
            if (window.pageYOffset >= leftContainerOffset) {
                leftContainer.style.position = 'fixed';
                leftContainer.style.top = '0';
            } else {
                leftContainer.style.position = 'static';
            }
        }

        let heart_Beat = {};

        function toggleHeart(event) {
            const heart_btn = event.target;
            
            if (!heart_Beat[heart_btn]) {
                heart_btn.innerHTML = "❤️";
                heart_Beat[heart_btn] = true;
            } else {
                heart_btn.innerHTML = "🤍";
                heart_Beat[heart_btn] = false;
            }
        }