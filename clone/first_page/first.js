const initslider = () => {
    const imagelist = document.querySelector(".slide_wrapper .image-list")
    const sliderButtons = document.querySelectorAll(".slide_wrapper .slide-button")
    const maxScrollLeft = imagelist.scrollWidth - imagelist.clientWidth;
    
    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" })
            console.log(button);
        });
    });
    const handleSliderButtons = () => {
        console.log('Scroll left:', imagelist.scrollLeft);
        console.log('Max scroll left:', maxScrollLeft);
    
        sliderButtons[0].style.display = imagelist.scrollLeft <= 0 ? "none" : "block";
        sliderButtons[1].style.display = imagelist.scrollLeft >= maxScrollLeft ? "none" : "block";
    }
    
    imagelist.addEventListener("scroll", () => {
        handleSliderButtons();
    })
}

window.addEventListener("load", initslider);

const image = document.getElementById('Change_Image');

setInterval(function() {
  if (image.src.endsWith('clone.webp')) {
    image.src = './image2.jpg';
  } else {
    image.src = './clone.webp';
  }
}, 1000);

const image_1 = document.getElementById('change-image-1');
setInterval(function() {
    if (image_1.src.endsWith('clone.webp')) {
        image_1.src = './image2.jpg';
      } else {
        image_1.src = './clone.webp';
      }
    }, 1000);

    const image_part_2 = document.getElementById('change-img-part2');
    setInterval(function() {
        if (image_part_2.src.endsWith('clone.webp')) {
            image_part_2.src = './image2.jpg';
          } else {
            image_part_2.src = './clone.webp';
          }
        }, 1000);


        const initslider_3 = () => {
            const imagelist = document.querySelector(".slide_wrapper-3 .image-list-3")
            const sliderButtons = document.querySelectorAll(".slide_wrapper-3 .slide-button-3")
            const maxScrollLeft = imagelist.scrollWidth - imagelist.clientWidth;
            
            sliderButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide-3" ? -1 : 1;
                    const scrollAmount = imagelist.clientWidth * direction;
                    imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" })
                    console.log(button);
                });
            });
            const handleSliderButtons = () => {
                console.log('Scroll left:', imagelist.scrollLeft);
                console.log('Max scroll left:', maxScrollLeft);
            
                sliderButtons[0].style.display = imagelist.scrollLeft <= 0 ? "none" : "block";
                sliderButtons[1].style.display = imagelist.scrollLeft >= maxScrollLeft ? "none" : "block";
            }
            
            imagelist.addEventListener("scroll", () => {
                handleSliderButtons();
            })
        }
        
        window.addEventListener("load", initslider_3);
        