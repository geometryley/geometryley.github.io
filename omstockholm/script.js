
let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.item-wrap');


// let sliderItem = document.querySelectorAll('.slider-item')


toLeft.addEventListener('click', function () {
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft += slider.scrollWidth;
    }
    else {
        slider.scrollLeft -= 525;
    }

})



toRight.addEventListener('click', function () {
    let maxScrollRight = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollRight - 1) {
        slider.scrollLeft -= slider.scrollWidth;
    }
    else {
        slider.scrollLeft += 525;
    }
})

let div1 = document.querySelectorAll('.task-1');

        for (let i = 0; i < div1.length; i++){
            div1[i].onclick = function (){
                this.textContent = 'Ви наттиснули на блок №' + i;
            }
        }
        
        
        // ------------------------------------
        let btnMoreText = document.querySelectorAll('.read-more-btn');
        let hiddenText = document.querySelectorAll('.hidden-text');
        
        for (let i = 0; i < btnMoreText.length; i++){
            btnMoreText[i].onclick = function (){
                this.classList.toggle('show-btn');
                this.classList.toggle('hide-btn');
                hiddenText[i].classList.toggle('text-hide');
                hiddenText[i].classList.toggle('text-show');
            }
        }
        // -----------------------------
        let div5 = document.querySelectorAll(".div-5");
        
        for (let i = 0; i < div5.length; i++) {
            div5[i].onclick = function () {
                console.log('click');
                let r = Math.floor(Math.random() * (255 + 1));
                let g = Math.floor(Math.random() * (255 + 1));
                let b = Math.floor(Math.random() * (255 + 1));
        
                div5[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        
        }



        ScrollReveal().reveal('h1', { origin: 'top', delay: 700, distance: '50px' });
    ScrollReveal().reveal('h2', { origin: 'top', delay: 300, distance: '100px' });
    ScrollReveal().reveal('p', { origin: 'bottom', distance: '150px' });
    ScrollReveal().reveal('skran', { origin: 'bottom', distance: '150px' });
