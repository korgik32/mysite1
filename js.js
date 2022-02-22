onload = () => {

    // клонирование слайдов

    let countSlide = 1;

    function cloneSlide() {

        let clone = document.querySelector(".swiper-slide").cloneNode(true);
        let newElem = document.querySelector(".swiper-wrapper");
        newElem.append(clone);

        /*         document.getElementsByClassName('main_top-block')[countSlide].style.cssText = `background: url(img/background_main/${countSlide + 1}.png) no-repeat;
                                                                                    background-position: 75% center;
                                                                                    background-size:cover;`; */
        document.getElementsByClassName('main_top-block')[countSlide].style.cssText = `background: url(img/background_main/${countSlide + 1}.png) 75% center / cover no-repeat;`;
        countSlide++;
    }
    function getCoords(elem) {
        var target_band = document.querySelector(`${elem}`).getBoundingClientRect();

        var target_pagination_container = document.querySelector(`.swiper-pagination__container`);

        let target_swiper_pagination_wrapper = document.querySelector(`.swiper-pagination__wrapper`);

        let target_width_container = document.querySelector(`.main_top_container`).getBoundingClientRect();

        let target_pagination = document.querySelector(`.swiper-pagination`);

        target_pagination_container.style.cssText = `position: absolute;
                                top: ${target_band.top + scrollY}px;

        `;

        target_swiper_pagination_wrapper.style.cssText = `
                                                        display: flex;
                                                        justify-content: flex-end;
                                                        
                                                        height: 30px;
                                                        width: ${target_width_container.width}px;
                                                        
        
        `;

    }

    setInterval(getCoords, 100, '._band');
    cloneSlide();
    cloneSlide();




    new Swiper('.my-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            //буллеты
            //.swiper-pagination-bullet
            clickable: true,
        },
    });
    /* document.getElementsByClassName('main_top-block')[0].style.background = `url("img/background_main/3.png") no - repeat; `; */

    /* let qwer = document.querySelector(".swiper-container"); */
    let qwer = document.getElementsByClassName('swiper-container')[0];
    /* console.log(getComputedStyle(qwer)); */


}   