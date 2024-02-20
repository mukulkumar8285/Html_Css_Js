function Offers(){
    let Para = document.getElementById("Para");
    if(Para.style.display === 'none'){
        Para.style.display = 'block';
    }else{
        Para.style.display = 'none';
    }
}
function Product_Description(){
    let Para = document.getElementById("Para-1");
    if(Para.style.display === 'none'){
        Para.style.display = 'block';
    }else{
        Para.style.display = 'none';
    }
   
}
function Exchange(){
    let Para = document.getElementById("Para-2");
    if(Para.style.display === 'none'){
        Para.style.display = 'block';
    }else{
        Para.style.display = 'none';
    }
   
  
}
function Add_Cart(){
    const Item_Name = document.getElementById("Item_Name");
    const material = document.querySelector("#material");
    
    // Check if material.innerHTML contains a valid number
    let count = parseInt(material.innerHTML);
    if (isNaN(count)) {
        count = 0; // If not a number, set count to 0
    }
    
    // Increment the cart count
    count++;
    material.innerHTML = count;
    
}
const Top_Image = () => {
    const imagelist = document.querySelector(".Side-Image");
    const sliderButtons = document.querySelectorAll(".slide-button");
    const maxScrollTop = imagelist.scrollHeight - imagelist.clientHeight;

    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide_Up" ? -1 : 1;
            const scrollAmount = imagelist.clientHeight * direction;
            imagelist.scrollBy({ top: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSliderButtons = () => {
        sliderButtons[0].style.display = imagelist.scrollTop <= 0 ? "none" : "block";
        sliderButtons[1].style.display = imagelist.scrollTop >= maxScrollTop ? "none" : "block";
    }

    imagelist.addEventListener("scroll", () => {
        handleSliderButtons();
    });

    // Initially call handleSliderButtons to set initial button visibility
    handleSliderButtons();
}

// Call the Top_Image function after its definition
Top_Image();